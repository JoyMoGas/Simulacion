import { useState } from 'react'
import './App.css'

import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/index.js'

function App() {
  const SYMBOL_SETS = {
    classic: { X: '×', O: 'o' },
    emoji: { X: '🐱', O: '🐶' },
    fruit: { X: '🍎', O: '🍌' }
  }

  const [symbolSet, setSymbolSet] = useState('classic')
  const TURNS = SYMBOL_SETS[symbolSet]

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    try {
      const parsed = boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
      return parsed.map(v => v === 'X' || v === 'O' ? v : null) // aseguramos consistencia
    } catch (e) {
      console.error('Error al parsear board del localStorage:', e)
      return Array(9).fill(null)
    }
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage === 'O' ? 'O' : 'X' // solo 'X' o 'O'
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn('X')
    setWinner(null)
    resetGameStorage()
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <select 
        value={symbolSet} 
        onChange={(e) => setSymbolSet(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', fontSize: '1rem' }}
      >
        <option value="classic">Clásico (× / o)</option>
        <option value="emoji">Emojis (🐱 / 🐶)</option>
        <option value="fruit">Frutas (🍎 / 🍌)</option>
      </select>

      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>

      <section className='game'>
        {
          board.map((value, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {value !== null ? TURNS[value] : null}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === 'X'}>{TURNS.X}</Square>
        <Square isSelected={turn === 'O'}>{TURNS.O}</Square>
      </section>

      <section>
        <WinnerModal resetGame={resetGame} winner={winner ? TURNS[winner] : winner} />
      </section>
    </main>
  )
}

export default App
