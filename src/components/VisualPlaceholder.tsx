type VisualPlaceholderProps = {
  kind: 'portrait' | 'project';
  label: string;
  compact?: boolean;
};

export function VisualPlaceholder({ kind, label, compact = false }: VisualPlaceholderProps) {
  return (
    <div className={`visual-placeholder visual-placeholder--${kind}${compact ? ' visual-placeholder--compact' : ''}`}>
      <div className="visual-placeholder__surface" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>{label}</p>
    </div>
  );
}
