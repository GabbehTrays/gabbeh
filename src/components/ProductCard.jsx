// src/components/ProductCard.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="product-card"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={product.mainImage}
          alt={t(product.titleKey)}
          className="w-full h-48 object-cover"
        />
        <div className="content">
          <h3 dir="auto">{t(product.titleKey)}</h3>
          <p dir="auto">{t(product.descriptionKey)}</p>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;