import React from 'react';
import { ProductProvider } from './contexts/ProductContext';
import { ThemeProvider } from './contexts/ThemeContext';
import BarcodeScanner from './components/BarcodeScanner';
import PriceDisplay from './components/PriceDisplay';
import Clock from './components/Clock';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import './style.css';

export default function App() {
  return (
    <div className='container'>
      <h1>Verificador De precios</h1>
      <h3>Con archivo JSON</h3>
      <ThemeProvider>
        <ProductProvider>
          <div className="app-container">
            <header className="header">
              <img src="/logotipo.png" className="corner-image left" alt="Logo Izquierda" />
              <Clock />
              <img src="/logotipo.png" className="corner-image right" alt="Logo Derecha" />
            </header>

            <div className="controls">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            <BarcodeScanner />
            <PriceDisplay />
          </div>
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}