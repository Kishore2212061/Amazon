import { create } from "zustand";
import { Client } from "./userStore";
import { Performance } from "./performanceStore";
import { Stat, Product } from "./peoductStore";

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