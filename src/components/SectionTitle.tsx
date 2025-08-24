interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div
      className={`${
        align === "center" ? "text-center" : "text-left"
      } max-w-2xl`}
    >
      {subtitle && (
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      <div
        className={`h-1 w-16 bg-blue-600 mt-3 ${
          align === "center" ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default SectionTitle;
