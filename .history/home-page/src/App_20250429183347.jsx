import './App.css'
import ProjectButton from './ProjectButton.jsx'

function App() {
  return (
    <>
      <h1>Simulacion</h1>
      <ProjectButton
        title="8 Reinas" 
        url="https://proyecto1.vercel.app"
      />
      <ProjectButton
        title="Tic-Tac-Toe" 
        url="https://proyecto1.vercel.app"
      />
      <ProjectButton
        title="Verificador De Precios" 
        url="https://proyecto1.vercel.app" 
        subtitle="Con archivo TXT"
      />
      <ProjectButton
        title="Verificador De Precios" 
        url="https://proyecto1.vercel.app" 
        subtitle="Con archivo csv"
      />
      <ProjectButton
        title="Verificador De Precios" 
        url="https://proyecto1.vercel.app" 
        subtitle="Con archivo JSON"
      />
      <ProjectButton
        title="Verificador De Precios" 
        url="https://proyecto1.vercel.app" 
        subtitle="Con archivo SQL"
      />
    </>
  )
}

export default App
