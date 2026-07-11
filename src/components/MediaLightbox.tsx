import { useEffect, useRef, useState } from 'react';
import type { MediaAsset } from '@/data/mediaData';
import { ResponsiveMedia } from './ResponsiveMedia';

type MediaLightboxProps = {
  asset: MediaAsset;
  caption: string;
  publicUrl?: string | undefined;
  priority?: boolean;
  className?: string;
  sizes: string;
};

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export function MediaLightbox({ asset, caption, publicUrl, priority = false, className, sizes }: MediaLightboxProps) {
  const [open, setOpen] = useState(false);
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

  return (
    <figure className={`work-media work-media--${asset.surface} ${className ?? ''}`}>
      <button ref={triggerRef} className="media-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Ouvrir l’image en grand : ${asset.alt}`}>
        <ResponsiveMedia asset={asset} sizes={sizes} priority={priority} />
        <span className="media-trigger__hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
          </svg>
        </span>
      </button>
      <figcaption>{caption}</figcaption>
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
          <button className="media-dialog__close" type="button" onClick={close} aria-label="Fermer la visionneuse">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="media-dialog__viewport" onClick={(event) => {
          // The empty viewport surrounds a contained image; it should dismiss the lightbox too.
          if (event.target === event.currentTarget) close();
        }}>
          <ResponsiveMedia asset={asset} sizes="100vw" priority />
        </div>
        <p>{caption}</p>
      </dialog>
    </figure>
  );
}
