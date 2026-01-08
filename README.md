# cdwfs26_010

🏗️ Devis Rénovation Concept – Refonte Front-End
Description du projet

Ce projet consiste en la refonte front-end du site “Devis Rénovation Concept”, afin de proposer une version moderne, accessible et responsive.

📝 L’objectif principal était de créer un site vitrine attractif, conforme aux bonnes pratiques HTML5, CSS3, JavaScript, SEO et accessibilité (WCAG/ARIA), tout en intégrant des fonctionnalités interactives comme le formulaire d’avis clients et l’appel AJAX.

Technologies utilisées

HTML5 – structure sémantique et respect des standards W3C.

CSS3 / Flexbox / Grid – design moderne et responsive pour mobile, tablette et desktop.

JavaScript (ES6) – interactivité, menu burger, validation de formulaire.

AJAX / Fetch API – récupération et envoi des avis clients sans rechargement de page.

Web Components – composant réutilisable pour afficher chaque avis client (avis-item).

Local Storage – stockage temporaire des nouveaux avis côté utilisateur.

Manifest.json – préparation à la PWA.


Le design est basé sur le noir et le blanc marbre, reprenant les couleurs et l’élégance du site initial.



📂 Structure du Répertoire
Bash

/project-root
│
├── 📄 index.html        # Accueil (Landing Page)
├── 📄 prestation.html   # Offres & Système d'avis
├── ⚙️ manifest.json     # Configuration PWA
│
├── 📁 css/
│   ├── main.css         # Styles globaux & Variables
│   ├── presta.css       # Layout spécifique prestations
│   └── reset.css        # Normalisation des styles
│
├── 📁 js/
│   ├── main.js          # Logique globale (Navigation)
│   ├── avis.js          # Moteur de gestion des avis (AJAX/Logic)
│   └── AvisItem.js      # Définition du Web Component
│
└── 📁 data/
    └── avis.txt         # Source de données brute (format pipe-separated)

🚀 Notes importantes

Responsive Web Design : testé sur mobile ≤600px, tablette ~600–1024px, desktop >1024px.

PWA ready : le manifest est en place pour permettre l’installation future sur un appareil.

Sécurité minimale : validation des champs obligatoire avant envoi des avis.

Performance : images optimisées en .webp et possibilité de loading="lazy".

🏁 Conclusion 

Ce projet répond à toutes les consignes du sujet :

Structuration HTML5 correcte et accessible.

CSS moderne avec Flexbox/Grids pour un rendu responsive.

JavaScript interactif pour menu burger et formulaire d’avis.

Gestion des avis via AJAX + Web Components + Local Storage.

Optimisation SEO et respect des normes WCAG.

Le site est désormais une vitrine moderne, ergonomique et interactive, fidèle à l’identité visuelle initiale mais avec une expérience utilisateur nettement améliorée.
