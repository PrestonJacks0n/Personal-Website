# Preston Jackson — Portfolio

Personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

**All personal content lives in one file:** [`src/data/content.ts`](src/data/content.ts)

| Export | What it controls |
|---|---|
| `personal` | Name, tagline, bio, links, location |
| `education` | Degrees, courses |
| `experience` | Work history with bullet points |
| `projects` | Project cards (title, description, tags, links) |
| `skills` | Skill categories and items |
| `leadership` | Clubs, volunteering |

You never need to touch component code to update your info — just edit that file and save.

## Pages

| Route | Page |
|---|---|
| `/` | Hero / landing |
| `/about` | Bio, education, leadership |
| `/experience` | Work history with timeline |
| `/projects` | Project cards pulled from `content.ts` |
| `/skills` | Skill grid + proficiency bars |
| `/contact` | Contact cards + email form |

## Dark / Light Mode

Defaults to the user's OS preference. Toggled via the button in the top-right corner of the nav. Powered by `next-themes`.

## Deployment (Vercel)

1. Push to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. Done.

The `vercel.json` at the root pre-configures the build settings.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide Icons](https://lucide.dev)
