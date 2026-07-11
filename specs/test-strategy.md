# Stratégie de validation

## Automatique

- `npm run typecheck`, `npm run lint`, `npm run build`, `npm run media:check`.
- Audit média : formats, dimensions, poids, absence d’upscale, trois variantes maximum et exclusion de `image 1`/`image 2`.
- Audit contenu : dix réalisations, trois mobiles autonomes, sept sites représentables, quatre études principales.
- Recherche de métriques non traçables et de confusion entre agents de développement et IA produit.
- Inspection du manifeste de build : un chunk par route et aucun retour à un bundle applicatif monolithique supérieur à 500 kB.
- Inspection motion : bibliothèque extraite sans faire repasser le bundle initial au-dessus de 500 kB, aucune animation de propriété de layout et aucun contenu masqué par défaut.

## Navigateur

Tester les six routes à 1440, 1280, 1024, 768, 430, 390 et 360 px avec captures pleine page.

Tester également chaque URL en chargement direct après le découpage, puis naviguer entre les routes sans rechargement complet.

- aucun overflow horizontal, chevauchement ou texte tronqué ;
- un H1 et métadonnées SEO présentes ;
- aucune erreur console et aucun layout shift média évident ;
- focus visible, parcours clavier et liens utilisables ;
- filtres utilisables et résultats cohérents ;
- visionneuse : ouverture par clic sur l’image et par clavier, absence de zoom, fermeture par `X`, Échap, backdrop et espace vide autour de l’image, restitution du focus, légende et image entière ; vérifier aussi le lien de domaine externe lorsque la réalisation possède une URL publique ;
- menu mobile : ouverture, Échap, navigation puis fermeture ;
- contact : URL `mailto:` correctement composée ;
- mouvement réduit : animations non essentielles supprimées.
- blueprint : cinq filtres souris/clavier, états `aria-pressed`, résumé live et ordre mobile cohérents ; chaque vue active exactement ses nœuds et connexions déclarés.
- blueprint responsive : réseau complet ajusté au viewport à 1440/1280/1024/768, parcours vertical à 430/390/360, sans overflow ni arête visible à travers une carte.
- blueprint robuste : aucun nœud déplaçable, contrôle de zoom ou panoramique ; ancrages stables après redimensionnement et chargement des polices.
- blueprint premier rendu : les 23 arêtes de la vue globale sont présentes immédiatement, sans attendre une mesure ou une interaction navigateur.
- méthode : six nœuds et cinq connecteurs visibles dès le premier rendu sur desktop/tablette ; même ordre et même contenu dans la liste mobile ; aucun contrôle React Flow exposé.
- motion : transition des six routes, hero orchestré une seule fois par entrée, stagger plafonné, menu/visionneuse/filtres utilisables pendant les animations et rendu stable sous mouvement réduit.

## Médias et preuves

- Vérifier AVIF/WebP, `srcset`, `sizes`, dimensions et lazy-loading sous la ligne de flottaison.
- Vérifier visuellement les compositions sur leurs surfaces claires/sombres.
- Ne jamais considérer les chiffres intégrés aux images comme des métriques publiables.
- Vérifier que JN Travel reste un placeholder et que les images de référence ne sont pas publiées.
- Vérifier le cadrage, les contours, le LCP et l’absence de déformation du portrait réel sur desktop et mobile.
- Vérifier le contraste des CTA, filtres actifs, cartes accentuées et boutons secondaires après intégration de la palette fournie.
- Vérifier les halos chroma-key du portrait et du portail sur fond blanc, bleu clair et violet foncé.
- Vérifier que le hero reste compact sur desktop et sans chevauchement ni texte tronqué de 360 à 1440 px.
- Rechercher explicitement dans le blueprint MongoDB, Redis, S3, IoT, haute disponibilité et microservices ; aucun de ces termes ne doit être publié.
- Vérifier que le blueprint ne charge aucun raster et que `prefers-reduced-motion` neutralise ses transitions.

## Artefacts

Stocker captures et rapports dans un nouveau dossier horodaté sous `artifacts/`, sans remplacer les références précédentes.
