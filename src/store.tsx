import { create } from "zustand";

type Store = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const useStore = create<Store>()((set) => ({
  activeSection: "computer",
  setActiveSection: (section) => set(() => ({ activeSection: section })),
}));
export default useStore;
