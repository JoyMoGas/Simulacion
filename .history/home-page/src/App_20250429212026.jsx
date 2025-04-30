import './App.css'
import ProjectButton from './ProjectButton.jsx'

function App() {
  return (
    <>
      <h1>Simulación</h1>
      <h3>Realizado por: José Antonio Montaño Gastélum</h3>
      <div className="btn-row">
        <div className="btn-column">
          <ProjectButton title="8 Reinas" url="https://ocho-reinas-two.vercel.app" subtitle="El problemas de las 8 reinas" />
          <ProjectButton title="Tic-Tac-Toe" url="https://tic-tac-toe-eta-kohl-57.vercel.app" subtitle="Simulacion del juego" />
          <ProjectButton title="Verificador De Precios" url="https://precios-txt.vercel.app" subtitle="Con archivo TXT" />
        </div>
        <div className="btn-column">
          <ProjectButton title="Verificador De Precios" url="https://precios-csv.vercel.app" subtitle="Con archivo CSV" />
          <ProjectButton title="Verificador De Precios" url="https://precios-json.vercel.app" subtitle="Con archivo JSON" />
          <ProjectButton title="Verificador De Precios" url="https://precios-sql.vercel.app" subtitle="Con base de datos SQL" />
        </div>
      </div>
    </>
  )
}

export default App
