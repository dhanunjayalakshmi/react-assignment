import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-full flex items-center px-2 py-6 bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 text-white">
      <div className="w-3xl px-2 flex justify-between mx-auto">
        <p className="text-3xl">Logo</p>
        <nav className="flex gap-4 text-xl">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
