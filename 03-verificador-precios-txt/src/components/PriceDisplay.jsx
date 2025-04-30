import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useTranslation } from 'react-i18next'

export default function PriceDisplay() {
  const { selectedProduct } = useContext(ProductContext)
  const { t } = useTranslation()

  return (
    <div className="display">
      {selectedProduct ? (
        <>
          <p>{t('product')} : {selectedProduct.name}</p>
          <p>{t('price')} : {selectedProduct.price}</p>
        </>
      ) : (
        <p>{t('not_found')}</p>
      )}
    </div>
  )
}