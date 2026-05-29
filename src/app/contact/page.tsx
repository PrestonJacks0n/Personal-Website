import { FadeIn } from "@/components/FadeIn";
import { personal } from "@/data/content";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
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
            Whether you want to talk ML, explore a collaboration, or just say hi — my inbox is open.
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="space-y-4">
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

          {/* Quick message form */}
          <FadeIn delay={0.3}>
            <div className="card h-full">
              <h2 className="mb-6 text-lg font-semibold">Send a Message</h2>
              <form
                action={`mailto:${personal.email}`}
                method="GET"
                className="space-y-4"
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))]">
                    Your Name
                  </label>
                  <input
                    name="subject"
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 text-sm outline-none transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-[rgb(var(--muted))]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))]">
                    Message
                  </label>
                  <textarea
                    name="body"
                    rows={5}
                    placeholder="Hi Preston, I'd love to chat about..."
                    className="w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 text-sm outline-none transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-[rgb(var(--muted))]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:-translate-y-0.5"
                >
                  <Send size={15} /> Open in Mail
                </button>
                <p className="text-center text-xs text-[rgb(var(--muted))]">
                  Opens your default email client
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
