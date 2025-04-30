import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useContext(ProductContext)
  return (
    <button onClick={toggleLanguage}>
      {language === 'es' ? 'ES' : 'EN'}
    </button>
  )
}