import { FadeIn } from "@/components/FadeIn";
import { lab } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return lab.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = lab.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Preston Jackson` : "Lab" };
}

export default function LabDetailPage({ params }: { params: { slug: string } }) {
  const project = lab.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-20">
      <div className="section max-w-3xl">
        <FadeIn>
          <Link
            href="/lab"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Lab
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.status}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mb-8 text-lg leading-relaxed text-[rgb(var(--muted))]">
            {project.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mb-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </FadeIn>

        {/* Diagram / SVG for projects that have one */}
        {project.hasDiagram && (
          <FadeIn delay={0.2}>
            <div className="mb-12 overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4">
              <Image
                src={`/lab/${project.slug}-diagram.svg`}
                alt={`${project.title} diagram`}
                width={900}
                height={500}
                className="w-full rounded-xl"
              />
            </div>
          </FadeIn>
        )}

        {/* Content sections */}
        <div className="space-y-8">
          {project.sections.map((section, i) => (
            <FadeIn key={section.heading} delay={0.22 + i * 0.07}>
              <div className="card">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                  {section.heading}
                </h2>
                <p className="leading-relaxed text-[rgb(var(--muted))]">{section.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
