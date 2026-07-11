import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

sharp.cache(false);
sharp.concurrency(1);

const root = process.cwd();
const outputDir = path.join(root, 'public/assets/decorative');
const auditDir = path.join(root, 'artifacts/media-audit');

const assets = [
  { id: 'hero-glass-portal', source: 'hero-glass-portal.png', widths: [280, 380, 480], cleanChecker: true },
  { id: 'architecture-system-core', source: 'architecture-system-core.png', widths: [480, 720, 960] },
  { id: 'specs-driven-agent-flow', source: 'specs-driven-agent-flow.png', widths: [400, 600, 800] },
  { id: 'global-operations-orb', source: 'global-operations-orb.png', widths: [360, 540, 720], cleanChecker: true },
  { id: 'security-reliability-shield', source: 'ecurity-reliability-shield.png', widths: [400, 600, 800] },
  { id: 'cloud-certification-stack', source: 'cloud-certification-stack.png', widths: [400, 600, 800] },
  { id: 'cta-modular-system', source: 'cta-modular-system.png', widths: [480, 720, 960] },
];

await mkdir(outputDir, { recursive: true });
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

const manifest = [];
for (const definition of assets) {
  const sourcePath = path.join(root, 'tmp', definition.source);
  const sourceStats = await stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const sourceBuffer = definition.cleanChecker ? await checkerToAlpha(sourcePath) : await readFile(sourcePath);
  const widths = definition.widths.filter((width) => width <= metadata.width);
  const variants = [];

  for (const width of widths) {
    for (const format of ['avif', 'webp']) {
      const filename = `${definition.id}-${width}.${format}`;
      const destination = path.join(outputDir, filename);
      let pipeline = sharp(sourceBuffer).resize({ width, withoutEnlargement: true }).toColorspace('srgb');
      pipeline = format === 'avif' ? pipeline.avif({ quality: 47, effort: 3 }) : pipeline.webp({ quality: 64, alphaQuality: 80, effort: 4 });
      await pipeline.toFile(destination);
      const generated = await sharp(destination).metadata();
      const generatedStats = await stat(destination);
      variants.push({
        src: `/assets/decorative/${filename}`,
        width: generated.width,
        height: generated.height,
        format,
        bytes: generatedStats.size,
      });
    }
  }

  const largestWebp = variants.filter((item) => item.format === 'webp').at(-1);
  const auditTile = await sharp(path.join(root, 'public', largestWebp.src.slice(1))).resize({ width: 400, height: 400, fit: 'inside', withoutEnlargement: true }).png().toBuffer();
  const tileMeta = await sharp(auditTile).metadata();
  const panels = ['#ffffff', '#f5f7ff', '#0b1538'].map((background, index) => ({
    input: auditTile,
    left: index * 440 + 10,
    top: Math.round((440 - tileMeta.height) / 2),
  }));
  await sharp({ create: { width: 1320, height: 440, channels: 4, background: '#ffffff' } })
    .composite([
      { input: { create: { width: 440, height: 440, channels: 4, background: '#ffffff' } }, left: 0, top: 0 },
      { input: { create: { width: 440, height: 440, channels: 4, background: '#f5f7ff' } }, left: 440, top: 0 },
      { input: { create: { width: 440, height: 440, channels: 4, background: '#0b1538' } }, left: 880, top: 0 },
      ...panels,
    ])
    .png()
    .toFile(path.join(auditDir, `${definition.id}-background-check.png`));

  manifest.push({
    id: definition.id,
    role: 'decorative',
    alt: '',
    decorative: true,
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
await writeFile(path.join(root, 'src/data/mediaData.generated.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generated ${manifest.reduce((count, item) => count + item.variants.length, 0)} variants for ${manifest.length} assets.`);
