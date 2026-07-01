import { ArrowRight, Bird, Carrot, HeartPulse, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import ButtonLink from "../ButtonLink";

const topics = [
  {
    title: "Healthier Outdoor Spaces",
    description:
      "Explore how gardens, trees, and green spaces can support relaxation, fresh air, and better time outside.",
    icon: HeartPulse,
  },
  {
    title: "Wildlife-Friendly Gardens",
    description:
      "Learn about plants, trees, and flowers that can attract birds, butterflies, and other beneficial wildlife.",
    icon: Bird,
  },
  {
    title: "Vegetable Gardens",
    description:
      "Get ideas for growing vegetables, herbs, and edible plants that make your yard more useful and enjoyable.",
    icon: Carrot,
  },
  {
    title: "Luxury Yard Ideas",
    description:
      "Discover ways to make a front yard, backyard, or garden feel more polished, elegant, and high-end.",
    icon: Sparkles,
  },
];

function OutdoorLivingSection() {
  return (
    <section className="bg-white px-6 py-20 text-[#13291f] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Outdoor Living Guide"
            title="More than maintenance — inspiration for better outdoor living"
            description="Lucio's Gardening is being built to help customers understand what is possible for their outdoor spaces. From lawn care and tree health to vegetable gardens, wildlife-friendly plants, and luxury landscape ideas, the goal is to educate, inspire, and help homeowners invest with confidence."
          />

          <ButtonLink
            to="/garden-journal"
            variant="primary"
            icon={ArrowRight}
            className="mt-10"
          >
            Garden Journal Coming Soon
          </ButtonLink>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.title}
                className="rounded-[1.75rem] border border-[#e2d8c3] bg-[#f7f3ea] p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#13291f] text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold">{topic.title}</h3>

                <p className="mt-4 leading-7 text-[#43594d]">
                  {topic.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OutdoorLivingSection;
