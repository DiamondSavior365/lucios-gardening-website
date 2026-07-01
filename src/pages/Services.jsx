import { Droplets, Leaf, Scissors, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

const services = [
  {
    title: "Lawn Care",
    description:
      "Routine lawn maintenance designed to keep properties clean, healthy, and professionally maintained.",
    details: [
      "Mowing",
      "Edging",
      "Trimming",
      "Blowing",
      "Weed control support",
      "Routine property maintenance",
    ],
    icon: Scissors,
  },
  {
    title: "Tree Care",
    description:
      "Tree and palm maintenance focused on appearance, safety, and long-term health.",
    details: [
      "Tree trimming",
      "Palm trimming",
      "Tree shaping",
      "Branch cleanup",
      "Small tree maintenance",
      "Stump grinding support",
    ],
    icon: Trees,
  },
  {
    title: "Landscaping",
    description:
      "Landscape improvements that help properties feel cleaner, more polished, and more inviting.",
    details: [
      "Planting",
      "Flower bed refreshes",
      "Garden upgrades",
      "Soil preparation",
      "Yard cleanups",
      "Curb appeal improvements",
    ],
    icon: Leaf,
  },
  {
    title: "Irrigation",
    description:
      "Sprinkler and irrigation support to help lawns, plants, and trees receive water efficiently.",
    details: [
      "Sprinkler checks",
      "Sprinkler adjustments",
      "Irrigation repairs",
      "Water coverage improvements",
      "Lawn watering support",
      "Plant and tree watering support",
    ],
    icon: Droplets,
  },
];

function Services() {
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      <PageHero
        eyebrow="Our Services"
        title="Complete outdoor care for lawns, trees, landscapes, and irrigation"
        description="Lucio's Gardening provides dependable outdoor maintenance and property care for homeowners, commercial properties, hotels, and outdoor spaces that need a clean, polished look."
      />

      <section className="px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-[2rem] border border-[#e2d8c3] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#13291f] text-white">
                  <Icon size={30} />
                </div>

                <h2 className="text-3xl font-bold">{service.title}</h2>

                <p className="mt-4 leading-7 text-[#43594d]">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-3 text-[#43594d] sm:grid-cols-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#9c7a32]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
              Need Outdoor Service?
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s talk about what your property needs
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              Whether it is routine maintenance, tree care, irrigation, or a
              landscape refresh, Lucio&apos;s Gardening can help keep your
              outdoor space clean and cared for.
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

export default Services;
