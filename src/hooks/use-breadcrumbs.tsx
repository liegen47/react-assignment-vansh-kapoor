import { useLocation } from "react-router-dom";
import { useMemo } from "react";

type BreadcrumbItem = {
  title: string;
  link: string;
};

const routeMapping: Record<string, BreadcrumbItem[]> = {
  "/dashboard": [{ title: "Dashboard", link: "/dashboard" }],
  "/dashboard/task": [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Task", link: "/dashboard/task" },
  ],
  "/dashboard/settings": [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Settings", link: "/dashboard/settings" },
  ],
};

export function useBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  const breadcrumbs = useMemo(() => {
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path,
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
