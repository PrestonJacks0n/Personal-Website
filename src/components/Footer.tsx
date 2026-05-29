import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
          >
            <Github size={18} />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
