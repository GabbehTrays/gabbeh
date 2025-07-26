// src/components/ProductModal.jsx
import Modal from 'react-modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState(product.mainImage);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`I'm interested in purchasing the ${t(product.titleKey)}.`);
    window.open(`https://wa.me/+989982261006?text=${message}`, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-body">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={mainImage}
            alt={t(product.titleKey)}
            className="main-image"
          />
          <div className="thumbnails">
            {product.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`${t(product.titleKey)} Thumbnail ${index + 1}`}
                className={mainImage === thumb ? 'active' : ''}
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        </div>
        {/* Details Section */}
        <div className="details flex-1">
          <h2 dir="auto">{t(product.titleKey)}</h2>
          <p dir="auto">{t(product.descriptionKey)}</p>
          <div className="info">
            <p><strong>{t('material')}:</strong> {product.material}</p>
            <p><strong>{t('dimensions')}:</strong> {product.dimensions}</p>
            <p><strong>{t('weight')}:</strong> {product.weight}</p>
            <p><strong>{t('price')}:</strong> {product.price}</p>
          </div>
          <div className="buttons">
            <a href="tel:+1800GABBEH">{t('call_to_order')}</a>
            <button onClick={handleWhatsAppOrder}>{t('order_on_whatsapp')}</button>
          </div>
        </div>
      </div>
      <button
        className="close-button"
        onClick={onRequestClose}
      >
        ✕
      </button>
    </Modal>
  );
};

export default ProductModal;