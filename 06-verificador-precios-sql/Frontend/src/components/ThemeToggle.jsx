import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? (
    <>
      <FontAwesomeIcon icon={faSun} /> Claro
    </>
  ) : (
    <>
      <FontAwesomeIcon icon={faMoon} /> Oscuro
    </>
  )}
</button>

  )
}