type Props = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignment =
    align === "center" ? "text-center" : "text-left";

  const lineAlignment =
    align === "center" ? "mx-auto" : "mx-0";

  return (
    <div className={`${alignment} mb-16`}>
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div
        className={`w-16 h-1 bg-black mt-4 rounded-full ${lineAlignment}`}
      ></div>
    </div>
  );
}