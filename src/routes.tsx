import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Settings from "@/pages/Settings";
import Task from "@/pages/Task";
import { ProtectedRoute } from "@/middleware/ProtectedRoutes";
import { PublicRoute } from "./middleware/PublicRoutes";
import Login from "@/pages/auth-pages/login";
import Signup from "@/pages/auth-pages/signup";
import Home from "@/pages/Home";
import ForgotPassword from "@/pages/auth-pages/ForgotPassword";

const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/task",
        element: <Task />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
