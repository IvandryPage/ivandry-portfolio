type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function Hero({
  eyebrow = "Personal Portfolio",
  title,
  description,
}: HeroProps) {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        px-6
        md:px-12
        lg:px-24
      "
    >
      <div className="max-w-3xl space-y-8">
        {/* Eyebrow */}
        <span className="text-accent text-muted">
          {eyebrow}
        </span>

        {/* Headline */}
        <h1>
          {title}
        </h1>

        {/* Description */}
        <p className="text-muted max-w-xl">
          {description}
        </p>

        {/* Scroll Hint */}
        <div className="pt-8">
          <span className="text-muted">
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
}
