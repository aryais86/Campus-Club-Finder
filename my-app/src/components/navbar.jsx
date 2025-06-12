import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md px-10 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Campus Club Finder</h1>
        <div className="space-x-6">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/clubs" className={navLinkStyles}>
            Clubs
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
