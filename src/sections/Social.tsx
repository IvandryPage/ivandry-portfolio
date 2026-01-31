type SocialLink = {
  title: string;
  url: string;
  description?: string;
};

type SocialProps = {
  label?: string;
  title: string;
  description: string;
  links: SocialLink[];
};

export function Social({
  label = "Connect",
  title,
  description,
  links,
}: SocialProps) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-background-elevated">
      <div className="max-w-3xl space-y-12">
        <div className="space-y-6">
          <span className="text-accent text-muted">{label}</span>
          <h2>{title}</h2>
          <p className="text-muted">{description}</p>
        </div>

        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="block space-y-1"
              >
                <span>{link.title}</span>
                {link.description && (
                  <p className="text-muted">{link.description}</p>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
