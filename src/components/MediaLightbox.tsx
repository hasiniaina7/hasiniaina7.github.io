import { useEffect, useRef, useState } from 'react';
import type { MediaAsset } from '@/data/mediaData';
import { ResponsiveMedia } from './ResponsiveMedia';

type MediaLightboxProps = {
  asset: MediaAsset;
  caption: string;
  priority?: boolean;
  className?: string;
  sizes: string;
};

export function MediaLightbox({ asset, caption, priority = false, className, sizes }: MediaLightboxProps) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
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
    setZoomed(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <figure className={`work-media work-media--${asset.surface} ${className ?? ''}`}>
      <ResponsiveMedia asset={asset} sizes={sizes} priority={priority} />
      <figcaption>
        <span>{caption}</span>
        <button ref={triggerRef} className="media-expand" type="button" onClick={() => setOpen(true)}>
          Agrandir l’image
        </button>
      </figcaption>
      <dialog ref={dialogRef} className="media-dialog" onCancel={(event) => { event.preventDefault(); close(); }} onClose={() => setOpen(false)}>
        <div className="media-dialog__toolbar">
          <button type="button" onClick={() => setZoomed((value) => !value)} aria-pressed={zoomed}>
            {zoomed ? 'Ajuster à l’écran' : 'Zoomer'}
          </button>
          <button type="button" onClick={close} aria-label="Fermer la visionneuse">Fermer</button>
        </div>
        <div className={`media-dialog__viewport${zoomed ? ' is-zoomed' : ''}`}>
          <ResponsiveMedia asset={asset} sizes="100vw" priority />
        </div>
        <p>{caption}</p>
      </dialog>
    </figure>
  );
}
