import { skillEvidence, workById } from '@/data/portfolioData';
import { motion, useReducedMotion } from 'motion/react';
import { FiBox, FiCheckCircle, FiCode, FiCpu, FiShield, FiSmartphone } from 'react-icons/fi';

const categoryIcons = {
  Backend: FiCode,
  Frontend: FiBox,
  Mobile: FiSmartphone,
  'Data / Sécurité': FiShield,
  'IA appliquée': FiCpu,
  Delivery: FiCheckCircle,
} as const;

export function SkillsMatrix() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="skill-evidence-grid" aria-label="Compétences prouvées par projets">
      {skillEvidence.map((skill) => {
        const Icon = categoryIcons[skill.category as keyof typeof categoryIcons];

        return (
        <motion.article
          key={skill.category}
          className={`skill-evidence-card skill-evidence-card--${skill.accent}`}
          {...(!reduceMotion ? { whileHover: { y: -5 }, whileFocus: { y: -3 } } : {})}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skill-evidence-card__head">
            <div className="skill-evidence-card__identity">
              <span className="skill-evidence-card__icon" aria-hidden="true"><Icon /></span>
              <div>
              <p className="card-label">{skill.level === 'production' ? 'Utilisé en production' : skill.level === 'advanced' ? 'Usage avancé' : 'Socle solide'}</p>
              <h3>{skill.category}</h3>
              </div>
            </div>
            <span className="skill-evidence-card__count">{skill.technologies.length} outils</span>
          </div>
          <div className="tag-row skill-evidence-card__tags">
            {skill.technologies.map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
          <div className="skill-evidence-card__section skill-evidence-card__section--proof">
            <h4>Projets de preuve</h4>
            <p>{skill.workIds.map((id) => workById[id].title).join(' · ')}</p>
          </div>
          <div className="skill-evidence-card__section skill-evidence-card__section--outcome">
            <h4>Réalisations clés</h4>
            <p>{skill.proof}</p>
          </div>
          <div className="skill-evidence-card__section skill-evidence-card__section--talking">
            <h4>Sujets d'échange</h4>
            <p>{skill.interviewTalkingPoint}</p>
          </div>
        </motion.article>
        );
      })}
    </div>
  );
}
