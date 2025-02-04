import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {/* page main content */}
        <Outlet />
        {/* page main content ends */}
      </SidebarInset>
    </SidebarProvider>
  );
}
