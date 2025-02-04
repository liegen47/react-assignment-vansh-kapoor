import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">upliance.ai</h3>
            <p className="text-sm text-gray-200">
              Making cooking accessible to everyone through AI-powered
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/order" className="text-sm hover:text-gray-200">
                  Order Now
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="text-sm hover:text-gray-200">
                  Gifting
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm hover:text-gray-200">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-sm hover:text-gray-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gray-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-gray-200">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-sm hover:text-gray-200">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-sm hover:text-gray-200">
                  upStore
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-gray-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-600 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} upliance.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
