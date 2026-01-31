type SkillGroup = {
  label: string;
  items: string[];
};

type SkillsProps = {
  label?: string;
  title: string;
  description: string;
  groups: SkillGroup[];
};

export function Skills({
  label = "Skills",
  title,
  description,
  groups,
}: SkillsProps) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl space-y-16">
        <div className="max-w-3xl space-y-6">
          <span className="text-accent text-muted">{label}</span>
          <h2>{title}</h2>
          <p className="text-muted">{description}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-lg">{group.label}</h3>
              <ul className="space-y-2 text-muted">
                {group.items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
