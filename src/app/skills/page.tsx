import { FadeIn } from "@/components/FadeIn";
import { skills } from "@/data/content";

export const metadata = { title: "Skills — Preston Jackson" };

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  "Frameworks & Libraries": "⚙",
  "Tools & Cloud": "☁",
  "Developer Workflow": "⚡",
};

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <h1 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h1>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div className="card card-hover h-full">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-lg font-bold text-indigo-400">
                    {categoryIcons[category] ?? "#"}
                  </span>
                  <h2 className="font-semibold">{category}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-1.5 text-sm font-medium transition-all hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-indigo-400 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Visual proficiency strip */}
        <FadeIn delay={0.4}>
          <div className="mt-16">
            <h2 className="mb-8 text-xl font-bold">Core Proficiencies</h2>
            <div className="space-y-5">
              {[
                { label: "Python", pct: 92 },
                { label: "C++", pct: 85 },
                { label: "Machine Learning (PyTorch / TF)", pct: 80 },
                { label: "SQL / Data Analysis", pct: 78 },
                { label: "JavaScript / React", pct: 72 },
              ].map(({ label, pct }, i) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{label}</span>
                    <span className="text-[rgb(var(--muted))]">{pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[rgb(var(--border))]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
