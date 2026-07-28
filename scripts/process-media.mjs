import { access, mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

sharp.cache(false);
sharp.concurrency(1);

const root = process.cwd();
const decorativeOutputDir = path.join(root, 'public/assets/decorative');
const editorialOutputDir = path.join(root, 'public/assets/media');
const auditDir = path.join(root, 'artifacts/media-audit');
const manifestPath = path.join(root, 'src/data/mediaData.generated.json');

const assets = [
  { id: 'hero-glass-portal', source: 'hero-glass-portal.png', widths: [280, 380, 480], cleanChecker: true, role: 'decorative', decorative: true, alt: '', surface: 'adaptive', directory: 'decorative' },
  { id: 'architecture-system-core', source: 'architecture-system-core.png', widths: [480, 720, 960], role: 'decorative', decorative: true, alt: '', surface: 'light', directory: 'decorative' },
  { id: 'specs-driven-agent-flow', source: 'specs-driven-agent-flow.png', widths: [400, 600, 800], role: 'decorative', decorative: true, alt: '', surface: 'light', directory: 'decorative' },
  { id: 'global-operations-orb', source: 'global-operations-orb.png', widths: [360, 540, 720], cleanChecker: true, role: 'decorative', decorative: true, alt: '', surface: 'dark', directory: 'decorative' },
  { id: 'operational-map-mobile', source: 'ChatGPT Image 11 juil. 2026, 19_15_16.png', widths: [320, 480, 720], role: 'operational-diagram', decorative: false, alt: 'Schéma illustratif vertical montrant les flux entre Madagascar, l’Afrique et l’Europe, les paiements, les applications terrain et les contrôles IA avec revue humaine.', surface: 'light', directory: 'media' },
  { id: 'security-reliability-shield', source: 'ecurity-reliability-shield.png', widths: [400, 600, 800], role: 'decorative', decorative: true, alt: '', surface: 'light', directory: 'decorative' },
  { id: 'cloud-certification-stack', source: 'cloud-certification-stack.png', widths: [400, 600, 800], role: 'decorative', decorative: true, alt: '', surface: 'light', directory: 'decorative' },
  { id: 'cta-modular-system', source: 'cta-modular-system.png', widths: [480, 720, 960], role: 'decorative', decorative: true, alt: '', surface: 'light', directory: 'decorative' },
  { id: 'hasiniaina-portrait', source: 'hasiniaina.png', widths: [320, 480, 720], role: 'portrait', decorative: false, alt: 'Portrait of Hasiniaina Christian LOVANIRINA, AI Integration & Agentic Full-Stack Engineer.', surface: 'light', directory: 'media' },
  { id: 'hasiniaina-portrait-cutout', source: 'imagegen/hasiniaina-portrait-cutout-v2.png', widths: [320, 480, 720], role: 'portrait', decorative: false, alt: 'Portrait of Hasiniaina Christian LOVANIRINA, AI Integration & Agentic Full-Stack Engineer.', surface: 'light', directory: 'media' },
  { id: 'hero-glass-portal-v2', source: 'imagegen/hero-glass-portal-v2.png', widths: [360, 540, 720], role: 'decorative', decorative: true, alt: '', surface: 'adaptive', directory: 'media' },
  { id: 'tz-smart-web', source: 'TZ smart web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de la plateforme web TZ Smart et de ses interfaces de pilotage.', surface: 'light', directory: 'media' },
  { id: 'fretunia-web', source: 'fretunia web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de la plateforme logistique Fretunia.', surface: 'dark', directory: 'media' },
  { id: 'iagasy-web', source: 'iagasy web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de la plateforme de commerce conversationnel Iagasy.', surface: 'dark', directory: 'media' },
  { id: 'aim-web', source: 'DMS AIM web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle du système web de gestion des bénéficiaires AIM.', surface: 'light', directory: 'media' },
  { id: 'sbt-travel-web', source: 'sbt-web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle du site web SBT Travel.', surface: 'dark', directory: 'media' },
  { id: 'rmb-cargo-web', source: 'rmb-web.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle du site web RMB Cargo.', surface: 'light', directory: 'media' },
  { id: 'aim-mobile', source: 'aim application de paiement.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de l’application mobile AIM dédiée aux paiements et aux bénéficiaires.', surface: 'light', directory: 'media' },
  { id: 'rmb-cargo-mobile', source: 'rmb cargo espace client.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de l’espace client mobile RMB Cargo.', surface: 'dark', directory: 'media' },
  { id: 'tz-smart-mobile', source: 'tz smart application de fai.png', widths: [480, 800, 1280], role: 'work-editorial', decorative: false, alt: 'Présentation visuelle de l’application mobile TZ Smart pour opérateur FAI.', surface: 'dark', directory: 'media' },
  { id: 'n8n-product-automation', source: 'n8n.png', widths: [480, 800, 1280], role: 'product-ai-illustration', decorative: false, alt: 'Illustration des automatisations métier contrôlées orchestrées avec n8n.', surface: 'dark', directory: 'media' },
  { id: 'openclaw-product-agent', source: 'openclaw.png', widths: [480, 800, 1280], role: 'product-ai-illustration', decorative: false, alt: 'Illustration de l’exécution agentique OpenClaw intégrée au commerce conversationnel.', surface: 'dark', directory: 'media' },
  { id: 'codex-development-agent', source: 'codex-agent.png', widths: [480, 800, 1280], role: 'method-illustration', decorative: false, alt: 'Illustration de Codex utilisé comme agent de développement dans une méthode supervisée.', surface: 'adaptive', directory: 'media' },
  { id: 'claude-development-agent', source: 'claude.png', widths: [480, 800, 1280], role: 'method-illustration', decorative: false, alt: 'Illustration de Claude Code utilisé pour l’implémentation et la revue sous contrôle humain.', surface: 'light', directory: 'media' },
];

await mkdir(decorativeOutputDir, { recursive: true });
await mkdir(editorialOutputDir, { recursive: true });
await mkdir(auditDir, { recursive: true });

async function checkerToAlpha(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i] / 255;
    const g = data[i + 1] / 255;
    const b = data[i + 2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const brightness = (r + g + b) / 3;
    // The baked checker is neutral and very bright. Keep coloured glass and highlights,
    // then feather the neutral edge to avoid a white fringe.
    const colourSignal = Math.min(1, saturation / 0.12);
    const darkSignal = Math.min(1, Math.max(0, (0.96 - brightness) / 0.28));
    data[i + 3] = Math.round(255 * Math.max(colourSignal, darkSignal));
  }
  return sharp(data, { raw: info }).png().toBuffer();
}

const existingManifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const manifest = [];
for (const definition of assets) {
  const sourcePath = path.join(root, 'tmp', definition.source);
  try {
    await access(sourcePath);
  } catch {
    const existing = existingManifest.find((asset) => asset.id === definition.id);
    if (!existing) throw new Error(`Missing media source and generated asset: ${definition.source}`);
    manifest.push({ ...existing, role: definition.role, alt: definition.alt, decorative: definition.decorative, surface: definition.surface });
    console.warn(`Kept existing generated asset because source is absent: ${definition.source}`);
    continue;
  }
  const sourceStats = await stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const sourceBuffer = definition.cleanChecker ? await checkerToAlpha(sourcePath) : await readFile(sourcePath);
  const widths = definition.widths.filter((width) => width <= metadata.width);
  const variants = [];
  const outputDir = definition.directory === 'media' ? editorialOutputDir : decorativeOutputDir;

  for (const width of widths) {
    for (const format of ['avif', 'webp']) {
      const filename = `${definition.id}-${width}.${format}`;
      const destination = path.join(outputDir, filename);
      let pipeline = sharp(sourceBuffer).resize({ width, withoutEnlargement: true }).toColorspace('srgb');
      pipeline = format === 'avif' ? pipeline.avif({ quality: 45, effort: 4 }) : pipeline.webp({ quality: 61, alphaQuality: 80, effort: 5 });
      await pipeline.toFile(destination);
      const generated = await sharp(destination).metadata();
      const generatedStats = await stat(destination);
      variants.push({
        src: `/assets/${definition.directory}/${filename}`,
        width: generated.width,
        height: generated.height,
        format,
        bytes: generatedStats.size,
      });
    }
  }

  if (definition.decorative) {
    const largestWebp = variants.filter((item) => item.format === 'webp').at(-1);
    const auditTile = await sharp(path.join(root, 'public', largestWebp.src.slice(1))).resize({ width: 400, height: 400, fit: 'inside', withoutEnlargement: true }).png().toBuffer();
    const tileMeta = await sharp(auditTile).metadata();
    const panels = ['#ffffff', '#f5f7ff', '#0b1538'].map((background, index) => ({ input: auditTile, left: index * 440 + 10, top: Math.round((440 - tileMeta.height) / 2) }));
    await sharp({ create: { width: 1320, height: 440, channels: 4, background: '#ffffff' } })
      .composite([
        { input: { create: { width: 440, height: 440, channels: 4, background: '#ffffff' } }, left: 0, top: 0 },
        { input: { create: { width: 440, height: 440, channels: 4, background: '#f5f7ff' } }, left: 440, top: 0 },
        { input: { create: { width: 440, height: 440, channels: 4, background: '#0b1538' } }, left: 880, top: 0 },
        ...panels,
      ])
      .png()
      .toFile(path.join(auditDir, `${definition.id}-background-check.png`));
  }

  manifest.push({
    id: definition.id,
    role: definition.role,
    alt: definition.alt,
    decorative: definition.decorative,
    surface: definition.surface,
    ratio: Number((metadata.width / metadata.height).toFixed(6)),
    source: {
      path: `tmp/${definition.source}`,
      width: metadata.width,
      height: metadata.height,
      bytes: sourceStats.size,
      colorSpace: metadata.space ?? 'unknown',
      hasAlpha: metadata.hasAlpha ?? false,
      alphaTreatment: definition.cleanChecker ? 'baked checker converted to alpha' : metadata.hasAlpha ? 'source alpha preserved' : 'integrated background preserved',
    },
    variants,
  });
}

await writeFile(path.join(auditDir, 'media-audit.json'), `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generated ${manifest.reduce((count, item) => count + item.variants.length, 0)} variants for ${manifest.length} assets.`);
