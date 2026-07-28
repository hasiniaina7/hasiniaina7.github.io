import { ContactComposer } from '@/components/ContactComposer';
import { FinalCta } from '@/components/FinalCta';
import { SectionHeading } from '@/components/SectionHeading';
import { profile as verifiedProfile } from '@/data/portfolioData';
import { recruiterCta } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

export function ContactPage() {
  const { locale, content } = usePortfolioLocale();

  return (
    <div className="page">
      <section className="page-hero page-hero--contact page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={content.contact.eyebrow} title={content.contact.title} summary={content.contact.intro} />
        <div className="contact-summary">
          <p>{content.profile.level}</p>
          <p>{content.profile.based}</p>
          <p>{content.profile.remote}</p>
          <p>{content.profile.relocation}</p>
          <a href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
        </div>
      </section>

      <section className="content-section recruiter-targets">
        <SectionHeading align="split" eyebrow={content.contact.targetEyebrow} title={content.contact.targetTitle} summary={content.contact.intro} />
        <div className="target-role-grid">{recruiterCta.targetRoles.map((role) => <article className="surface-card" key={role}><h3>{role}</h3></article>)}</div>
      </section>

      <section className="content-section contact-grid">
        <div className="stack">
          <article className="surface-card">
            <h2>{content.contact.resumeTitle}</h2>
            <div className="resume-downloads">
              <a className="resume-card resume-card--primary" href={recruiterCta.resumes.ai[locale]} download><span className="card-label">PDF · {locale.toUpperCase()}</span><strong>{content.contact.aiResume}</strong><p>{content.contact.aiResumeSummary}</p><span aria-hidden="true">↓</span></a>
              <a className="resume-card" href={recruiterCta.resumes.fullStack[locale]} download><span className="card-label">PDF · {locale.toUpperCase()}</span><strong>{content.contact.fullStackResume}</strong><p>{content.contact.fullStackResumeSummary}</p><span aria-hidden="true">↓</span></a>
            </div>
          </article>

          <article className="surface-card">
            <h2>{content.contact.channels}</h2>
            <div className="stack">
              {verifiedProfile.links.filter((link) => ['email', 'github', 'linkedin', 'portfolio'].includes(link.kind)).map((link) => (
                <a key={link.label} className="contact-link" href={link.href} target={link.kind === 'email' ? undefined : '_blank'} rel={link.kind === 'email' ? undefined : 'noopener noreferrer'}>
                  <span>{link.label}</span><span>{link.href}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
        <ContactComposer key={locale} />
      </section>
      <FinalCta />
    </div>
  );
}
