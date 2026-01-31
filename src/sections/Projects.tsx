import { WorkItem } from "@/lib/types/content";

type SelectedWorkProps = {
  label?: string;
  title: string;
  description: string;
  items: WorkItem[];
};

export function Projects({
  label = "Selected Work",
  title,
  description,
  items,
}: SelectedWorkProps) {
  return (
    <section
      className="
        py-32
        px-6
        md:px-12
        lg:px-24
      "
    >
      <div className="max-w-5xl space-y-16">
        {/* Section header */}
        <div className="max-w-3xl space-y-6">
          <span className="text-accent text-muted">
            {label}
          </span>

          <h2>{title}</h2>

          <p className="text-muted">
            {description}
          </p>
        </div>

        {/* Work list */}
        <ul className="space-y-12">
          {items.map((item, index) => (
            <li
              key={index}
              className="
                border-b
                border-background-elevated
                pb-12
              "
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl space-y-3">
                  <h3>{item.title}</h3>
                  <p className="text-muted">{item.summary}</p>
                </div>

                <div className="text-sm text-muted whitespace-nowrap">
                  <div>{item.category}</div>
                  {item.status && (
                    <div className="mt-1">
                      {item.status}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
