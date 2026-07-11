# Prompt d'exécution — Refonte premium du portfolio

Tu es un senior frontend engineer et product designer spécialisé dans les portfolios techniques B2B premium. Tu travailles directement dans ce dépôt et tu dois exécuter la mission entièrement, pas seulement proposer un plan.

## Mission

Refondre les six routes existantes du portfolio avec une direction visuelle premium inspirée de `tmp/image 1.png`, tout en conservant strictement les contenus métier et les affirmations actuelles.

L'exécution comporte deux tâches obligatoirement séquentielles :

1. normaliser les illustrations décoratives autorisées ;
2. aligner les spécifications, puis refondre et valider toutes les routes.

Ne t'arrête pas après l'audit ou après une proposition d'architecture. Poursuis jusqu'à ce que l'implémentation et les validations soient terminées. Ne demande une intervention humaine que si une information indispensable et impossible à déduire du dépôt bloque réellement la mission.

## Sources de vérité et limites

- Lis d'abord `AGENTS.md`, `plan.md`, `task.md` et tous les fichiers de `specs/`.
- `tmp/image 1.png` est uniquement une référence de direction artistique. N'en copie aucun texte, chiffre, portrait, logo, projet ou certification.
- `tmp/image 2.png` documente uniquement l'état visuel actuel du site.
- `src/data/portfolioData.ts` reste la source de vérité des contenus publiés.
- Conserve Vite, React 19, TypeScript, React Router et le contact par `mailto:`.
- Conserve les routes `/`, `/projets`, `/competences`, `/methode`, `/parcours` et `/contact`.
- L'évolution future des projets est hors périmètre.
- Aucun commit, push ou déploiement n'est autorisé.
- N'invente aucun fait, chiffre, client, projet, rôle, résultat, lien, témoignage, date ou certification.
- Ne transforme pas les volumes financiers AIM en performance personnelle.
- Ne réintroduis pas le tourisme, la photographie ou le journalisme comme positionnement dominant.

## Fichiers projet explicitement hors périmètre

Ignore complètement toutes les images orientées projets présentes dans `tmp`, notamment les fichiers contenant les noms TZ Smart, AIM, Fretunia, Iagasy, RMB ou SBT.

Ces fichiers ne doivent être ni déplacés, ni renommés, ni modifiés, ni optimisés, ni importés, ni copiés dans `public`, ni référencés par le code. Leur simple présence dans `tmp` ne constitue pas une autorisation de publication ou une source de contenu.

## Tâche 1 — Normalisation des illustrations décoratives

### Périmètre autorisé

Traite exclusivement ces sept sources :

- `tmp/hero-glass-portal.png`
- `tmp/architecture-system-core.png`
- `tmp/specs-driven-agent-flow.png`
- `tmp/global-operations-orb.png`
- `tmp/ecurity-reliability-shield.png`
- `tmp/cloud-certification-stack.png`
- `tmp/cta-modular-system.png`

Ne modifie et ne supprime jamais les sources de `tmp`. `image 1.png` et `image 2.png` sont des références non publiables et ne doivent pas être copiées dans le build.

### Audit média

Pour chaque source autorisée, relève avant conversion :

- nom et chemin ;
- largeur, hauteur et ratio ;
- poids ;
- format et espace colorimétrique ;
- présence et plage réelle du canal alpha ;
- présence d'un damier ou d'un fond artificiel intégré ;
- rôle prévu dans l'interface.

Enregistre ces informations dans un manifeste média maintenable. Corrige les noms de sortie en kebab-case, notamment `ecurity-reliability-shield` vers `security-reliability-shield`.

### Nettoyage

- Nettoie le damier artificiel de `hero-glass-portal` et `global-operations-orb` pour obtenir une vraie transparence avec des contours propres.
- Préserve la transparence existante de `specs-driven-agent-flow`, `security-reliability-shield` et `cloud-certification-stack`.
- Pour `architecture-system-core` et `cta-modular-system`, conserve le fond intégré si le détourage détériore les détails, les halos ou les contours.
- Ne simule jamais la transparence avec `mix-blend-mode`, un masque CSS fragile ou une couleur de fond forcée.
- Contrôle visuellement chaque détourage sur fond blanc, bleu clair et bleu marine.
- Si un nettoyage ne peut pas atteindre un niveau premium, n'utilise pas l'illustration. Remplace-la dans l'interface par le placeholder neutre prévu plus bas.

### Formats, variantes et budgets

- Crée les sorties sous `public/assets/decorative/`.
- Produis AVIF en premier choix et WebP en fallback.
- Ne génère pas plus de trois largeurs par illustration.
- Ne dépasse jamais la largeur ou la hauteur de la source.
- Choisis les largeurs à partir des dimensions réellement rendues aux breakpoints, pas avec une liste arbitraire.
- Supprime les métadonnées inutiles et conserve un profil sRGB fiable.
- Vise moins de 250 Ko par illustration secondaire dans sa plus grande variante.
- L'ensemble des médias chargés initialement dans le hero doit rester sous 400 Ko.
- N'ajoute une dépendance de traitement d'image qu'en `devDependency`, uniquement si les outils locaux ne suffisent pas. Aucune dépendance de traitement ne doit finir dans le bundle client.
- Ajoute une validation automatisable des dimensions, des poids et de l'absence d'upscale.

### Placeholders

Le dépôt ne contient pas de portrait réel autonome. N'extrais pas le portrait de `image 1.png` et ne génère pas de faux visage.

Crée un système de placeholder neutre, sans SVG généré :

- un placeholder portrait avec un ratio stable ;
- un placeholder projet uniforme pour les cartes sans image ;
- rendu en CSS ou avec un raster WebP léger sans texte intégré ;
- libellé accessible présent dans le DOM lorsqu'il apporte du contexte ;
- aucune apparence laissant croire qu'il s'agit d'une vraie capture ou d'un vrai portrait.

### Contrat média typé

Crée un manifeste TypeScript centralisé, par exemple dans `src/data/mediaData.ts`, avec un contrat au moins équivalent à :

```ts
export type MediaVariant = {
  src: string;
  width: number;
  height: number;
  format: 'avif' | 'webp';
};

export type MediaAsset = {
  id: string;
  role: 'decorative' | 'portrait-placeholder' | 'project-placeholder';
  alt: string;
  decorative: boolean;
  ratio: number;
  variants: MediaVariant[];
};
```

Les dimensions déclarées doivent correspondre aux fichiers générés. Les composants ne doivent contenir aucun chemin média dispersé.

### Gate de fin de tâche 1

Ne commence pas la refonte tant que :

- les sept sources ont été auditées ;
- les seuls dérivés publiés appartiennent au périmètre autorisé ;
- les noms, dimensions et ratios du manifeste sont exacts ;
- les budgets sont respectés ;
- les détourages ont été examinés sur les trois fonds de contrôle ;
- aucun fichier projet n'a été touché.

## Tâche 2 — Alignement documentaire obligatoire

Avant toute modification de composant ou de CSS, aligne les documents suivants avec cette mission :

- `plan.md`
- `task.md`
- `specs/spec.md`
- `specs/design.md`
- `specs/data-model.md`
- `specs/contracts.md`
- `specs/test-strategy.md`

Résous explicitement les contradictions actuelles concernant la typographie serif, l'interdiction des gradients bleu-violet, les petits rayons, la largeur maximale, les illustrations et la liste des routes à tester. Ne marque une tâche comme terminée qu'après son exécution réelle.

## Tâche 2 — Refonte de l'interface

### Direction artistique

Utilise cette base :

```css
--color-navy-950: #0b1538;
--color-blue-600: #315bff;
--color-blue-500: #4772ff;
--color-indigo-600: #5a48f5;
--color-violet-500: #8b5cf6;
--color-cyan-400: #35d4e7;
--color-surface: #ffffff;
--color-surface-soft: #f5f7ff;
--color-border-soft: rgba(70, 92, 180, 0.14);
--gradient-primary: linear-gradient(135deg, #315bff 0%, #5a48f5 52%, #8b5cf6 72%, #35d4e7 100%);
```

Règles :

- fonds blancs ou légèrement bleutés ;
- titres bleu marine très foncé ;
- police sans-serif moderne et lisible, sans téléchargement supplémentaire si la police actuelle convient ;
- largeur de contenu entre 1240 et 1360 px ;
- rayons de 20 à 28 px pour les grandes cartes et de 12 à 16 px pour les petites ;
- bordures très légères et ombres larges, diffuses et peu opaques ;
- gradient réservé aux CTA et aux zones stratégiques ;
- verre translucide limité au header, au hero et à quelques surfaces pertinentes ;
- aucun mur de cartes, aucun gradient généralisé et aucun blur coûteux sur mobile ;
- longueurs de ligne confortables et tailles de texte accessibles dès 360 px.

### Architecture de composants

Réutilise et améliore les composants existants avant d'en créer de nouveaux. Sépare les responsabilités en composants sobres : média responsive, placeholder, header/menu mobile, section heading, cartes projet, pipeline méthode, CTA final et diagrammes.

Les textes métier, projets, compétences, expériences, principes, liens et métadonnées restent centralisés dans les fichiers de données typés. Les composants peuvent contenir des libellés d'interface génériques, mais pas de nouvelles affirmations propres à un projet.

### Header et navigation

- Header sticky, léger et translucide lorsque `backdrop-filter` est disponible.
- Identité à gauche, navigation et CTA `Me contacter` à droite sur desktop.
- État actif provenant du routeur.
- Menu mobile accessible avec bouton explicite, état ouvert/fermé, fermeture après navigation et touche Échap.
- Aucun défilement horizontal de la navigation.
- Conserve le lien d'évitement vers le contenu principal.

### Accueil `/`

Construis une page premium inspirée de la composition de `image 1.png`, sans la copier pixel par pixel.

1. **Hero**
   - Texte avant le visuel dans le DOM et sur mobile.
   - Un seul H1, reprenant le positionnement actuel.
   - Introduction et CTA vers les projets et le contact.
   - Localisation, disponibilité et stack réelle issues des données.
   - Placeholder portrait neutre devant `hero-glass-portal` si ce dernier passe le gate média.
   - Badge de disponibilité et carte d'expertises en HTML.
   - Aucune statistique provenant de la référence visuelle.
   - Le média LCP ne doit pas être lazy-loadé.

2. **Architecture et valeur**
   - Schéma principal en HTML/SVG responsive à partir des données et composants existants.
   - `architecture-system-core` uniquement comme décoration discrète.
   - Cartes de valeur alimentées par les contenus actuels.

3. **Méthode specs-driven**
   - Six étapes réelles déjà présentes dans les données.
   - Pipeline horizontal sur grand écran et vertical sur mobile.
   - `specs-driven-agent-flow` purement décoratif.
   - Les étapes, numéros et connexions utiles restent dans le DOM ou le SVG accessible.

4. **Capacités techniques**
   - Présente les problèmes techniques déjà décrits dans les données : offline/synchronisation, multi-tenant, paiements/traçabilité, IA avec contrôle humain et monitoring.
   - N'ajoute aucun cas d'usage déduit des images de `tmp`.

5. **Opérations internationales**
   - Conserve la logique Madagascar–Afrique–Europe.
   - Reconstruis une carte SVG géographiquement cohérente et responsive.
   - Garde les libellés et relations dans le DOM.
   - Utilise `global-operations-orb` uniquement comme fond ou objet décoratif secondaire.
   - Simplifie le schéma sur mobile sans supprimer son résumé textuel.

6. **Projets**
   - Conserve exactement les quatre projets actuellement présents dans `portfolioData.ts`.
   - N'ajoute, ne supprime et ne réécris aucun projet dans le cadre de son évolution future.
   - Utilise le placeholder projet uniforme, pas une image de `tmp`.
   - Conserve titre, rôle, description, technologies, période, résultat et liens actuels.
   - Assure des dimensions stables, un hover sobre et un focus clavier visible.

7. **Principes et spécialisations**
   - Présente les principes de travail et les spécialisations techniques déjà prouvées.
   - `security-reliability-shield` et `cloud-certification-stack` restent décoratifs.
   - N'affiche aucun nom de certification : aucune liste vérifiée n'existe dans le dépôt.

8. **CTA final et footer**
   - CTA final utilisant le gradient principal et `cta-modular-system` si l'actif respecte les budgets.
   - Boutons vers le contact réel.
   - Footer compact avec identité, navigation et canaux existants.

### Routes secondaires

#### `/projets`

- Conserve les quatre études de cas et tous leurs contenus actuels.
- Utilise les mêmes cartes et placeholders que l'accueil.
- Ne crée aucune galerie ou page projet supplémentaire.
- N'ajoute aucune métrique ou image projet.

#### `/competences`

- Transforme la matrice existante en grille premium et scannable.
- Relie visuellement technologies, usages, preuves projet et impacts déjà présents.
- Ne remplace pas les noms technologiques par des pictogrammes seuls.

#### `/methode`

- Conserve le fond specs-driven et la responsabilité humaine finale.
- Pipeline horizontal sur desktop, vertical sur mobile.
- Garde-fous et usage des agents IA restent lisibles sans animation.

#### `/parcours`

- Conserve toutes les expériences, périodes et affirmations actuelles.
- Clarifie la progression terrain, données, opérations, SaaS/IA et infrastructure.
- Ne transforme pas la chronologie en carrousel inaccessible.

#### `/contact`

- Conserve les canaux réels, modes de collaboration et domaines d'intervention.
- Le formulaire reste un composeur `mailto:` honnête.
- Aucun POST, faux succès ou prétendue livraison de message.

### Médias responsifs

- Utilise un composant `<picture>` partagé avec AVIF puis WebP.
- Génère `srcset` et `sizes` à partir du manifeste.
- Déclare toujours `width` et `height`.
- Utilise `loading="lazy"` pour les illustrations sous la ligne de flottaison.
- N'utilise jamais `loading="lazy"` pour le média LCP.
- Les illustrations décoratives ont `alt=""` et ne doivent pas recevoir de rôle accessible inutile.
- Les placeholders contextuels ont un libellé accessible dans le DOM.
- Aucun contenu métier ne doit dépendre d'une illustration.

### Interactions et mouvement

- Transitions sobres de 150 à 300 ms.
- Apparition légère au scroll seulement si elle ne retarde jamais la lecture.
- Hover et élévation discrets.
- Aucun curseur personnalisé, particule, son, animation 3D lourde ou parallaxe coûteuse.
- Sous `prefers-reduced-motion: reduce`, supprime les mouvements non essentiels et le smooth scroll.

### Accessibilité et SEO

- Structure sémantique correcte et un seul H1 par route.
- Ordre cohérent des titres.
- Navigation clavier complète et focus visible.
- Contrastes WCAG AA.
- Cibles tactiles utilisables sur mobile.
- Aucun sens transmis uniquement par la couleur.
- Préserve `lang="fr"`, les canonical, les descriptions et les métadonnées Open Graph par route.
- Remplace l'OG SVG par un raster optimisé seulement si un visuel honnête et pertinent peut être produit sans inventer de contenu ; sinon conserve l'existant et documente la décision.

## Validation obligatoire

Commence par enregistrer l'état initial des commandes disponibles. Après l'implémentation, exécute au minimum :

```bash
npm run typecheck
npm run lint
npm run build
```

Puis valide les six routes aux largeurs suivantes :

- 1440 px
- 1280 px
- 1024 px
- 768 px
- 430 px
- 390 px
- 360 px

Utilise des hauteurs de viewport réalistes et produis une capture pleine page de chaque route à chaque largeur. Stocke les artefacts de validation dans un dossier clairement identifié, sans remplacer silencieusement les anciennes références.

Vérifie et corrige :

- tout débordement horizontal global ;
- chevauchements, textes tronqués et boutons inutilisables ;
- layout shift dû aux médias ;
- ouverture, fermeture et navigation du menu mobile ;
- parcours clavier, focus et lien d'évitement ;
- nombre de H1 et ordre des titres ;
- contrastes WCAG AA ;
- comportement sous `prefers-reduced-motion` ;
- erreurs et avertissements de console ;
- liens internes, externes et `mailto:` ;
- métadonnées SEO de chaque route ;
- poids et dimensions de chaque variante média ;
- absence d'image projet importée depuis `tmp` ;
- absence de métrique ou certification nouvellement inventée ;
- absence de retour dominant au tourisme, à la photographie ou au journalisme.

Si un outil Lighthouse ou Core Web Vitals est disponible, audite au minimum l'accueil en mobile et desktop. Corrige les problèmes relevant de cette refonte, sans annoncer un score qui n'a pas été mesuré.

## Critères de terminaison

La mission n'est terminée que lorsque :

1. les spécifications et l'implémentation sont alignées ;
2. seuls les sept médias décoratifs autorisés ont été traités ;
3. aucune image projet de `tmp` n'est publiée ;
4. les six routes partagent le nouveau système visuel ;
5. les contenus et affirmations actuels sont préservés ;
6. le portrait et les projets utilisent des placeholders honnêtes ;
7. les images sont responsives, dimensionnées et dans les budgets ;
8. aucune route ne déborde horizontalement de 360 à 1440 px ;
9. le clavier, le menu mobile et la réduction des mouvements fonctionnent ;
10. typecheck, lint et build réussissent ;
11. aucune erreur console n'est laissée ;
12. les audits de contenu, liens, SEO et accessibilité sont passés.

## Compte rendu final

À la fin, fournis un résumé factuel comprenant :

- documents de spécification mis à jour ;
- composants, styles et données modifiés ;
- illustrations publiées, variantes produites et poids finaux ;
- illustrations remplacées par un placeholder et raison ;
- confirmation qu'aucune image projet hors périmètre n'a été touchée ;
- commandes exécutées et résultats ;
- captures et audits produits ;
- limites ou vérifications manuelles restantes.

Ne présente pas une étape comme validée si tu ne l'as pas réellement exécutée.
