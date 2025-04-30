import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const ROWS = 8
const COLUMNS = 8
const QUEEN_IMAGES = [
  '/queen1.png',
  '/queen2.png',
  '/queen3.png',
]

const solutions = [
  [
    [0, 0], [1, 4], [2, 7], [3, 5], [4, 2], [5, 3], [6, 6], [7, 1],
  ],
  [
    [0, 1], [1, 3], [2, 5], [3, 7], [4, 2], [5, 4], [6, 6], [7, 0],
  ],
  [
    [0, 3], [1, 6], [2, 0], [3, 4], [4, 7], [5, 1], [6, 5], [7, 2],
  ],
]

function App() {
  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLUMNS).fill(false))
  )
  const [highlightedCells, setHighlightedCells] = useState([])
  const [blockedCells, setBlockedCells] = useState(
    Array.from({ length: ROWS }, () => Array(COLUMNS).fill(false))
  )
  const [queenImage, setQueenImage] = useState(QUEEN_IMAGES[0])

  const getThreatenedCells = (r, c) => {
    const threatened = []
    for (let i = 0; i < 8; i++) {
      threatened.push([r, i])
      threatened.push([i, c])
      if (r + i < 8 && c + i < 8) threatened.push([r + i, c + i])
      if (r - i >= 0 && c + i < 8) threatened.push([r - i, c + i])
      if (r - i >= 0 && c - i >= 0) threatened.push([r - i, c - i])
      if (r + i < 8 && c - i >= 0) threatened.push([r + i, c - i])
    }
    return threatened
  }

  const updateBlockedCells = (board) => {
    const newBlocked = Array.from({ length: 8 }, () => Array(8).fill(false))
    board.forEach((row, r) =>
      row.forEach((hasQueen, c) => {
        if (hasQueen) {
          const threatened = getThreatenedCells(r, c)
          threatened.forEach(([tr, tc]) => {
            if (!board[tr][tc]) {
              newBlocked[tr][tc] = true
            }
          })
        }
      })
    )
    setBlockedCells(newBlocked)
  }

  const updateBoard = (rowIndex, colIndex) => {
    setBoard(prevBoard => {
      const newBoard = prevBoard.map(row => [...row])
      const hasQueen = newBoard[rowIndex][colIndex]
      const currentQueenCount = prevBoard.flat().filter(Boolean).length

      if (hasQueen) {
        newBoard[rowIndex][colIndex] = false
      } else if (!blockedCells[rowIndex][colIndex] && currentQueenCount < 8) {
        newBoard[rowIndex][colIndex] = true
      }

      updateBlockedCells(newBoard)
      return newBoard
    })
  }

  const handleMouseEnter = (r, c) => {
    if (blockedCells[r][c]) return
    const newHighlights = getThreatenedCells(r, c)
    setHighlightedCells(newHighlights)
  }

  const handleMouseLeave = () => {
    setHighlightedCells([])
  }

  const queenCount = board.flat().filter(Boolean).length

  const isHighlighted = (r, c) =>
    highlightedCells.some(([hr, hc]) => hr === r && hc === c)

  const isBlocked = (r, c) => blockedCells[r][c]

  const resetBoard = () => {
    setBoard(Array.from({ length: ROWS }, () => Array(COLUMNS).fill(false)))
    setBlockedCells(Array.from({ length: ROWS }, () => Array(COLUMNS).fill(false)))
    setHighlightedCells([])
  }

  const applySolution = (solution) => {
    const newBoard = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(false))
    solution.forEach(([r, c]) => {
      newBoard[r][c] = true
    })
    setBoard(newBoard)
    updateBlockedCells(newBoard)
  }

  const changeQueenImage = (imageIndex) => {
    setQueenImage(QUEEN_IMAGES[imageIndex])
  }

  return (
    <main className='board'>
      <h1>Ocho Reinas</h1>
      <p>Reinas colocadas: {queenCount}/8</p>

      <div className='toolbar'>
        <div className='dropdowns'>
          <select onChange={(e) => changeQueenImage(e.target.value)}>
            <option value="0">Reina 1</option>
            <option value="1">Reina 2</option>
            <option value="2">Reina 3</option>
          </select>

          <select onChange={(e) => applySolution(solutions[e.target.value])}>
            <option value="">Selecciona una solución</option>
            <option value="0">Solución 1</option>
            <option value="1">Solución 2</option>
            <option value="2">Solución 3</option>
          </select>

          <button className='reset-btn' onClick={resetBoard}>Reiniciar tablero</button>
        </div>

        
      </div>

      <section className='game'>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((hasQueen, colIndex) => {
              const isDark = (rowIndex + colIndex) % 2 === 1
              const baseClass = `cell ${isDark ? 'dark' : 'light'}`
              const cellClass = isHighlighted(rowIndex, colIndex)
                ? `${baseClass} highlight`
                : baseClass

              return (
                <div
                  key={colIndex}
                  className={cellClass}
                  onClick={() => updateBoard(rowIndex, colIndex)}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hasQueen && (
                    <img src={queenImage} alt='Reina' className='queen' />
                  )}
                  {!hasQueen && isBlocked(rowIndex, colIndex) && (
                    <FontAwesomeIcon icon={faLock} className='lock-icon' />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </section>

      <div className='floating-buttons'>
        <a href='https://github.com/JoyMoGas/Simulacion/tree/main/01-ocho-reinas' target="_blank" rel="noopener noreferrer">
          <button className='btn-pj'>
            <p>Ver código fuente</p>
          </button>
        </a>
      </div>
    </main>
  )
}

export default App
