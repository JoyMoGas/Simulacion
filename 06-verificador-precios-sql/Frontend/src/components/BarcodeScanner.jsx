// components/BarcodeScanner.jsx
import React, { useContext, useRef, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import '../BarcodeScanner.css';

export default function BarcodeScanner() {
  const { scanProduct } = useContext(ProductContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-enfoca al cargar
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      scanProduct(e.target.value.trim());
      e.target.value = '';
    }
  };

  return (
    <div className="scanner-image-wrapper" onClick={() => inputRef.current.focus()}>
      <img src="/barcode-scan.gif" alt="Escáner de código de barras" className="scanner-gif" />
      <input
        type="text"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className="hidden-input"
      />
    </div>
  );
}
