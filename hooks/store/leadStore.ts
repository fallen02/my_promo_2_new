import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type leadStore = {
  lead: boolean
  updateLead: () => void
}

export const useLeadStore = create<leadStore>()(
  persist(
    (set) => ({
      lead: false,
      updateLead: () => set({ lead: true }),
    }),
    {
      name: 'lead-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)