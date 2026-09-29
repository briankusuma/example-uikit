import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailTopBar } from '../components/adsStore/ProductDetailTopBar';
import { ProductGallery } from '../components/adsStore/ProductGallery';
import { ProductInfoSection } from '../components/adsStore/ProductInfoSection';
import { DeleteProductModal } from '../components/adsStore/DeleteProductModal';
import { getProductById } from '../components/adsStore/productsData';
import { useAppStore } from '../store/useAppStore';

/**
 * ProductDetailPage component
 * Figma Node #22904:38148 ("Redirect to product detail")
 */
export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const showSuccessToast = useAppStore((state) => state.showSuccessToast);
  const deleteProduct = useAppStore((state) => state.deleteProduct);
  const isLoading = useAppStore((state) => state.isLoading);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const product = getProductById(id) || {};

  const handleBuyNow = () => {
    if (showSuccessToast) {
      showSuccessToast(`Order placed for ${product.title || 'Product'}!`);
    } else {
      alert(`Proceeding to checkout for ${product.title || 'Product'}`);
    }
  };

  const handleContactSeller = () => {
    navigate('/messages');
  };

  const handleConfirmDelete = () => {
    deleteProduct(product.id);
    if (showSuccessToast) {
      showSuccessToast('Product deleted successfully!');
    }
    setIsDeleteModalOpen(false);
    navigate('/ads-store');
  };

  return (
    <div className="biz-product-detail-page">
      {/* Top Bar with Back Arrow */}
      <ProductDetailTopBar
        title="Product Detail"
        onBack={() => navigate('/ads-store')}
      />

      {/* Main Content: Gallery (Left) + Product Info (Right) */}
      <div className="biz-product-detail-body">
        <div className="biz-product-detail-content">
          {/* Left Column: Media Gallery */}
          <div className="biz-product-detail-media-col">
            <ProductGallery
              isLoading={isLoading}
              images={product.images}
              mainImage={product.image}
              hasVideoThumb={product.hasVideoThumb}
              videoDuration={product.videoDuration}
              title={product.title}
            />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="biz-product-detail-info-col">
            <ProductInfoSection
              isLoading={isLoading}
              title={product.title}
              price={product.price}
              location={product.location}
              categories={product.categories}
              description={product.description}
              businessName={product.businessName}
              businessAvatar={product.businessAvatar}
              businessCategory={product.businessCategory}
              isVerified={product.isVerified}
              onBuyNow={handleBuyNow}
              onContactSeller={handleContactSeller}
              onDelete={() => setIsDeleteModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal (Figma Node #22631:9286) */}
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ProductDetailPage;
