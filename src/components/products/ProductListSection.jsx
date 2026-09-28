import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { StoreProductCard } from '../adsStore/StoreProductCard';
import { ProductEmptyState } from './ProductEmptyState';
import { AddProductModal } from './AddProductModal';
import { ProductFilterDropdown } from './ProductFilterDropdown';
import { useAppStore } from '../../store/useAppStore';

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  if (!priceStr) return 0;
  const cleaned = String(priceStr).replace(/[^0-9.]/g, '');
  const val = parseFloat(cleaned);
  return isNaN(val) ? 0 : val;
};

/**
 * ProductListSection component conforming to Figma Node #22904:38281 and #22904:43181
 * Displays Explore Products header, Filter action, Add Product modal trigger,
 * 3-column product grid using StoreProductCard, and "Show More" button.
 */
export const ProductListSection = ({ isEditable = true }) => {
  const navigate = useNavigate();
  const { products } = useAppStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const [filters, setFilters] = useState({
    minPrice: 20000,
    maxPrice: 150000,
    sortBy: 'newest',
    isApplied: false,
  });

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (filters.isApplied) {
      result = result.filter((p) => {
        const price = parsePrice(p.price);
        return price >= filters.minPrice && price <= filters.maxPrice;
      });
    }

    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0) || b.id - a.id);
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0) || a.id - b.id);
        break;
      case 'name_asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }, [products, filters]);

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleCount);

  return (
    <section className="biz-product-section">
      {/* Header: Title, Subtitle, Filter & Add Actions */}
      <div className="biz-product-section__header">
        <div className="biz-product-section__header-left">
          <h3 className="biz-product-section__title">Explore Products</h3>
          <p className="biz-product-section__subtitle">
            {filteredAndSortedProducts.length > 0
              ? `${filteredAndSortedProducts.length} product${filteredAndSortedProducts.length > 1 ? 's' : ''} in total`
              : '0 product in total'}
          </p>
        </div>

        <div className="biz-product-section__header-actions">
          {/* Filter Dropdown Container */}
          <div className="biz-product-section__filter-wrapper">
            <Button
              variant={filters.isApplied ? 'primary' : 'outline'}
              size="md"
              leftIcon={<Icon name="filter" size={18} />}
              onClick={() => setIsFilterOpen((prev) => !prev)}
              aria-expanded={isFilterOpen}
            >
              Filter{filters.isApplied ? ' (Active)' : ''}
            </Button>

            <ProductFilterDropdown
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              currentFilters={filters}
              onApply={(newFilters) => {
                setFilters({ ...newFilters, isApplied: true });
                setVisibleCount(9);
              }}
              onReset={() => {
                setFilters({
                  minPrice: 20000,
                  maxPrice: 150000,
                  sortBy: 'newest',
                  isApplied: false,
                });
                setVisibleCount(9);
              }}
            />
          </div>

          {isEditable && (
            <Button
              variant="primary"
              size="md"
              leftIcon={<Icon name="plus" size={18} />}
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Product
            </Button>
          )}
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredAndSortedProducts.length === 0 ? (
        <ProductEmptyState />
      ) : (
        <div className="biz-product-section__grid">
          {displayedProducts.map((item) => (
            <StoreProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              showBusinessProfile={false}
              onClick={() => navigate(`/ads-store/product/${item.id}`)}
            />
          ))}
        </div>
      )}

      {/* Show More Button (Figma Node #22904:38323) */}
      {filteredAndSortedProducts.length > visibleCount && (
        <div className="biz-product-section__footer">
          <Button
            variant="outline"
            size="md"
            fullWidth
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Show More
          </Button>
        </div>
      )}

      {/* Add Product Modal */}
      {isEditable && (
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ProductListSection;
