'use client'
import Link from "next/link";
import { socialLinks } from "./social-links";

export function LeftRail() {
  return (
    <aside className="fixed z-(--z-surface) left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="left-rail-item transition hover:text-foreground-primary cursor-pointer rounded"
        >
          <link.icon className="size-7"/>
        </Link>
      ))}
    </aside>
  );
}
