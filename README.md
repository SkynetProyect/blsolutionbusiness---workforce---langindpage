# PlantForce USA — Landing Page

Each section of the landing page lives in its own file under `src/components/`, so you can edit copy, colors, or layout in one place without touching the rest.

## File map

- `src/App.jsx` — assembles all sections in order
- `src/components/Header.jsx` — top nav bar + mobile menu
- `src/components/Hero.jsx` — headline, subcopy, CTA buttons, disciplines card
- `src/components/StatsBar.jsx` — orange stats band (12,400+ workers, etc.)
- `src/components/Services.jsx` — "What We Offer" 4-card grid
- `src/components/Industries.jsx` — "Industries We Serve" image grid
- `src/components/Process.jsx` — "3 Steps" section
- `src/components/WhyUs.jsx` — "We Know the Plant Floor" section
- `src/components/CTAFooter.jsx` — bottom CTA banner + footer

## Requirements

This uses Tailwind CSS utility classes and the `lucide-react` icon package.

```bash
npm install lucide-react
```

Make sure Tailwind is set up in your project (tailwind.config.js + directives in your main CSS file). If you're not using Tailwind, let me know and I can convert these to plain CSS modules instead.

## Editing tips

- Colors: the two brand colors used throughout are `#0B0E14` (near-black background) and `#F3A125` (amber accent). Search-and-replace those hex codes to re-theme the whole site.
- Content arrays: most sections pull their content from a small array at the top of the file (e.g. `SERVICES`, `INDUSTRIES`, `STEPS`, `FEATURES`) — edit those arrays rather than the JSX to change copy.
- Images: `Industries.jsx` and `WhyUs.jsx` currently use placeholder Unsplash images — swap in your own photography via the `img` fields.
# blsolutionbusiness---workforce---langindpage
