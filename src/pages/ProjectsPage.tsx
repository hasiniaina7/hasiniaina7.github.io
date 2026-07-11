import { useMemo, useState } from 'react';
import { FinalCta } from '@/components/FinalCta';
import { MediaLightbox } from '@/components/MediaLightbox';
import { SectionHeading } from '@/components/SectionHeading';
import { WorkCard } from '@/components/WorkCard';
import { WorkFilters, type WorkFilter } from '@/components/WorkFilters';
import { getMediaAsset } from '@/data/mediaData';
import { evidenceLabels, pageCopy, works, type WorkItem } from '@/data/portfolioData';

function CaseStudy({ work, priority = false }: { work: WorkItem; priority?: boolean }) {
  const [mainMediaId, ...supportingMediaIds] = work.mediaIds;
  const mainAsset = mainMediaId ? getMediaAsset(mainMediaId) : null;

  return (
    <article className="case-study" id={`etude-${work.id}`}>
      <header className="case-study__header">
        <div><p className="card-label">{work.categoryLabel}</p><h2>{work.title}</h2></div>
        <p>{work.summary}</p>
      </header>
      <section className="case-study__purpose" aria-label={`Rôle opérationnel de ${work.title}`}>
        <h3>Rôle opérationnel du produit</h3><p>{work.operationalPurpose}</p>
      </section>
      {mainAsset ? <MediaLightbox asset={mainAsset} caption={work.mediaNote ?? `Présentation visuelle de ${work.title}.`} publicUrl={work.publicUrl} sizes="(max-width: 700px) 96vw, 1280px" priority={priority} className="case-study__media" /> : null}
      <div className="case-study__details">
        <section><h3>Prise en charge</h3><p>{work.role}</p></section>
        <section><h3>Fonctions livrées</h3><ul className="plain-list">{work.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h3>Complexité technique</h3><ul className="plain-list">{work.technicalComplexity.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h3>Stack</h3><div className="tag-row">{work.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></section>
      </div>
      {work.publishableMetrics.length > 0 ? <div className="verified-metrics" aria-label="Repères vérifiés">{work.publishableMetrics.map((metric) => <p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div> : null}
      {supportingMediaIds.length > 0 ? (
        <div className="supporting-media">
          {supportingMediaIds.map((mediaId) => <MediaLightbox key={mediaId} asset={getMediaAsset(mediaId)} caption={`Illustration explicative associée à ${work.title}. Les informations métier vérifiées restent dans le texte HTML.`} publicUrl={work.publicUrl} sizes="(max-width: 700px) 94vw, 600px" />)}
        </div>
      ) : null}
      <footer className="case-study__footer">
        <span className="card-label">{evidenceLabels[work.evidenceLevel]}</span>
        <div className="tag-row">
          {work.publicUrl ? <a className="tag tag--link" href={work.publicUrl} target="_blank" rel="noopener noreferrer">Site public ↗</a> : null}
          {work.alternatePublicUrl ? <a className="tag tag--link" href={work.alternatePublicUrl} target="_blank" rel="noopener noreferrer">Application publique ↗</a> : null}
        </div>
      </footer>
    </article>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const filteredWorks = useMemo(() => filter === 'all' ? works : works.filter((work) => work.categories.includes(filter)), [filter]);
  const caseStudies = works.filter((work) => work.caseStudy);

  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={pageCopy.projets.eyebrow} title="Réalisations" summary={pageCopy.projets.intro} />
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Inventaire" title="Mon portfolio, visible sous plusieurs angles de lecture" summary="Les filtres facilitent la consultation sans créer de hiérarchie entre web, mobile, systèmes et IA intégrée." />
        <WorkFilters active={filter} onChange={setFilter} />
        <p className="filter-result" aria-live="polite">{filteredWorks.length} réalisation{filteredWorks.length > 1 ? 's' : ''} affichée{filteredWorks.length > 1 ? 's' : ''}</p>
        <div className="work-grid">{filteredWorks.map((work, index) => <WorkCard key={work.id} work={work} priority={index === 0} />)}</div>
      </section>

      <section className="content-section case-studies">
        <SectionHeading align="split" eyebrow="Études de cas" title="Quatre systèmes structurants" summary="Le texte accessible décrit le rôle, les fonctions et la stack. Les compositions apportent l’impact visuel, sans transformer leurs chiffres en preuves." />
        {caseStudies.map((work, index) => <CaseStudy key={work.id} work={work} priority={index === 0} />)}
      </section>
      <FinalCta />
    </div>
  );
}
