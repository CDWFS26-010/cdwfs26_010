# cdwfs26_010


Magic Home Service – Refonte Front-End
Description du projet

Ce projet consiste en la refonte front-end du site “Devis Rénovation Concept”, afin de proposer une version moderne, accessible et responsive.

L’objectif principal était de créer un site vitrine attractif, conforme aux bonnes pratiques HTML5, CSS3, JavaScript, SEO et accessibilité (WCAG/ARIA), tout en intégrant des fonctionnalités interactives comme le formulaire d’avis clients et l’appel AJAX.

Technologies utilisées

HTML5 – structure sémantique et respect des standards W3C.

CSS3 / Flexbox / Grid – design moderne et responsive pour mobile, tablette et desktop.

JavaScript (ES6) – interactivité, menu burger, validation de formulaire.

AJAX / Fetch API – récupération et envoi des avis clients sans rechargement de page.

Web Components – composant réutilisable pour afficher chaque avis client (avis-item).

Local Storage – stockage temporaire des nouveaux avis côté utilisateur.

Manifest.json – préparation à la PWA.

Design et UX

Le design est basé sur le noir et le blanc marbre, reprenant les couleurs et l’élégance du site initial.
Les choix UI/UX incluent :

Navigation claire et intuitive.

Boutons et CTA visibles avec effets au survol.

Espacements suffisants pour le confort de lecture.

Galerie d’images avec figcaption et description pour l’accessibilité.

Bouton “Aller au contenu” pour faciliter la navigation clavier.

SEO et Accessibilité

Balises <h1>, <h2>, <h3> hiérarchisées correctement.

<meta title> et <meta description> pertinents pour le référencement.

alt descriptif sur toutes les images.

role="region" et aria-label sur sections importantes (ex. galerie, services).

Formulaire d’avis avec labels associés, champs requis et validation accessible.

Menu burger accessible au clavier et mis à jour avec aria-expanded.

Fonctionnalités principales
Menu burger

Ouverture/fermeture au clic.

Mise à jour dynamique de aria-expanded.

Animation simple pour feedback visuel.

Formulaire d’avis clients

Validation complète des champs (nom, prénom, ville, email, note, contenu).

Vérification de l’email (présence de @).

Affichage de messages d’erreur ou de succès accessibles (aria-live).

Gestion des avis via AJAX et Web Component

Lecture des avis existants dans data/avis.txt.

Chaque avis est affiché via un Web Component autonome avis-item.

Nouveaux avis envoyés par le formulaire sont ajoutés dans localStorage.

Aucun rechargement de page lors de l’ajout d’un avis.

Console log pour confirmer la réussite de l’appel AJAX.

Structure du projet
/project-root
│
├─ index.html           # Page d’accueil
├─ prestation.html      # Page prestations + formulaire d’avis
├─ manifest.json        # PWA
├─ css/
│  ├─ main.css          # Styles globaux
│  └─ presta.css        # Styles spécifiques à prestation
│  └─ reset.css         # pour reset le css
├─ js/
│  ├─ main.js           # Scripts généraux (burger menu, interactions)
│  ├─ avis.js           # Gestion formulaire / AJAX
│  └─ AvisItem.js       # Web Component pour un avis
└─ data/
   └─ avis.txt          # Avis existants (format : prenom|nom|ville|note|contenu|date)

Notes importantes

Responsive Web Design : testé sur mobile ≤600px, tablette ~600–1024px, desktop >1024px.

PWA ready : le manifest est en place pour permettre l’installation future sur un appareil.

Sécurité minimale : validation des champs obligatoire avant envoi des avis.

Performance : images optimisées en .webp et possibilité de loading="lazy".

Conclusion

Ce projet répond à toutes les consignes du sujet :

Structuration HTML5 correcte et accessible.

CSS moderne avec Flexbox/Grids pour un rendu responsive.

JavaScript interactif pour menu burger et formulaire d’avis.

Gestion des avis via AJAX + Web Components + Local Storage.

Optimisation SEO et respect des normes WCAG.

Le site est désormais une vitrine moderne, ergonomique et interactive, fidèle à l’identité visuelle initiale mais avec une expérience utilisateur nettement améliorée.
