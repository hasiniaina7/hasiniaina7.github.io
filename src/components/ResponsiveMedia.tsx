import type { ImgHTMLAttributes, ReactEventHandler } from 'react';
import type { MediaAsset } from '@/data/mediaData';

type ResponsiveMediaProps = {
  asset: MediaAsset;
  sizes: string;
  priority?: boolean;
  className?: string;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  onError?: ReactEventHandler<HTMLImageElement>;
};

export function ResponsiveMedia({ asset, sizes, priority = false, className, onLoad, onError }: ResponsiveMediaProps) {
  const webp = asset.variants.filter((variant) => variant.format === 'webp');
  const avif = asset.variants.filter((variant) => variant.format === 'avif');
  const fallback = webp.at(-1);
  if (!fallback || !asset.usable) return null;

  const srcSet = (variants: typeof webp) => variants.map((variant) => `${variant.src} ${variant.width}w`).join(', ');
  const loading: ImgHTMLAttributes<HTMLImageElement>['loading'] = priority ? 'eager' : 'lazy';

  return (
    <picture className={className} aria-hidden={asset.decorative || undefined}>
      <source type="image/avif" srcSet={srcSet(avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(webp)} sizes={sizes} />
      <img
        src={fallback.src}
        srcSet={srcSet(webp)}
        sizes={sizes}
        width={fallback.width}
        height={fallback.height}
        alt={asset.alt}
        loading={loading}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
}
