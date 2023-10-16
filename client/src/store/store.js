import { create } from 'zustand'

export const useBearStore = create((set) => ({
  showPostModal: false,
  openPostModal: () => set(() => ({ showPostModal: true })),
  closePostModal: () => set(() => ({ showPostModal: false })),
  user: null,
  setUser: (user) => set(() => ({ user: user })),
}))
