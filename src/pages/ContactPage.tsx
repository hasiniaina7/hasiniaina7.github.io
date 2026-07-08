import { collaborationModes, pageCopy, profile } from '@/data/portfolioData';
import { ContactComposer } from '@/components/ContactComposer';
import { SectionHeading } from '@/components/SectionHeading';

export function ContactPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--contact">
        <SectionHeading as="h1" eyebrow={pageCopy.contact.eyebrow} title="Contact" summary={pageCopy.contact.intro} />
        <div className="contact-summary">
          <p>{profile.location}</p>
          <p>{profile.availability}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </section>

      <section className="content-section contact-grid">
        <div className="stack">
          <article className="surface-card">
            <h2>Canaux publics</h2>
            <div className="stack">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  className="contact-link"
                  href={link.href}
                  target={link.kind === 'email' ? undefined : '_blank'}
                  rel={link.kind === 'email' ? undefined : 'noreferrer'}
                >
                  <span>{link.label}</span>
                  <span>{link.href}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="surface-card">
            <h2>Domaines d’intervention</h2>
            <div className="tag-row">
              {pageCopy.contact.interventionDomains.map((domain) => (
                <span key={domain} className="tag">
                  {domain}
                </span>
              ))}
            </div>
          </article>

          <article className="surface-card">
            <h2>Modes de collaboration</h2>
            <div className="mode-list">
              {collaborationModes.map((mode) => (
                <div key={mode.id} className="mode-item">
                  <h3>{mode.title}</h3>
                  <p>{mode.summary}</p>
                  <div className="tag-row">
                    {mode.bestFor.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
        <ContactComposer />
      </section>
    </div>
  );
}
