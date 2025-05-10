import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-200 shadow-md h-[100px] w-full sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4 h-full max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ClothCloud"
            className="h-9 w-auto max-w-[120px]"
          />
        </div>
        <div className="space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
