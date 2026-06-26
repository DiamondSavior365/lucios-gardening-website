import { BadgeCheck, Clock, HeartHandshake, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Family-Owned Care",
    description:
      "We treat every property with pride, respect, and attention to detail because this business is built on family values.",
    icon: HeartHandshake,
  },
  {
    title: "Reliable Service",
    description:
      "Consistent communication, dependable scheduling, and quality work customers can count on season after season.",
    icon: Clock,
  },
  {
    title: "Clean, Detailed Work",
    description:
      "From sharp lawn edges to clean tree trimming and polished landscapes, details matter in every project.",
    icon: Sparkles,
  },
  {
    title: "Experienced Outdoor Care",
    description:
      "Lawn care, tree care, landscaping, and irrigation support all come together to help your outdoor space look its best.",
    icon: BadgeCheck,
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
            Why Choose Us
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Reliable outdoor care with family pride behind every detail
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Lucio&apos;s Gardening is built around honest work, dependable
            service, and the belief that a well-maintained outdoor space can
            completely change the way a home feels.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#d8b65a] text-[#13291f]">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold">{reason.title}</h3>

                <p className="mt-4 leading-7 text-white/65">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
