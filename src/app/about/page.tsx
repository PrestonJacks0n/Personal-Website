import { FadeIn } from "@/components/FadeIn";
import { personal, education, leadership } from "@/data/content";
import { GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "About — Preston Jackson" };

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <h1 className="section-title">
            About <span className="gradient-text">Me</span>
          </h1>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-[rgb(var(--muted))]">
                {personal.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="leading-relaxed text-[rgb(var(--muted))]">
                Outside of engineering, I&apos;m passionate about volleyball — I serve as Vice President of the U of M Men&apos;s Indoor Club Volleyball Team, managing a $45k budget and fundraising for travel. I&apos;ve also volunteered abroad, spending two weeks as a pharmacist and P.E. coach in Fiji on a medical mission trip.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag hover:border-indigo-500/40 hover:text-[rgb(var(--fg))] transition-all"
                >
                  GitHub →
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag hover:border-indigo-500/40 hover:text-[rgb(var(--fg))] transition-all"
                >
                  LinkedIn →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Quick facts */}
          <div className="lg:col-span-2 space-y-4">
            <FadeIn delay={0.2}>
              <div className="card">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))]">
                  Next
                </p>
                <p className="font-medium">UCLA Anderson MSBA</p>
                <p className="text-sm text-[rgb(var(--muted))]">Starting Fall 2026</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="card">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))]">
                  Interests
                </p>
                <p className="text-sm text-[rgb(var(--muted))]">
                  AI · Data analytics · Vibe coding · Volleyball
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <FadeIn>
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <GraduationCap className="text-indigo-400" size={24} />
              Education
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <FadeIn key={edu.school} delay={i * 0.1}>
                <div className="card card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{edu.school}</h3>
                      <p className="mt-0.5 text-sm text-indigo-400">{edu.degree}</p>
                      <p className="mt-1 text-xs text-[rgb(var(--muted))]">{edu.note}</p>
                    </div>
                  </div>
                  {edu.courses && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <span key={c} className="tag">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-20">
          <FadeIn>
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <Users className="text-indigo-400" size={24} />
              Leadership &amp; Service
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {leadership.map((item, i) => (
              <FadeIn key={item.role} delay={i * 0.1}>
                <div className="card card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{item.role}</h3>
                      <p className="mt-0.5 text-sm text-indigo-400">{item.org}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-[rgb(var(--muted))]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
