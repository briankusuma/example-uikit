import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // Tab State
  activeTab: 'shop', // 'shop' | 'ads'
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Notification Count
  unreadNotifications: 23,
  clearNotifications: () => set({ unreadNotifications: 0 }),

  // Search Query
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Business Profile Info
  profile: {
    name: 'Rise Loop',
    category: 'Computers',
    joinedDate: 'Nov 1, 2025',
    location: 'Juba, South Sudan',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    email: 'contact@riseloop.com',
    phone: '+211 - 7846 8294 8273',
    website: 'https://www.riseloop.com',
    verified: true,
  },

  // Products
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),

  // Cover Image
  coverImage: '/images/cover-banner.png',
  setCoverImage: (image) => set({ coverImage: image }),
}));
