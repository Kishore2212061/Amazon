import { create } from "zustand";

// Interfaces
interface Stat {
    label: string;
    value: string;
}

interface Product {
    name: string;
    price: string;
    itemsold: number;
    photo: string;
}

interface Client {
    id: number;
    name: string;
    photo: string;
}

interface Performance {
    label: string;
    value: string;
    orders: number;
    percentage: number;
}

interface DashboardState {
    User: string;
    UserPhoto: string;
    Stat: Stat[];
    RecentSold: Product[];
    Client: Client[];
    Performance: Performance[];
    loading: boolean; 
    setLoading: (status: boolean) => void;
    setDashboardData: (data: Partial<DashboardState>) => void;
}

// Zustand Store
export const useDashboardStore = create<DashboardState>((set) => ({
    User: "",
    UserPhoto: "",
    Stat: [],
    RecentSold: [],
    Client: [],
    Performance: [],
    loading: true,
    setLoading: (status) => set({ loading: status }),
    setDashboardData: (data) =>
        set((state) => ({ ...state, ...data, loading: false })),
}));

