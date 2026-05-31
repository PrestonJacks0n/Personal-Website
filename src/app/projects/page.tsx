import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/content";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Projects — Preston Jackson" };

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <h1 className="section-title">
            <span className="gradient-text">Projects</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mb-14 max-w-xl text-[rgb(var(--muted))]">
            A selection of things I&apos;ve built — from ML research to systems programming to hackathon wins. Want to see what I&apos;m building right now with Claude?{" "}
            <Link href="/lab" className="link">Check out my Lab →</Link>
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="card card-hover group flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-semibold leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="text-[rgb(var(--muted))] hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="text-[rgb(var(--muted))] hover:text-indigo-400 transition-colors"
                      >
                        <Github size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="https://github.com/PrestonJacks0n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
            >
              <Github size={16} />
              See more on GitHub →
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
