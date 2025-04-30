import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useTranslation } from 'react-i18next'

export default function PriceDisplay() {
  const { selectedProduct } = useContext(ProductContext)
  const { t } = useTranslation()

  return (
    <div className="display">
      {selectedProduct ? (
        <div className="display-items">
          <img className="product-img" src={selectedProduct.imagen_url} alt="Imagen representativa del producto escaneado" />
          <div className="display-text">
            <p>{t('product')} : {selectedProduct.nombre}</p>
            <p>{t('price')} : {'$' + selectedProduct.precio}</p>
          </div>
        </div>
      ) : (
        <p>{t('not_found')}</p>
      )}
    </div>
  )
}