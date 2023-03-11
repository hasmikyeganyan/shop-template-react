interface SidebarItem {
  title: string;
  icon: string;
  to: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-table-columns",
    to: "/dashboard",
  },
  {
    title: "Statistics",
    icon: "fa-solid fa-chart-simple",
    to: "/statistics",
  },
  {
    title: "Orders",
    icon: "fa-solid fa-bag-shopping",
    to: "/statistics",
  },
  {
    title: "Products",
    icon: "fa-solid fa-clipboard-list",
    to: "/products",
  },
  {
    title: "Customers",
    icon: "fa-solid fa-users",
    to: "/custmers",
  },
  {
    title: "Ads",
    icon: "fa-regular fa-plus",
    to: "/ads",
  },
  {
    title: "Categories",
    icon: "fa-solid fa-bars",
    to: "/categories",
  },
  {
    title: "Settings",
    icon: "fa-solid fa-gear",
    to: "/settings",
  },
  {
    title: "Help",
    icon: "fa-solid fa-circle-info",
    to: "/help",
  },
];

export default sidebarItems;
