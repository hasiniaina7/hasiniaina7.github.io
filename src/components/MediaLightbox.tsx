import { useEffect, useRef, useState } from 'react';
import type { MediaAsset } from '@/data/mediaData';
import { ResponsiveMedia } from './ResponsiveMedia';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

type MediaLightboxProps = {
  asset: MediaAsset;
  caption: string;
  publicUrl?: string | undefined;
  priority?: boolean;
  className?: string;
  sizes: string;
};

type MediaLoadState = 'loading' | 'loaded' | 'error';

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export function MediaLightbox({ asset, caption, publicUrl, priority = false, className, sizes }: MediaLightboxProps) {
  const { content } = usePortfolioLocale();
  const [open, setOpen] = useState(false);
  const [previewState, setPreviewState] = useState<MediaLoadState>('loading');
  const [dialogState, setDialogState] = useState<MediaLoadState>('loading');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const openDialog = () => {
    // The full-resolution source is mounted only after an explicit user action.
    setDialogState('loading');
    setOpen(true);
  };

  return (
    <figure className={`work-media work-media--${asset.surface} is-${previewState} ${className ?? ''}`}>
      <button ref={triggerRef} className="media-trigger" type="button" onClick={openDialog} aria-label={`${content.common.openImage}: ${caption}`}>
        <ResponsiveMedia asset={asset} sizes={sizes} priority={priority} alt={caption} onLoad={() => setPreviewState('loaded')} onError={() => setPreviewState('error')} />
        {previewState !== 'loaded' ? <span className="media-load-indicator" aria-hidden="true"><span /></span> : null}
        <span className="media-trigger__hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
          </svg>
        </span>
      </button>
      <figcaption>{caption}</figcaption>
      <p className="sr-only" aria-live="polite">{previewState === 'loading' ? content.common.loadingImage : previewState === 'error' ? content.common.imageError : ''}</p>
      <dialog
        ref={dialogRef}
        className="media-dialog"
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => {
          // Native dialog backdrop clicks target the dialog itself on desktop and touch devices.
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => setOpen(false)}
      >
        <div className="media-dialog__toolbar">
          {publicUrl ? <a className="media-dialog__product-link" href={publicUrl} target="_blank" rel="noopener noreferrer">{displayUrl(publicUrl)} <span aria-hidden="true">↗</span></a> : null}
          <button className="media-dialog__close" type="button" onClick={close} aria-label={content.common.closeViewer}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <button className={`media-dialog__viewport is-${dialogState}`} type="button" onClick={close} aria-label={content.common.closeViewer}>
          {open ? <ResponsiveMedia asset={asset} sizes="(max-width: 700px) 100vw, 1440px" priority alt={caption} onLoad={() => setDialogState('loaded')} onError={() => setDialogState('error')} /> : null}
          {dialogState !== 'loaded' ? <span className="media-dialog__loading" role="status"><span aria-hidden="true" />{dialogState === 'error' ? content.common.imageError : content.common.loadingImage}</span> : null}
        </button>
        <p>{caption}</p>
      </dialog>
    </figure>
  );
}
