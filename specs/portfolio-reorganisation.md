# Spécification de réorganisation des réalisations

## Statut du document

Ce document prépare une évolution éditoriale du portfolio. Il ne déclenche pas encore la modification de l’interface.

Il remplace, pour la prochaine phase de contenu, les anciennes hypothèses suivantes :

- le portfolio ne doit plus être limité à quatre projets ;
- les médias et réalisations ajoutés depuis la première refonte ne sont plus automatiquement hors périmètre ;
- les projets web, applications mobiles et intégrations IA doivent être organisés selon leur nature et leur relation fonctionnelle ;
- le rôle publié reste celui d’un ingénieur Full-Stack Senior ayant pris en charge ces réalisations ; aucune enquête éditoriale supplémentaire sur le rôle projet par projet n’est demandée ;
- SBT Travel, RMB Cargo et JN Travel sont présentés comme des réalisations distinctes, sans communication publique sur un socle technique ou un processus de livraison partagé ;
- Iagasy et TZ Smart sont considérés comme des productions fonctionnelles sur validation du propriétaire du portfolio. Leurs URL pourront être corrigées manuellement si nécessaire.

Avant toute implémentation, `plan.md`, `task.md`, `specs/spec.md`, `specs/data-model.md`, `specs/contracts.md` et `specs/test-strategy.md` devront être alignés sur cette nouvelle source de vérité.

## Objectif éditorial

Montrer l’étendue réelle des réalisations sans produire une liste artificiellement longue ni réduire plusieurs livrables importants à une seule carte générique.

Le visiteur doit comprendre trois choses :

1. des systèmes métier complets ont été conçus et livrés ;
2. ces systèmes comprennent selon les cas du web, du backend, du mobile, de l’infrastructure et de l’automatisation ;
3. certaines réalisations intègrent directement de l’IA dans leur fonctionnement, ce qui est différent de l’usage d’agents IA comme outils de développement.

## Taxonomie cible

### Systèmes et produits structurants

Ces réalisations peuvent recevoir une étude de cas complète :

1. **TZ Smart** — plateforme pour fournisseur d’accès à Internet, composée d’un backend, d’un frontend et d’une application mobile.
2. **Fretunia** — plateforme SaaS de gestion logistique et de suivi de colis.
3. **Système Bénéficiaires AIM** — système web et mobile de gestion des bénéficiaires et des paiements.
4. **ACM / iagasy** — orchestrateur de commerce social pour Messenger et WhatsApp, reposant notamment sur n8n et OpenClaw.

Une étude de cas peut contenir plusieurs livrables. Chaque site ou application effectivement réalisé peut néanmoins être présenté au même niveau dans l’inventaire des réalisations, avec sa propre carte et sa propre présentation.

### Réalisations web full-stack

Chaque réalisation reçoit une carte propre avec son nom, son secteur, une description courte, sa stack vérifiée, son URL publique et son média réel lorsqu’il est disponible :

1. **SBT Travel** — `https://www.sbt-travel.mg` ;
2. **RMB Cargo** — `https://www.rmb-cargo.mg` ;
3. **JN Travel** — `https://jntravel.mg` ;
4. **Système Bénéficiaires AIM** — `https://www.dms-aim.online` ;
5. **Fretunia** — `https://www.fretunia.com` ;
6. **Iagasy / ACM** — `https://www.iagasy.com`, avec `https://acmv2.techzone.lat/` comme production applicative disponible ;
7. **TZ Smart** — `https://www.tzsmart.app` ou l’URL publique corrigée manuellement avant publication.

Les trois sites SBT Travel, RMB Cargo et JN Travel sont affichés comme trois réalisations autonomes. Le portfolio ne mentionne pas leur éventuel partage de code, de dépôt, de socle ou de processus.

### Applications mobiles

Présenter les applications mobiles dans le même ensemble que toutes les autres réalisations, avec la même importance visuelle, le même format de carte et le même accès à une présentation détaillée :

1. **RMB Cargo — espace client mobile** ;
2. **AIM — application mobile de paiement et de gestion bénéficiaires**, développée avec Flutter ;
3. **TZ Smart — application mobile pour opérateur FAI**.

Chaque application mobile est une réalisation à part entière. Elle possède sa propre carte, sa fonction opérationnelle, sa stack, ses fonctionnalités et ses médias. Sa relation avec un système plus large peut être indiquée comme information de contexte, mais elle ne doit ni la reléguer dans un sous-ensemble ni empêcher une présentation détaillée autonome.

Le filtre `Mobile`, s’il est utilisé, sert uniquement à faciliter la consultation. Il ne crée aucune hiérarchie éditoriale entre les applications mobiles, les sites web, les systèmes et les réalisations intégrant de l’IA.

### IA intégrée aux produits

Cette catégorie décrit des fonctionnalités exécutées dans les produits en production. Elle ne décrit pas la méthode utilisée pour écrire le code.

#### ACM / iagasy

- agent orchestrateur de commerce social ;
- interactions Messenger et WhatsApp ;
- orchestration par n8n ;
- exécution agentique avec OpenClaw ;
- catalogue, contexte métier et automatisations conversationnelles ;
- contrôles, traces et relais humains à présenter lorsqu’ils sont disponibles dans les données validées.

#### TZ Smart

- API OpenAI intégrée aux réponses et au chat IA ;
- automatisations n8n pour les notifications et traitements métier ;
- analyses et statistiques avancées assistées par LLM ;
- séparation claire entre suggestions IA et décisions opérationnelles.

#### Fretunia

- automatisation par n8n des notifications opérationnelles envoyées via WhatsApp, e-mail et SMS ;
- automatisation de la production de statistiques et d’analyses avancées à partir des données logistiques ;
- intégration directe de l’API OpenAI à la gestion intelligente des colis afin d’assister l’analyse des événements, la compréhension des situations opérationnelles et la production d’informations utiles aux équipes ;
- les formulations publiques devront décrire précisément les actions réellement exécutées par l’IA et ne pas lui attribuer de décision autonome non validée ;
- Codex et Claude Code restent documentés dans la méthode de développement et ne sont pas présentés comme des fonctionnalités utilisateur de Fretunia.

### Développement assisté par agents IA

Conserver la section existante consacrée à la méthode specs-driven et aux outils Codex, Claude Code et autres agents de développement.

Cette section répond à la question : **comment le logiciel est-il conçu et validé ?**

La section « IA intégrée aux produits » répond à une autre question : **comment l’IA participe-t-elle au fonctionnement du produit livré ?**

Les deux contenus ne doivent jamais être fusionnés dans une même carte ou une même affirmation.

## Routes à modifier

### `/` — Accueil

#### Modifications

- Remplacer l’aperçu limité aux quatre anciens projets par une sélection représentative des quatre familles : système métier, web, mobile et IA intégrée.
- Conserver le positionnement Full-Stack Senior et la méthode specs-driven.
- Ajouter une section courte « Produits et systèmes livrés » mettant en avant TZ Smart, Fretunia, AIM et ACM/Iagasy.
- Ajouter une rangée « Sites web en production » avec SBT Travel, RMB Cargo et JN Travel.
- Reformuler la carte « IA appliquée » pour parler d’intégrations dans les produits, sans recopier le discours sur les agents de développement.
- Conserver un lien clair vers `/projets` pour l’inventaire complet.

#### Pourquoi

L’accueil actuel donne l’impression que toutes les réalisations se réduisent à quatre cartes. La nouvelle structure doit révéler l’étendue du travail en quelques secondes sans transformer le hero en catalogue.

### `/projets` — Réalisations

#### Modifications

- Remplacer la liste unique d’études de cas par une navigation ou des filtres : `Tous`, `Systèmes`, `Web`, `Mobile`, `IA intégrée`.
- Créer des études de cas principales pour TZ Smart, Fretunia, AIM et ACM/Iagasy.
- Ajouter les cartes SBT Travel, RMB Cargo et JN Travel avec liens publics.
- Faire apparaître les trois applications mobiles au même niveau visuel et éditorial que les autres réalisations, avec des pages ou présentations détaillées autonomes.
- Prévoir pour chaque réalisation : nom, catégorie, résumé opérationnel, stack, fonctions livrées, lien public et média. Une relation éventuelle avec un système plus large reste une information contextuelle facultative.
- Supprimer la contrainte éditoriale « quatre projets seulement ».
- Remplacer les placeholders lorsque des captures réelles validées sont disponibles et optimisées.

#### Pourquoi

Cette route devient la source principale de compréhension des réalisations. Les catégories facilitent uniquement la consultation : toutes les réalisations web, mobiles, système et IA appartiennent au même portfolio et bénéficient du même niveau de présentation.

### `/competences` — Compétences

#### Modifications

- Relier les compétences aux nouveaux identifiants de réalisations.
- Ajouter ou renforcer les preuves suivantes : Flutter et mobile offline pour AIM ; plateforme FAI, paiements et infrastructure pour TZ Smart ; SaaS logistique, notifications multicanales n8n, statistiques avancées et intégration OpenAI pour Fretunia ; orchestration n8n/OpenClaw et commerce conversationnel pour ACM/Iagasy.
- Séparer visuellement « IA produit » de « agents de développement ».
- Ne pas utiliser les noms Codex ou Claude Code comme preuve d’une fonctionnalité IA livrée à un utilisateur final.

#### Pourquoi

La matrice actuelle référence surtout les quatre anciens identifiants. Elle doit refléter les nouvelles réalisations et empêcher la confusion entre compétence de construction assistée et intégration IA en production.

### `/methode` — Méthode

#### Modifications

- Conserver le pipeline specs-driven existant.
- Conserver Codex, Claude Code et les agents similaires dans la partie exécution, tests et revue.
- Ajouter un encadré de distinction : « agents utilisés pour développer » versus « agents intégrés au produit ».
- Éviter de détailler ACM, TZ Smart ou Fretunia comme études de cas sur cette route ; utiliser seulement des liens contextuels vers `/projets`.

#### Pourquoi

La méthode est déjà pertinente. Elle doit être clarifiée, pas remplacée par le catalogue des intégrations IA.

### `/parcours` — Parcours

#### Modifications

- Conserver la progression terrain, données, SaaS, IA et infrastructure.
- Actualiser les références de projets afin d’inclure les systèmes et livrables nouvellement publiés.
- Présenter l’évolution vers des plateformes complètes et des intégrations IA opérationnelles, sans transformer la chronologie en doublon de `/projets`.

#### Pourquoi

Cette route doit expliquer la progression de responsabilité et de complexité, tandis que `/projets` démontre les réalisations.

### `/contact` — Contact

#### Modifications

- Conserver le composeur `mailto` et les canaux existants.
- Mettre à jour les types de mission proposés : plateforme métier full-stack, application mobile, SaaS opérationnel, intégration IA/automatisation, reprise et fiabilisation d’un système existant.
- Ne pas ajouter de faux formulaire envoyé côté serveur.

#### Pourquoi

Les modes de collaboration doivent correspondre aux capacités désormais démontrées par le portfolio.

## Évolution du modèle de données

Le type actuel `Project` et l’union limitée à quatre `ProjectId` ne suffisent plus. La prochaine implémentation doit adopter un modèle relationnel explicite, par exemple :

```ts
type WorkId =
  | 'tz-smart'
  | 'fretunia'
  | 'aim-beneficiaries'
  | 'acm-iagasy'
  | 'sbt-travel'
  | 'rmb-cargo'
  | 'jn-travel'
  | 'rmb-cargo-mobile'
  | 'aim-mobile'
  | 'tz-smart-mobile';

type WorkCategory = 'system' | 'web' | 'mobile' | 'product-ai';

type WorkItem = {
  id: WorkId | string;
  title: string;
  category: WorkCategory;
  relatedSystemId?: WorkId;
  summary: string;
  operationalPurpose: string;
  stack: string[];
  capabilities: string[];
  publicUrl?: string;
  alternatePublicUrl?: string;
  mediaIds: string[];
  featured: boolean;
};
```

Règles :

- `relatedSystemId` peut documenter la relation technique entre une réalisation et un système plus large, sans créer de hiérarchie dans l’interface ;
- les applications mobiles disposent de leurs propres identifiants, cartes, contenus et médias ;
- une réalisation peut appartenir à plusieurs vues grâce aux catégories et capacités, sans dupliquer son contenu ;
- les descriptions, URLs et stacks restent dans les données typées ;
- aucune URL n’est dispersée dans les composants ;
- les domaines validés par le propriétaire peuvent être enregistrés même si leur DNS doit être corrigé ultérieurement ;
- aucune mention publique d’un socle partagé entre SBT Travel, RMB Cargo et JN Travel n’est ajoutée ;
- les outils de développement assisté restent dans un modèle `WorkingMethod`, distinct des capacités `product-ai`.

## Composants concernés lors de l’implémentation

- `ProjectCard` doit devenir une carte de réalisation générique ou être complété par `WorkCard`.
- `ProjectsPage` doit présenter toutes les réalisations dans un ensemble commun et gérer des catégories de consultation sans relation visuelle parent/enfant.
- `HomePage` doit consommer des sélections éditoriales, pas les premiers éléments d’un tableau.
- `SkillsMatrix` doit référencer les nouveaux identifiants de réalisations.
- un composant `WorkFilters` peut porter le filtrage accessible de `/projets`.
- un composant contextuel facultatif peut signaler les systèmes associés sans réduire l’autonomie éditoriale d’une réalisation.
- les médias réels doivent passer par `ResponsiveMedia` et le manifeste média existant.

## Contenus à préserver

- positionnement B2B et opérationnel ;
- titre Ingénieur Full-Stack Senior ;
- méthode specs-driven et responsabilité humaine ;
- contact réel par `mailto` ;
- faits, métriques et garde-fous déjà validés ;
- volumes AIM formulés comme preuve de criticité du système et non comme performance personnelle ;
- schémas métier en HTML/CSS/SVG ;
- accessibilité, SEO et performances définis dans les spécifications actuelles.

## Contenus à ne pas publier automatiquement

- chiffres, tarifs ou témoignages simplement lus sur les sites clients ;
- métriques non présentes dans une source déjà validée ;
- secrets, configurations privées, URLs d’administration ou captures contenant des données personnelles ;
- affirmation selon laquelle Codex, Claude Code ou un autre agent est intégré à un produit lorsque cet agent a seulement servi au développement ;
- faux regroupement faisant passer un livrable d’un produit pour un système indépendant sans relation visible.

## Ordre d’implémentation recommandé

1. Aligner toutes les spécifications et retirer l’invariant des quatre projets.
2. Étendre le modèle de données et migrer les quatre entrées existantes.
3. Ajouter les réalisations web et les livrables mobiles.
4. Ajouter les capacités d’IA intégrées à ACM/Iagasy et TZ Smart.
5. Clarifier `/methode` sans réécrire son pipeline.
6. Recomposer l’accueil à partir des nouvelles sélections.
7. Refaire `/projets`, puis relier `/competences` et `/parcours`.
8. Ajouter et optimiser uniquement les médias validés pour publication.
9. Exécuter les validations statiques, responsive, accessibilité, SEO, liens et contenu.

## Critères d’acceptation éditoriaux

- les sept réalisations web listées sont représentables dans les données ;
- les trois applications mobiles sont présentées comme des réalisations autonomes, au même niveau visuel et éditorial que les autres projets ;
- TZ Smart, Fretunia, AIM et ACM/Iagasy disposent d’une structure d’étude de cas ;
- SBT Travel, RMB Cargo et JN Travel apparaissent comme réalisations distinctes sans mention publique d’un socle partagé ;
- Iagasy et TZ Smart peuvent conserver les domaines validés, avec possibilité de correction manuelle des URL ;
- l’IA intégrée aux produits est distincte de l’usage de Codex et Claude Code dans la méthode de développement ;
- Fretunia présente explicitement ses notifications WhatsApp, e-mail et SMS automatisées par n8n, ses statistiques avancées et son intégration directe de l’API OpenAI à la gestion intelligente des colis ;
- aucune vérification supplémentaire du rôle projet par projet n’est exigée ;
- aucune métrique, certification ou fonctionnalité n’est inventée ;
- les six routes conservent une responsabilité éditoriale claire et ne dupliquent pas les mêmes contenus longs.
