import { create } from "zustand";

interface UserStore {
  user: string;
  login: (name: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: "",
  login: (n) => set(() => ({ user: n })),
  logout: () => set(() => ({ user: "" })),
}));

export default useUserStore;
