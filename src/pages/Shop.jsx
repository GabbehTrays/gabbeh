// src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setProducts(productsData.slice(0, 9));
  }, []);

  const loadMore = () => {
    if (products.length >= productsData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setProducts((prev) => [
        ...prev,
        ...productsData.slice(prev.length, prev.length + 3),
      ]);
    }, 1000);
  };

  return (
    <div className="main-content">
      <h2 dir="auto">{t('welcome')}</h2>
      <p dir="auto">{t('shop_description')}</p>
      <InfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasMore}
        // loader={<h4 dir="auto">Loading...</h4>}
        // endMessage={<p dir="auto">No more products to show.</p>}
      >
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Shop;