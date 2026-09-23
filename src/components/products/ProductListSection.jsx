import React from 'react';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

export const ProductListSection = () => {
  const { products, addProduct } = useAppStore();

  const handleAddProduct = () => {
    const title = prompt('Enter product name:');
    if (title && title.trim()) {
      addProduct({
        id: Date.now(),
        name: title.trim(),
        price: '300,000.00 SSP',
        desc: 'Premium quality product available in store.',
        image:
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=80',
      });
    }
  };

  return (
    <section className="biz-product-section">
      <div className="biz-product-section__header">
        <h3 className="biz-product-section__title">Product List</h3>
        <button
          className="oww-btn oww-btn--primary oww-btn--md"
          onClick={handleAddProduct}
        >
          <Icon name="plus" size={18} />
          <span>Add Product</span>
        </button>
      </div>

      {products.length === 0 ? (
        <div className="biz-product-section__empty-state">
          <div className="biz-product-section__empty-illustration">
            <Icon name="empty-box" size={150} />
          </div>
          <div className="biz-product-section__empty-texts">
            <h4 className="biz-product-section__empty-title">
              No product added
            </h4>
            <p className="biz-product-section__empty-desc">
              Add your first product to start selling and reach customers.
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: '0 24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {products.map((item) => (
            <div key={item.id} className="oww-card oww-card--product">
              <div className="oww-card__media">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="oww-card__content">
                <h4 className="oww-card__product-title" title={item.name}>
                  {item.name}
                </h4>
                <p className="oww-card__product-desc">{item.desc}</p>
                <div className="oww-card__price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
