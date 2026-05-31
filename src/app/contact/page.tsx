import { FadeIn } from "@/components/FadeIn";
import { personal } from "@/data/content";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Contact — Preston Jackson" };

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="section">
        <FadeIn>
          <h1 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mb-14 max-w-xl text-[rgb(var(--muted))]">
            Whether you want to talk something nerdy, explore a collaboration, or just say hi — my inbox is open.
          </p>
        </FadeIn>

        <div className="max-w-lg space-y-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: personal.email,
              href: `mailto:${personal.email}`,
            },
            {
              icon: Github,
              label: "GitHub",
              value: "PrestonJacks0n",
              href: personal.github,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "prestoj24",
              href: personal.linkedin,
            },
            {
              icon: MapPin,
              label: "Location",
              value: personal.location,
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <div className="card card-hover">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))]">
                      {label}
                    </p>
                    {href ? (
                      <Link
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="mt-0.5 font-medium hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className="mt-0.5 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
