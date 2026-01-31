type ThesisProps = {
  label?: string;
  title: string;
  description: string;
  principles: string[];
};

export function Thesis({
  label = "Thesis",
  title,
  description,
  principles,
}: ThesisProps) {
  return (
    <section
      className="
        relative
        py-32
        px-6
        md:px-12
        lg:px-24
        border-t
        border-background-elevated
      "
    >
      <div className="max-w-5xl space-y-16">
        {/* Section Label */}
        <span className="text-accent text-muted">
          {label}
        </span>

        {/* Main Thesis */}
        <div className="max-w-3xl space-y-6">
          <h2>
            {title}
          </h2>

          <p className="text-muted">
            {description}
          </p>
        </div>

        {/* Principles */}
        <ul className="grid gap-8 md:grid-cols-3">
          {principles.map((point, index) => (
            <li
              key={index}
              className="
                p-6
                bg-background-surface
                border
                border-background-elevated
              "
            >
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
