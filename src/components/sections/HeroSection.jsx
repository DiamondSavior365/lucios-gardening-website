import { ArrowRight, Leaf } from "lucide-react";

import ButtonLink from "../ButtonLink.jsx";
import heroLuxuryEstate from "../../assets/hero/hero-luxury-estate-1.png";

function HeroSection() {
  return (
    // <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#13291f] px-6 py-24 text-white md:px-8 md:py-32">
    <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#13291f] px-6 py-16 text-white md:px-8 md:py-20">
      <img
        src={heroLuxuryEstate}
        alt="Luxury landscaped estate with lawn, trees, and outdoor living space"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#13291f]/0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#13291f]/75 via-[#13291f]/45 to-[#13291f]/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#13291f]/55 via-transparent to-transparent" />

      {/* <div className="relative mx-auto flex min-h-[calc(100vh-230px)] max-w-7xl flex-col justify-center"> */}
      <div className="relative mx-auto flex min-h-[calc(100vh-230px)] max-w-7xl flex-col justify-center">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
            <Leaf size={16} className="text-[#d8b65a]" />
            Family-owned lawn, tree, landscape, and irrigation care
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Beautiful Outdoor Spaces, Maintained with Care
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Lucio&apos;s Gardening provides reliable lawn care, tree care,
            landscaping, and irrigation services for homeowners and properties
            that deserve a clean, polished, luxury-inspired finish.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
            Residential • Commercial • Hotel • Outdoor Property Care
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/contact" variant="gold" icon={ArrowRight}>
              Request Estimate
            </ButtonLink>

            <ButtonLink to="/services" variant="outlineLight">
              View Services
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/15 pt-8 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
              01 Lawn Care
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Precision mowing & clean edging
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
              02 Tree Care
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Tree, palm & stump support
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
              03 Landscaping
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Planting & outdoor upgrades
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
              04 Irrigation
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Efficient sprinkler coverage
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-white/40" />
      </div> */}
      {/* <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 lg:flex">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em]">
          Scroll
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-white/35 pt-2">
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div> */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 lg:flex">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em]">
          Scroll
        </span>

        <div className="flex h-11 w-6 justify-center rounded-full border border-white/35 pt-2">
          <span className="scroll-dot h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
