import { Droplets, Leaf, Scissors, Trees } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Lawn Care",
    description:
      "Routine lawn maintenance, mowing, edging, trimming, and care that keeps your property looking clean and healthy.",
    icon: Scissors,
  },
  {
    title: "Tree Care",
    description:
      "Tree trimming, shaping, cleanup, and maintenance to help your trees stay safe, attractive, and properly managed.",
    icon: Trees,
  },
  {
    title: "Landscaping",
    description:
      "Planting, yard improvements, garden upgrades, cleanups, and outdoor enhancements designed to improve curb appeal.",
    icon: Leaf,
  },
  {
    title: "Irrigation",
    description:
      "Sprinkler and irrigation support to help lawns, plants, and trees receive the water they need efficiently.",
    icon: Droplets,
  },
];

function ServicesPreview() {
  return (
    <section className="bg-[#f7f3ea] px-6 py-20 text-[#13291f] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Complete care for beautiful outdoor spaces
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex w-fit rounded-full border border-[#d6c8aa] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#13291f] transition hover:border-[#13291f] hover:bg-[#13291f] hover:text-white"
          >
            View All Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-[#e2d8c3] bg-white/60 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-[#13291f] text-white transition group-hover:bg-[#9c7a32]">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-[#43594d]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
