import React, { createContext, useState, useEffect } from 'react'
import i18n from '../i18n/i18n'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [scannedCode, setScannedCode] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Obtener idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    i18n.changeLanguage(savedLang || 'es'); // Aplica el idioma al iniciar
    return savedLang || 'es';
  });

  useEffect(() => {
    fetch('https://products-api-gilt.vercel.app/api/products')
      .then((res) => res.json()) // <-- Esto es lo que necesitas
      .then((data) => {
        setProducts(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);
  

  const scanProduct = (code) => {
    setScannedCode(code)
    const product = products.find((p) => p.id === parseInt(code))
    setSelectedProduct(product || null)
  }

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang) // Guardar idioma en localStorage
  }

  return (
    <ProductContext.Provider
      value={{ products, scannedCode, selectedProduct, scanProduct, language, toggleLanguage }}
    >
      {children}
    </ProductContext.Provider>
  )
}
