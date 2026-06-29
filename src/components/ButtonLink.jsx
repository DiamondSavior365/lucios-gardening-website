import { Link } from "react-router-dom";

function ButtonLink({
  to,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) {
  const variants = {
    primary: "bg-[#13291f] text-white hover:bg-[#224735]",
    gold: "bg-[#d8b65a] text-[#13291f] hover:bg-white",
    outlineLight:
      "border border-white/20 text-white hover:bg-white hover:text-[#13291f]",
    outlineDark:
      "border border-[#d6c8aa] text-[#13291f] hover:border-[#13291f] hover:bg-[#13291f] hover:text-white",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={18} />}
    </Link>
  );
}

export default ButtonLink;
