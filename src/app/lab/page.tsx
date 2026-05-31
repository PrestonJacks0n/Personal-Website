import { FadeIn } from "@/components/FadeIn";
import { lab } from "@/data/content";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Lab — Preston Jackson" };

export default function LabPage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Actively building
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="section-title">
            The <span className="gradient-text">Lab</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-14 max-w-xl text-[rgb(var(--muted))]">
            Personal projects I&apos;m actively building and running — automations, tools, and experiments that solve real problems.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {lab.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link href={`/lab/${project.slug}`} className="group block h-full">
                <div className="card card-hover flex h-full flex-col gap-4 group-hover:border-indigo-500/40">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold leading-tight group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h2>
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-16 flex items-center gap-3 rounded-2xl border border-dashed border-[rgb(var(--border))] p-6 text-sm text-[rgb(var(--muted))]">
            <Zap size={18} className="shrink-0 text-indigo-400" />
            More projects being built — check back soon.
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
