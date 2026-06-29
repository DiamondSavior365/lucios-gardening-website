import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import luxuryLawnCare1 from "../../assets/gallery/lawn-care/luxury-lawn-care-1.png";
import luxuryTreeCare1 from "../../assets/gallery/tree-care/luxury-tree-care-1.png";
import luxuryLandscaping1 from "../../assets/gallery/landscaping/luxury-landscaping-3.png";
import luxuryIrrigation1 from "../../assets/gallery/irrigation/luxury-irrigation-1.png";
import SectionHeader from "../SectionHeader";

const projects = [
  {
    title: "Luxury Lawn Maintenance",
    category: "Lawn Care",
    description:
      "Immaculate mowing, clean edging, and detailed maintenance for high-end residential and outdoor living spaces.",
    image: luxuryLawnCare1,
  },
  {
    title: "Tree & Palm Care",
    category: "Tree Care",
    description:
      "Tree trimming, palm care, shaping, cleanup, and maintenance that improves safety, appearance, and long-term growth.",
    image: luxuryTreeCare1,
  },
  {
    title: "Landscape Upgrades",
    category: "Landscaping",
    description:
      "Planting, garden improvements, soil preparation, cleanups, and outdoor details that improve curb appeal.",
    image: luxuryLandscaping1,
  },
  {
    title: "Irrigation Support",
    category: "Irrigation",
    description:
      "Sprinkler and irrigation support to help lawns, trees, and plants receive the water they need efficiently.",
    image: luxuryIrrigation1,
  },
];

function GalleryPreview() {
  return (
    <section className="bg-[#f7f3ea] px-6 py-20 text-[#13291f] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          {/* <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
              Featured Work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Luxury-inspired outdoor care and polished landscapes
            </h2>
          </div> */}
          <SectionHeader
            eyebrow="Featured Work"
            title="Luxury-inspired outdoor care and polished landscapes"
          />

          <Link
            to="/gallery"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d6c8aa] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#13291f] transition hover:border-[#13291f] hover:bg-[#13291f] hover:text-white"
          >
            View Gallery
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-[#e2d8c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[300px] overflow-hidden bg-[#13291f]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center p-8 text-center text-white">
                      <div>
                        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#d8b65a] text-[#13291f] transition group-hover:scale-110">
                          <Icon size={30} />
                        </div>

                        <h3 className="text-3xl font-bold">
                          Image Coming Soon
                        </h3>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#13291f]/75 via-[#13291f]/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b65a]">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 leading-7 text-[#43594d]">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
