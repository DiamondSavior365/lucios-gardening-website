import { ArrowRight, Leaf, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#13291f] px-6 py-24 text-white md:px-8 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_#d8b65a,_transparent_35%),radial-gradient(circle_at_bottom_right,_#224735,_transparent_40%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Leaf size={16} className="text-[#d8b65a]" />
            Family-owned lawn, tree, and landscape care
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Beautiful Outdoor Spaces, Maintained with Care
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Lucio&apos;s Gardening provides reliable lawn care, tree care,
            landscaping, cleanups, and outdoor maintenance for homeowners who
            want their property to look clean, healthy, and cared for.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b65a] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#13291f] transition hover:bg-white"
            >
              Request Estimate
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#13291f]"
            >
              View Services
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-3 text-sm text-white/65 sm:flex-row sm:items-center sm:gap-8">
            <p>Lawn Care</p>
            <p>Tree Care</p>
            <p>Landscaping</p>
            <p>Irrigation</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <div className="grid min-h-[420px] place-items-center rounded-[1.5rem] bg-[#f7f3ea] p-8 text-center text-[#13291f]">
            <div>
              <Phone className="mx-auto mb-6 text-[#9c7a32]" size={44} />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
                Project Photos Coming Soon
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Real Work Gallery Placeholder
              </h2>
              <p className="mt-4 max-w-sm leading-7 text-[#43594d]">
                This area will later feature a premium outdoor image, project
                photo, or before-and-after transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
