// =============================================================================
// Products Mock Data conforming to Figma Node #22904:36568 and #22904:38148
// =============================================================================

export const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Pro Gaming Desktop PC',
    price: '300,000.00 SSP',
    image: '/images/product-gaming-pc.png',
    images: [
      '/images/product-gaming-pc.png',
      '/images/product-gaming-pc-2.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    hasVideoThumb: true,
    videoDuration: '00:21',
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Electronics',
    location: 'Juba, South Sudan',
    categories: ['Computer & Accessories', 'Tech Hardware', '3+'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    title: 'Macbook Pro 2021',
    price: '300,000.00 SSP',
    image: '/images/product-macbook-pro.png',
    images: [
      '/images/product-macbook-pro.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Electronics',
    location: 'Juba, South Sudan',
    categories: ['Laptops', 'Apple', 'Computers'],
    description:
      'Apple MacBook Pro with Apple M1 Pro chip delivers groundbreaking performance for professional workflows. Stunning Liquid Retina XDR display, advanced camera and audio, and all the ports you need.',
  },
  {
    id: 3,
    title: 'Beats Studio Pro',
    price: '300,000.00 SSP',
    image: '/images/product-beats-studio.png',
    images: [
      '/images/product-beats-studio.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Audio & Music',
    location: 'Juba, South Sudan',
    categories: ['Headphones', 'Audio', 'Wireless'],
    description:
      'Experience immersive listening with Beats Studio Pro. Fully custom acoustic platform delivers powerful, balanced sound with Active Noise Cancelling and Transparency mode.',
  },
  {
    id: 4,
    title: 'Airpods Max',
    price: '300,000.00 SSP',
    image: '/images/product-airpods-max.png',
    images: [
      '/images/product-airpods-max.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Audio & Music',
    location: 'Juba, South Sudan',
    categories: ['Headphones', 'Apple', 'Wireless'],
    description:
      'AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Active Noise Cancellation with Transparency mode.',
  },
  {
    id: 5,
    title: 'Pro Gaming Desktop PC (Special Edition)',
    price: '300,000.00 SSP',
    image: '/images/product-gaming-pc-2.png',
    images: [
      '/images/product-gaming-pc-2.png',
      '/images/product-gaming-pc.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    hasVideoThumb: true,
    videoDuration: '00:21',
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Electronics',
    location: 'Juba, South Sudan',
    categories: ['Computer & Accessories', 'Tech Hardware', '3+'],
    description:
      'High-performance custom gaming desktop PC featuring RGB lighting, liquid cooling, and top-tier GPU capability. Built for intensive gaming, streaming, and creative tasks.',
  },
  {
    id: 6,
    title: 'Macbook Pro 2021 M1 Max',
    price: '300,000.00 SSP',
    image: '/images/product-macbook-pro.png',
    images: [
      '/images/product-macbook-pro.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Electronics',
    location: 'Juba, South Sudan',
    categories: ['Laptops', 'Apple', 'Computers'],
    description:
      'Apple MacBook Pro with Apple M1 Pro chip delivers groundbreaking performance for professional workflows. Stunning Liquid Retina XDR display, advanced camera and audio.',
  },
  {
    id: 7,
    title: 'Beats Studio Pro Wireless',
    price: '300,000.00 SSP',
    image: '/images/product-beats-studio.png',
    images: [
      '/images/product-beats-studio.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Audio & Music',
    location: 'Juba, South Sudan',
    categories: ['Headphones', 'Audio', 'Wireless'],
    description:
      'Experience immersive listening with Beats Studio Pro. Fully custom acoustic platform delivers powerful, balanced sound with Active Noise Cancelling and Transparency mode.',
  },
  {
    id: 8,
    title: 'Pro Gaming Desktop PC Ultimate',
    price: '300,000.00 SSP',
    image: '/images/product-gaming-pc.png',
    images: [
      '/images/product-gaming-pc.png',
      '/images/product-gaming-pc-2.png',
      '/images/product-thumb-1.png',
      '/images/product-thumb-2.png',
    ],
    hasVideoThumb: true,
    videoDuration: '00:21',
    businessName: 'Riseloop',
    businessAvatar: '/images/business-avatar.png',
    isVerified: true,
    businessCategory: 'Electronics',
    location: 'Juba, South Sudan',
    categories: ['Computer & Accessories', 'Tech Hardware', '3+'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export const getProductById = (id) => {
  const numId = Number(id);
  return PRODUCTS_DATA.find((p) => p.id === numId) || PRODUCTS_DATA[0];
};
