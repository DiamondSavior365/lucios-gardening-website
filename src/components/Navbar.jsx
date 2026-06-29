import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2d8c3] bg-[#f7f3ea]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-[#13291f]"
        >
          Lucio&apos;s Gardening
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-sm font-medium text-[#43594d] transition hover:text-[#13291f]"
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#13291f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#224735] md:flex"
        >
          <Phone size={16} />
          Free Estimate
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="rounded-full border border-[#d6c8aa] p-2 text-[#13291f] transition hover:border-[#13291f] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-[#e2d8c3] bg-[#f7f3ea] px-6 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-[#43594d] transition hover:bg-white hover:text-[#13291f]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#13291f] px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#224735]"
            >
              <Phone size={16} />
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
