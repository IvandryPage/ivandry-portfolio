import { content } from "@/content/hero.copy"

// sections/hero/HeroSection.tsx

export function HeroSection() {
  return (
    <section className="relative min-h-screen grid grid-cols-12 px-6 md:px-12 lg:px-20 py-24">
      {/* Content */}
      <div className=" col-span-12 md:col-start-3 md:col-span-8 self-center text-center space-y-6">
        <h1>
          {content.headline}
        </h1>

        <p className="text-muted max-w-2xl mx-auto">
          {content.subheadline}
        </p>

        <span className="block text-muted text-sm tracking-wide">
          {content.meta}
        </span>
      </div>
    </section>
  );
}
