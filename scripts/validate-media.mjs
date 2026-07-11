import { readFile, stat } from 'node:fs/promises';
import sharp from 'sharp';

const manifest = JSON.parse(await readFile('src/data/mediaData.generated.json', 'utf8'));
let failures = 0;
for (const asset of manifest) {
  for (const variant of asset.variants) {
    const file = `public${variant.src}`;
    const [metadata, stats] = await Promise.all([sharp(file).metadata(), stat(file)]);
    const valid = metadata.width === variant.width && metadata.height === variant.height && stats.size === variant.bytes && variant.width <= asset.source.width && variant.height <= asset.source.height && stats.size < 250 * 1024;
    if (!valid) {
      failures += 1;
      console.error('Invalid media variant:', variant.src);
    }
  }
}
if (failures) process.exit(1);
console.log(`Media audit passed: ${manifest.length} assets, ${manifest.flatMap((asset) => asset.variants).length} variants.`);
