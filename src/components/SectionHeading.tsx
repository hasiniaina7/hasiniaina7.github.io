type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'default' | 'split';
};

export function SectionHeading({ eyebrow, title, summary, as = 'h2', align = 'default' }: SectionHeadingProps) {
  const TitleTag = as;

  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        <p className="section-heading__eyebrow">{eyebrow}</p>
        <TitleTag className="section-heading__title">{title}</TitleTag>
      </div>
      {summary ? <p className="section-heading__summary">{summary}</p> : null}
    </div>
  );
}
