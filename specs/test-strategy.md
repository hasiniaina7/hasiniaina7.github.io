# Stratégie de validation

## Automatique

- `npm run typecheck`, `npm run lint`, `npm run build`.
- Audit média : formats, dimensions, poids, absence d’upscale, budgets et manifeste.
- Audit contenu : quatre projets, métriques traçables, aucune certification inventée, aucune image projet publiée.

## Navigateur

Tester les six routes à 1440, 1280, 1024, 768, 430, 390 et 360 px avec captures pleine page.

Pour chaque route :

- aucun overflow horizontal, chevauchement ou texte tronqué ;
- un H1, ordre des titres cohérent et métadonnées SEO présentes ;
- aucune erreur console et aucun layout shift média évident ;
- focus visible, parcours clavier et liens utilisables.

Scénarios spécifiques :

- menu mobile : ouverture, Échap, navigation puis fermeture ;
- contact : champs visibles et URL `mailto:` correctement composée ;
- mouvement réduit : animations et smooth scroll non essentiels supprimés ;
- médias : LCP non lazy, contenu sous la ligne de flottaison lazy.

## Accessibilité et performance

- Vérifier WCAG AA, labels, textes alternatifs et cibles tactiles.
- Auditer Lighthouse mobile/desktop si l’outil est disponible.
- Ne publier aucun score non mesuré.

## Artefacts

Stocker captures et rapports dans un nouveau dossier horodaté sous `artifacts/`, sans remplacer les références précédentes.
