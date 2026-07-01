import { Bird, Carrot, Leaf, Sparkles, Trees } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import PageHero from "../components/PageHero.jsx";

const futureTopics = [
  {
    title: "Lawn Care Tips",
    description:
      "Guides on keeping lawns greener, healthier, and better maintained throughout the seasons.",
    icon: Leaf,
  },
  {
    title: "Plant & Tree Guide",
    description:
      "Information about flowers, plants, and trees with watering needs, sunlight, growth size, and maintenance tips.",
    icon: Trees,
  },
  {
    title: "Wildlife Gardens",
    description:
      "Plants and trees that can attract birds, butterflies, hummingbirds, and other beneficial wildlife.",
    icon: Bird,
  },
  {
    title: "Vegetable Gardens",
    description:
      "Ideas for growing vegetables, herbs, and edible plants that make outdoor spaces more useful.",
    icon: Carrot,
  },
  {
    title: "Luxury Yard Ideas",
    description:
      "Inspiration for creating polished, elegant outdoor spaces with a high-end feel.",
    icon: Sparkles,
  },
];

function GardenJournal() {
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      <PageHero
        eyebrow="Garden Journal"
        title="Outdoor living ideas, plant education, and garden inspiration"
        description="This future education hub will help customers learn about lawn care, trees, flowers, plants, vegetable gardens, wildlife-friendly spaces, and luxury outdoor upgrades."
      />

      <section className="px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {futureTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.title}
                className="rounded-[2rem] border border-[#e2d8c3] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#13291f] text-white">
                  <Icon size={30} />
                </div>

                <h2 className="text-2xl font-bold">{topic.title}</h2>

                <p className="mt-4 leading-7 text-[#43594d]">
                  {topic.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
              Coming Later
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              A full plant library and article system will live here
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              Later, this page can connect to Supabase so articles, plant cards,
              tree guides, and garden tips can be created from a private admin
              dashboard.
            </p>

            <ButtonLink to="/contact" variant="gold" className="mt-8">
              Request a Free Estimate
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GardenJournal;
