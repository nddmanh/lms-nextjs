"use client";

import { Layout, Compass } from "lucide-react";
import SidebarItem from "./sidebar-iem";

const guessRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
]

const SidebarRoutes = () => {
  const routes = guessRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          label={route.label}
        />
      ))
      }
    </div>
  );
}
 
export default SidebarRoutes;