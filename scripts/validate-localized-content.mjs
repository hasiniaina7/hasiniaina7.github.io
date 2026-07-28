import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const sourcePath = resolve(root, 'src/data/localizedPortfolio.ts');
const source = await readFile(sourcePath, 'utf8');
const index = await readFile(resolve(root, 'index.html'), 'utf8');
const sitemap = await readFile(resolve(root, 'public/sitemap.xml'), 'utf8');

const expectedRoutes = [
  '/en', '/en/projects', '/en/skills', '/en/agentic-delivery', '/en/experience', '/en/contact',
  '/fr', '/fr/projets', '/fr/competences', '/fr/orchestration-agentique', '/fr/parcours', '/fr/contact',
];

const failures = [];
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);

if (locs.length !== expectedRoutes.length) failures.push(`sitemap contains ${locs.length} URLs instead of ${expectedRoutes.length}`);
for (const route of expectedRoutes) {
  if (!source.includes(`'${route}'`) && !source.includes(`"${route}"`)) failures.push(`route missing from typed data: ${route}`);
  if (!locs.includes(route)) failures.push(`route missing from sitemap: ${route}`);
}
if (new Set(locs).size !== locs.length) failures.push('sitemap contains duplicate canonical URLs');

const resumePaths = [
  'public/assets/resumes/hasiniaina-ai-rag-automation-en.pdf',
  'public/assets/resumes/hasiniaina-ia-rag-automatisation-fr.pdf',
  'public/assets/resumes/hasiniaina-full-stack-product-en.pdf',
  'public/assets/resumes/hasiniaina-full-stack-produit-fr.pdf',
];
for (const file of resumePaths) {
  try {
    const fileStat = await stat(resolve(root, file));
    if (fileStat.size === 0) failures.push(`resume is empty: ${file}`);
  } catch {
    failures.push(`resume is missing: ${file}`);
  }
}

const publicPositioningSources = [
  source,
  await readFile(resolve(root, 'src/data/portfolioData.ts'), 'utf8'),
  await readFile(resolve(root, 'src/data/mediaData.generated.json'), 'utf8'),
  index,
].join('\n');

if (/\bSenior\b/i.test(publicPositioningSources)) failures.push('Senior remains in public positioning data');
if (!source.includes("coordinator: 'Claude Code'")) failures.push('Claude Code is not configured as coordinator');
if (!source.includes("secondaryTools: ['Codex']")) failures.push('Codex is not configured as a secondary tool');
if (!source.includes('externalDemoVideo: ExternalDemoVideo = { enabled: false }')) failures.push('demo video must stay disabled until real assets exist');

const approvalIds = ['production', 'secrets', 'payments', 'real-data', 'sensitive-migrations', 'external-actions'];
for (const id of approvalIds) {
  const occurrences = source.match(new RegExp(`id: '${id}'`, 'g'))?.length ?? 0;
  if (occurrences < 2) failures.push(`approval gate is not present in both locales: ${id}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Localized content audit passed: ${expectedRoutes.length} routes, ${resumePaths.length} resumes, 2 locales, 6 human approval gates.`);
