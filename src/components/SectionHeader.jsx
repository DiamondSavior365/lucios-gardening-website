function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCentered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && (
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${
            isDark ? "text-[#d8b65a]" : "text-[#9c7a32]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-4xl font-bold tracking-tight md:text-6xl ${
          isDark ? "text-white" : "text-[#13291f]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            isDark ? "text-white/70" : "text-[#43594d]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
