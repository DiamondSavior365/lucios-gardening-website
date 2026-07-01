import luxuryLawnCare1 from "../assets/gallery/lawn-care/luxury-lawn-care-1.png";
import luxuryTreeCare1 from "../assets/gallery/tree-care/luxury-tree-care-1.png";
import luxuryLandscaping1 from "../assets/gallery/landscaping/luxury-landscaping-1.png";
import luxuryIrrigation1 from "../assets/gallery/irrigation/luxury-irrigation-1.png";
import PageHero from "../components/PageHero";

const galleryItems = [
  {
    title: "Luxury Lawn Maintenance",
    category: "Lawn Care",
    description:
      "Clean lawn maintenance with polished edges, healthy grass, and a high-end property presentation.",
    image: luxuryLawnCare1,
  },
  {
    title: "Tree & Palm Care",
    category: "Tree Care",
    description:
      "Tree and palm care focused on appearance, safety, structure, and clean outdoor presentation.",
    image: luxuryTreeCare1,
  },
  {
    title: "Landscape Upgrades",
    category: "Landscaping",
    description:
      "Planting, garden improvements, soil preparation, and landscape details that improve curb appeal.",
    image: luxuryLandscaping1,
  },
  {
    title: "Efficient Irrigation",
    category: "Irrigation",
    description:
      "Sprinkler and irrigation support designed to keep lawns and plants healthy with proper water coverage.",
    image: luxuryIrrigation1,
  },
];

function Gallery() {
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      {/* <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
            Project Gallery
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Outdoor spaces with a clean, polished, luxury-inspired finish
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[#43594d]">
              This gallery will showcase lawn care, tree care, landscaping,
              irrigation, and outdoor transformations. For now, generated
              visuals help represent the premium direction while protecting
              customer privacy.
            </p>
          </div>
        </div>
      </section> */}
      <PageHero
        eyebrow="Project Gallery"
        title="Outdoor spaces with a clean, polished, luxury-inspired finish"
        description="This gallery will showcase lawn care, tree care, landscaping, irrigation, and outdoor transformations. For now, generated visuals help represent the premium direction while protecting customer privacy."
      />

      <section className="px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-[#e2d8c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[360px] overflow-hidden bg-[#13291f]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#13291f]/75 via-[#13291f]/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-7 text-[#43594d]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
            Future Gallery Expansion
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Before-and-after transformations, real project photos, and service
            categories coming soon
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            As the website grows, this gallery can include real project photos,
            generated concept visuals, before-and-after comparisons, commercial
            properties, hotels, residential estates, and organized service
            categories.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
