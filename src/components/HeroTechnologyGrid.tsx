import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';
import { SiDjango, SiDocker, SiFlutter, SiGithub, SiLinux, SiN8N, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si';
import { heroTechnologies, type HeroTechnology } from '@/data/portfolioData';
import type { PortfolioContent } from '@/data/localizedPortfolio';

const icons: Record<HeroTechnology['id'], ComponentType<IconBaseProps>> = {
  django: SiDjango,
  react: SiReact,
  typescript: SiTypescript,
  node: SiNodedotjs,
  flutter: SiFlutter,
  postgresql: SiPostgresql,
  docker: SiDocker,
  linux: SiLinux,
  n8n: SiN8N,
  github: SiGithub,
};

export function HeroTechnologyGrid({ content }: { content: PortfolioContent }) {
  return (
    <aside className="hero-stack" aria-labelledby="hero-stack-title">
      <p id="hero-stack-title" className="card-label">{content.common.tools}</p>
      <div className="hero-stack__grid">
        {heroTechnologies.map((technology) => {
          const Icon = icons[technology.id];
          return <div className={`hero-stack__item hero-stack__item--${technology.id}`} key={technology.id}><Icon aria-hidden="true" /><span>{technology.label}</span></div>;
        })}
      </div>
      <p className="hero-stack__note">{content.common.moreTools}</p>
    </aside>
  );
}
