import { FadeIn } from "@/components/FadeIn";
import { experience } from "@/data/content";

export const metadata = { title: "Experience — Preston Jackson" };

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <h1 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h1>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-[rgb(var(--border))] to-transparent md:block" />

          <div className="space-y-10 md:pl-8">
            {experience.map((job, i) => (
              <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.1}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] top-1.5 hidden h-3 w-3 rounded-full border-2 border-indigo-500 bg-[rgb(var(--bg))] md:block" />

                  <div className="card card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold">{job.company}</h2>
                        <p className="mt-0.5 font-medium text-indigo-400">{job.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm text-[rgb(var(--muted))]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
