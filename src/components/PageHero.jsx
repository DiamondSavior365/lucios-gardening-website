function PageHero({ eyebrow, title, description }) {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
          {eyebrow}
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h1>

          <p className="max-w-xl text-lg leading-8 text-[#43594d]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
