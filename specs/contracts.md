# Contracts — Routes, content, resumes, video, and metadata

## Route contract

- Every localized pathname resolves to exactly one `{ locale, routeId }`.
- `pathFor(locale, routeId)` returns the canonical localized pathname.
- Locale switching changes only `locale`, never `routeId`.
- Unknown paths redirect to `/en`.
- Historical French paths redirect with `replace` to their new French equivalent.

## Content contract

- All public marketing strings live in typed localized data.
- EN and FR use the same structural keys.
- A parity audit must fail on missing or extra keys.
- Components may contain technical attributes and punctuation but not recruiter-facing marketing claims.

## Resume contract

- Four PDFs exist under `/assets/resumes/`.
- AI/RAG/Automation is primary in each locale.
- Full-Stack Product is secondary.
- Source files under the CV workspace remain unmodified.
- Links use direct downloads and descriptive filenames.

## Contact contract

The composer collects company, role, location/work model, candidate email, and message. It never submits to a server. The action opens a `mailto:` URL containing the structured fields.

## Video contract

No video markup or CTA renders while `ExternalDemoVideo.enabled` is `false`. Enabling requires a real external URL, real thumbnail, French narration, English subtitles, and a completed safety review for secrets, client data, and administration details.

## SEO contract

- `document.documentElement.lang` matches the active locale.
- Canonical matches the active localized route.
- Two alternate links are emitted: `en` and `fr`.
- Open Graph URL/title/description/image match the route.
- Person JSON-LD contains only verified fields.
- Sitemap lists all twelve canonical URLs with paired `hreflang` alternates.
