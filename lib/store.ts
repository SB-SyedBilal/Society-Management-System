import { create } from 'zustand';
import { User, Plot } from './types';

interface AppState {
  users: User[];
  plots: Plot[];
  setUsers: (users: User[]) => void;
  setPlots: (plots: Plot[]) => void;
  addUser: (user: User) => void;
  addPlot: (plot: Plot) => void;
  // Auth
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAppStore = create<AppState>((set: any, get: any) => ({
  users: [],
  plots: [],
  setUsers: (users) => set({ users }),
  setPlots: (plots) => set({ plots }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  addPlot: (plot) => set((state) => ({ plots: [...state.plots, plot] })),
  // Auth
  isAuthenticated: false,
  currentUser: null,
  login: (email: string, password: string) => {
    // Mock login: check if email exists in users
    const { users } = get();
    const user = users.find((u: User) => u.email === email);
    if (user && password === 'password') { // Mock password
      set({ isAuthenticated: true, currentUser: user });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, currentUser: null }),
}));
