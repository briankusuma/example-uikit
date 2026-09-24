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
    location: 'jogja, indonesia',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    email: 'contact@oneweekwonders.com',
    phone: '+123 4567 8910 1112',
    website: 'https://oneweekwonders.com/',
    verified: true,
  },
  updateProfile: (updatedData) =>
    set((state) => ({
      profile: {
        ...state.profile,
        ...updatedData,
      },
    })),

  // Products
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),

  // Cover Image
  coverImage: '/images/cover-banner.png',
  setCoverImage: (image) => set({ coverImage: image }),

  // Skeleton / Loading State
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  simulateLoading: (duration = 1500) => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isLoading: false });
    }, duration);
  },

  // Floating Success Toast Alert (Bottom Right)
  successToast: null,
  showSuccessToast: (message = 'Your business profile has been completed successfully!', duration = 2000) => {
    set({ successToast: message });
    setTimeout(() => {
      set({ successToast: null });
    }, duration);
  },
  clearSuccessToast: () => set({ successToast: null }),
}));
