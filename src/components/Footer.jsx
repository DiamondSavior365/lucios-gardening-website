import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#13291f] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9c7a32]">
              <Leaf size={20} />
            </div>
            <h2 className="text-2xl font-bold">Lucio&apos;s Gardening</h2>
          </div>

          <p className="max-w-md leading-7 text-white/75">
            Family-owned lawn care, tree care, landscaping, and outdoor
            maintenance focused on reliable service and beautiful outdoor
            spaces.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-white/75">
            <Link className="hover:text-white" to="/">
              Home
            </Link>
            <Link className="hover:text-white" to="/about">
              About
            </Link>
            <Link className="hover:text-white" to="/services">
              Services
            </Link>
            <Link className="hover:text-white" to="/gallery">
              Gallery
            </Link>
            <Link className="hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-white/75">
            <p className="flex items-center gap-3">
              <Phone size={18} />
              Phone number coming soon
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} />
              Email coming soon
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={18} />
              Southern California
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/55">
        © {new Date().getFullYear()} Lucio&apos;s Gardening. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
