import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e2d8c3] bg-[#f7f3ea]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-bold tracking-wide text-[#13291f]">
          Lucio&apos;s Gardening
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm font-medium text-[#43594d] hover:text-[#13291f]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-[#43594d] hover:text-[#13291f]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-[#43594d] hover:text-[#13291f]"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-[#43594d] hover:text-[#13291f]"
            to="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-sm font-medium text-[#43594d] hover:text-[#13291f]"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#13291f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#224735] md:flex"
        >
          <Phone size={16} />
          Free Estimate
        </Link>

        <button className="rounded-full border border-[#d6c8aa] p-2 text-[#13291f] md:hidden">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
