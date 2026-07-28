import { useMemo, useState } from 'react';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

type ComposerState = {
  name: string;
  email: string;
  company: string;
  role: string;
  workModel: string;
  message: string;
};

export function ContactComposer() {
  const { content } = usePortfolioLocale();
  const fields = content.contact.fields;
  const [state, setState] = useState<ComposerState>(() => ({
    name: '',
    email: '',
    company: '',
    role: '',
    workModel: content.contact.workModels[0] ?? '',
    message: '',
  }));

  const mailtoHref = useMemo(() => {
    const body = [
      `${fields.name}: ${state.name || fields.unspecified}`,
      `${fields.email}: ${state.email || fields.unspecified}`,
      `${fields.company}: ${state.company || fields.unspecified}`,
      `${fields.role}: ${state.role || fields.unspecified}`,
      `${fields.workModel}: ${state.workModel || fields.unspecified}`,
      '',
      state.message.trim(),
    ].join('\n');

    return `mailto:${content.profile.email}?subject=${encodeURIComponent(fields.defaultSubject)}&body=${encodeURIComponent(body)}`;
  }, [content.profile.email, fields, state]);

  return (
    <section className="contact-composer" aria-labelledby="contact-composer-title">
      <div className="contact-composer__intro">
        <p className="section-heading__eyebrow">{content.contact.composerEyebrow}</p>
        <h2 id="contact-composer-title" className="section-heading__title">{content.contact.composerTitle}</h2>
        <p className="section-heading__summary">{content.contact.composerSummary}</p>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>{fields.name}<input name="name" type="text" value={state.name} onChange={(event) => setState((current) => ({ ...current, name: event.target.value }))} autoComplete="name" /></label>
        <label>{fields.email}<input name="email" type="email" value={state.email} onChange={(event) => setState((current) => ({ ...current, email: event.target.value }))} autoComplete="email" spellCheck={false} /></label>
        <label>{fields.company}<input name="company" type="text" value={state.company} onChange={(event) => setState((current) => ({ ...current, company: event.target.value }))} autoComplete="organization" /></label>
        <label>{fields.role}<input name="role" type="text" value={state.role} onChange={(event) => setState((current) => ({ ...current, role: event.target.value }))} autoComplete="off" /></label>
        <label>{fields.workModel}<select name="workModel" value={state.workModel} onChange={(event) => setState((current) => ({ ...current, workModel: event.target.value }))}>{content.contact.workModels.map((model) => <option key={model}>{model}</option>)}</select></label>
        <label>{fields.message}<textarea name="message" maxLength={1500} rows={8} value={state.message} onChange={(event) => setState((current) => ({ ...current, message: event.target.value }))} /></label>
        <a className="button button--primary" href={mailtoHref}>{fields.submit}</a>
      </form>
    </section>
  );
}
