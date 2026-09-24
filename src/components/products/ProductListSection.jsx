import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { ProductCard } from './ProductCard';
import { ProductEmptyState } from './ProductEmptyState';
import { AddProductModal } from './AddProductModal';
import { useAppStore } from '../../store/useAppStore';

/**
 * ProductListSection component.
 * Displays the product list header, add product trigger, list of ProductCards or ProductEmptyState.
 */
export const ProductListSection = () => {
  const { products } = useAppStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <section className="biz-product-section">
      <div className="biz-product-section__header">
        <h3 className="biz-product-section__title">Product List</h3>
        <Button
          variant="primary"
          size="md"
          leftIcon={<Icon name="plus" size={20} />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Product
        </Button>
      </div>

      {products.length === 0 ? (
        <ProductEmptyState />
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
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </section>
  );
};

export default ProductListSection;
