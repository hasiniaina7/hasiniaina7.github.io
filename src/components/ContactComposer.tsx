import { useMemo, useState } from 'react';
import { profile } from '@/data/portfolioData';

type ComposerState = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  projectType: string;
  message: string;
};

const initialState: ComposerState = {
  name: '',
  email: '',
  organization: '',
  subject: 'Demande de collaboration',
  projectType: 'Mission produit',
  message: '',
};

export function ContactComposer() {
  const [state, setState] = useState<ComposerState>(initialState);

  const mailtoHref = useMemo(() => {
    const body = [
      `Nom: ${state.name || profile.fullName}`,
      `Email: ${state.email || profile.email}`,
      `Organisation: ${state.organization || 'Non précisée'}`,
      `Type de projet: ${state.projectType}`,
      '',
      state.message.trim() || 'Bonjour,',
    ].join('\n');

    const subject = encodeURIComponent(state.subject.trim() || 'Demande de collaboration');
    return `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }, [state.email, state.message, state.name, state.organization, state.projectType, state.subject]);

  return (
    <section className="contact-composer" aria-labelledby="contact-composer-title">
      <div className="contact-composer__intro">
        <p className="section-heading__eyebrow">E-mail</p>
        <h2 id="contact-composer-title" className="section-heading__title">
          Préparer un échange clair
        </h2>
        <p className="section-heading__summary">
          Renseignez le contexte utile. Le bouton ouvre votre client mail avec un message déjà structuré.
        </p>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Nom complet
          <input
            type="text"
            value={state.name}
            onChange={(event) => setState((current) => ({ ...current, name: event.target.value }))}
            autoComplete="name"
          />
        </label>
        <label>
          Adresse e-mail
          <input
            type="email"
            value={state.email}
            onChange={(event) => setState((current) => ({ ...current, email: event.target.value }))}
            autoComplete="email"
          />
        </label>
        <label>
          Organisation
          <input
            type="text"
            value={state.organization}
            onChange={(event) => setState((current) => ({ ...current, organization: event.target.value }))}
          />
        </label>
        <label>
          Sujet
          <input
            type="text"
            value={state.subject}
            onChange={(event) => setState((current) => ({ ...current, subject: event.target.value }))}
          />
        </label>
        <label>
          Type de projet
          <select
            value={state.projectType}
            onChange={(event) => setState((current) => ({ ...current, projectType: event.target.value }))}
          >
            <option>Mission produit</option>
            <option>Renfort technique</option>
            <option>Cadrage d’architecture</option>
            <option>Modernisation métier</option>
          </select>
        </label>
        <label>
          Message
          <textarea
            maxLength={1000}
            rows={8}
            value={state.message}
            onChange={(event) => setState((current) => ({ ...current, message: event.target.value }))}
          />
        </label>
        <a className="button button--primary" href={mailtoHref}>
          Préparer l’e-mail
        </a>
      </form>
    </section>
  );
}
