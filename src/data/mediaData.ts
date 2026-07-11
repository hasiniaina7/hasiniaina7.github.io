import generatedAssets from './mediaData.generated.json';

export type MediaVariant = {
  src: string;
  width: number;
  height: number;
  format: 'avif' | 'webp';
  bytes: number;
};

export type MediaAsset = {
  id: string;
  role: 'decorative' | 'portrait-placeholder' | 'project-placeholder';
  alt: string;
  decorative: boolean;
  ratio: number;
  usable: boolean;
  source?: {
    path: string;
    width: number;
    height: number;
    bytes: number;
    colorSpace: string;
    hasAlpha: boolean;
    alphaTreatment: string;
  };
  variants: MediaVariant[];
};

const rejectedAfterVisualReview = new Set(['hero-glass-portal', 'global-operations-orb']);

export const mediaAssets = Object.fromEntries(
  generatedAssets.map((asset) => [asset.id, { ...asset, role: 'decorative', usable: !rejectedAfterVisualReview.has(asset.id) }]),
) as Record<string, MediaAsset>;

export function getMediaAsset(id: string): MediaAsset {
  const asset = mediaAssets[id];
  if (!asset) throw new Error(`Unknown media asset: ${id}`);
  return asset;
}
