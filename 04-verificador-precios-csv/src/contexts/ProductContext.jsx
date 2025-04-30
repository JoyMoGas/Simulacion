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
    fetch('/productos.csv')
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split('\n')
        const data = lines.map((line) => {
          const [id, name, price] = line.split(',')
          return { id, name, price }
        })
        setProducts(data)
      })
  }, [])

  const scanProduct = (code) => {
    setScannedCode(code)
    const product = products.find((p) => p.id === code)
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
