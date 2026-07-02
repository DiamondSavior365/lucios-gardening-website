import { BadgeCheck, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const values = [
  {
    title: "Family-Owned Pride",
    description:
      "Lucio’s Gardening is built on family values, honest work, and pride in every property we care for.",
    icon: HeartHandshake,
  },
  {
    title: "Detailed Outdoor Care",
    description:
      "From clean lawn edges to maintained trees and polished landscapes, every detail helps the property feel complete.",
    icon: Sparkles,
  },
  {
    title: "Reliable Service",
    description:
      "We focus on dependable communication, consistent scheduling, and outdoor care customers can trust.",
    icon: BadgeCheck,
  },
  {
    title: "Natural Beauty",
    description:
      "Our goal is to help outdoor spaces feel healthier, cleaner, more inviting, and more enjoyable.",
    icon: Leaf,
  },
];

function About() {
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      <PageHero
        eyebrow="About Lucio's Gardening"
        title="Family-owned outdoor care with a luxury-inspired standard"
        description="Lucio's Gardening provides lawn care, tree care, landscaping, and irrigation support with a focus on reliable service, clean work, and beautiful outdoor spaces."
      />

      <section className="px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#13291f] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Built on hard work, trust, and family pride
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              This website represents the next chapter for Lucio&apos;s
              Gardening. The goal is to honor the experience, quality, and hard
              work behind the business while creating a modern online presence
              that helps customers understand what is possible for their outdoor
              spaces.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              From regular property maintenance to tree care, irrigation, and
              landscape improvements, Lucio&apos;s Gardening is focused on
              helping homes and properties look clean, healthy, and cared for.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[1.75rem] border border-[#e2d8c3] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#13291f] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold">{value.title}</h3>

                  <p className="mt-4 leading-7 text-[#43594d]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
              More Than Maintenance
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Outdoor care designed to improve the look and feel of your
              property
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43594d]">
              Lucio&apos;s Gardening helps customers maintain outdoor spaces
              that feel clean, welcoming, and well cared for. From lawn care and
              tree support to landscaping improvements and irrigation service,
              our goal is to help every property look its best with reliable,
              detail-focused work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2d8c3] bg-[#f7f3ea] p-8">
            <h3 className="text-3xl font-bold">Outdoor Services</h3>

            <ul className="mt-6 grid gap-4 text-[#43594d]">
              <li>• Lawn care and clean edging</li>
              <li>• Tree and palm care support</li>
              <li>• Landscaping refreshes and planting</li>
              <li>• Irrigation checks and sprinkler adjustments</li>
              <li>• Property cleanups and curb appeal improvements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
              Work With Us
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s care for your outdoor space with pride
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              Whether you need routine care or want to start planning a cleaner,
              healthier, more beautiful outdoor space, Lucio&apos;s Gardening is
              ready to help.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-[#d8b65a] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#13291f] transition hover:bg-white"
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
