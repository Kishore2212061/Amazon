import { useDashboardStore } from "./useStore";

const dummyData = {
  User: "Dan",
  UserPhoto: "",
  Stat: [
    { label: "Favorites", value: "+6.9K" },
    { label: "Add to Bag", value: "+2.4K" },
    { label: "Orders", value: "+1.0K" },
  ],
  RecentSold: [
    {
      name: "Bang Bag",
      price: "1.5k",
      itemsold: 1,
      photo: "",
    },
  ],
  Client: [
    {
      id: 1,
      name: "Amy Pope",
      photo: "",
    },
    {
      id: 2,
      name: "Lee Waters",
      photo: "",
    },
    {
      id: 3,
      name: "Johnny Sutton",
      photo: "",
    },
    {
      id: 4,
      name: "Jennie Walton",
      photo: "",
    },
  ],
  Performance: [
    { label: "Total Income", value: "$   1.4K", orders: 150, percentage: 15 },
    { label: "Worst Selling", value: "$   1.0K", orders: 85, percentage: -10 },
    { label: "Best Selling", value: "$   1.0K", orders: 65, percentage: 45 },
  ],
};

export const useLoadDashboardData = () => {
  const setDashboardData = useDashboardStore((state) => state.setDashboardData);
  const setLoading = useDashboardStore((state) => state.setLoading);

  return () => {
    setLoading(true);
    setTimeout(() => {
      setDashboardData(dummyData);
    }, 3500);
  };
};
