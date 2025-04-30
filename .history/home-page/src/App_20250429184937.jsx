import './App.css'
import ProjectButton from './ProjectButton.jsx'

function App() {
  return (
    <>
      <h1>Simulacion</h1>
      <div className="btn-row">
        <div className="btn-column">
          <ProjectButton title="8 Reinas" url="https://proyecto1.vercel.app" subtitle="El problemas de las 8 reinas" />
          <ProjectButton title="Proyecto 2" url="https://proyecto2.vercel.app" subtitle="Visualizador de clima" />
          <ProjectButton title="Proyecto 3" url="https://proyecto3.vercel.app" subtitle="Control de inventario" />
        </div>
        <div className="btn-column">
          <ProjectButton title="Proyecto 4" url="https://proyecto4.vercel.app" subtitle="Aplicación de notas" />
          <ProjectButton title="Proyecto 5" url="https://proyecto5.vercel.app" subtitle="Dashboard de ventas" />
          <ProjectButton title="Proyecto 6" url="https://proyecto6.vercel.app" subtitle="Red social de deportes" />
        </div>
      </div>
    </>
  )
}

export default App
