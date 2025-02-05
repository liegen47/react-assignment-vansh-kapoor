import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 font-semibold">
          {/* Mobile Drawer */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    to="/order"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    Order Now
                  </Link>
                  <Link
                    to="/gifting"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    Gifting
                  </Link>
                  <Link
                    to="/recipes"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    Recipes
                  </Link>
                  <Link
                    to="/community"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    Community
                  </Link>
                  <Link
                    to="/store"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    upStore
                  </Link>
                  <Link
                    to="/faqs"
                    className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
                  >
                    FAQs
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left Nav Items (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/order"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              Order Now
            </Link>
            <Link
              to="/gifting"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              Gifting
            </Link>
            <Link
              to="/recipes"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              Recipes
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">
                upliance.ai
              </span>
            </Link>
          </div>

          {/* Right Nav Items (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/community"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              Community
            </Link>
            <Link
              to="/store"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              upStore
            </Link>
            <Link
              to="/faqs"
              className="text-gray-900 dark:text-gray-100 hover:text-purple-700 transition-colors"
            >
              FAQs
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                {user ? (
                  <Link to="/dashboard" className="flex items-center">
                    <LayoutDashboard className="h-5 w-5" />
                  </Link>
                ) : (
                  <Link to="/login" className="flex items-center">
                    <LogIn className="h-5 w-5" />
                  </Link>
                )}
              </Button>
            </div>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" size="icon">
              {user ? (
                <Link to="/dashboard" className="flex items-center">
                  <LayoutDashboard className="h-5 w-5" />
                </Link>
              ) : (
                <Link to="/login" className="flex items-center">
                  <LogIn className="h-5 w-5" />
                </Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
