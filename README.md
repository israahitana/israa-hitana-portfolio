# 💼 Portfolio Professionnel — Israa Hitana

> **Software Developer** • Recherche de **Stage PFE** (Tunisie • France • International)  
> Portfolio moderne, élégant, réactif et évolutif conçu avec **React**, **Vite**, **Tailwind CSS** et **Framer Motion**.

---

## 🌟 Aperçu & Identité Professionnelle

Ce portfolio présente un profil d'ingénierie logicielle polyvalent (**Software Developer**), englobant l'ensemble du cycle de conception et de développement :

* **Web Development & Systems** : React, Angular, Node.js, Express, Symfony, PHP.
* **Software Engineering & Architecture** : Principes SOLID, Clean Code, modélisation UML, Java, Spring Boot, .NET / C#.
* **Databases & Persistance** : Modélisation SQL (MySQL, PostgreSQL, SQL Server, Oracle) & NoSQL (MongoDB, Big Data).
* **Mobile & Cross-Platform** : Développement applicatif réactif et mobile (Android).
* **AI & Data Science** : Algorithmes de Machine Learning, analyse de données volumineuses et scripting Python.
* **DevOps & Qualité** : Conteneurisation Docker, versioning Git/GitHub, tests et méthodologies agiles (Scrum).

---

## 🎨 Direction Artistique & Charte Graphique

L'interface adopte une identité visuelle chaleureuse, sobre, haut de gamme et intemporelle :
* **Palette de couleurs harmonieuse** : Dégradés subtils entre *Warm Gray*, *Taupe*, *Mocha*, *Beige*, *Soft Brown*, *Cream* et *Charcoal*.
* **Design sans excès** : Pas de fond noir agressif ni de blanc pur aveuglant ; un contraste optimisé pour une lecture reposante et professionnelle.
* **Micro-interactions et animations subtiles** : Révélations progressives au défilement (reveal on scroll), glassmorphism chaud (`backdrop-blur`), élévation tactile au survol des cartes.
* **Accessibilité** : Respect des préférences `prefers-reduced-motion`, balisage sémantique HTML5, navigation au clavier et contrastes conformes aux standards WCAG.

---

## 🚀 Technologies Utilisées

| Outil / Bibliothèque | Rôle |
| :--- | :--- |
| **React 19** | Librairie frontend réactive basée sur une architecture de composants |
| **Vite** | Outillage de build et serveur de développement ultra-rapide |
| **Tailwind CSS** | Moteur de styles utilitaires avec charte personnalisée (palette warm/taupe/mocha) |
| **Framer Motion** | Moteur d'animations fluides, transitions et défilement interactif |
| **Lucide React + SVGs** | Bibliothèque d'icônes vectorielles modernes et légères |

---

## 📁 Architecture du Projet

Le code respecte une stricte séparation entre la logique d'affichage (UI) et les données métiers :

```text
israa-hitana-portfolio/
├── public/
│   ├── favicon.svg             # Monogramme IH personnalisé
│   └── robots.txt              # Configuration SEO
├── src/
│   ├── assets/                 # Ressources graphiques et visuelles
│   ├── components/
│   │   ├── Navbar/             # Barre de navigation sticky avec glassmorphism & menu mobile
│   │   ├── Hero/               # Section d'accueil percutante, statuts et boutons d'action
│   │   ├── About/              # Présentation détaillée, formation, piliers d'ingénierie
│   │   ├── Skills/             # Compétences structurées par domaines (sans pourcentages arbitraires)
│   │   ├── Projects/           # Cartes projets interactives avec maquettes vectorielles intégrées
│   │   ├── Experience/         # Timeline moderne combinant Formation & Expériences
│   │   ├── Contact/            # Formulaire avec validation & coordonnées directes
│   │   ├── Footer/             # Pied de page élégant avec retour en haut
│   │   └── UI/                 # Composants réutilisables (Button, Badge, SectionHeading, Icons, etc.)
│   ├── data/
│   │   ├── profile.js          # Informations personnelles, bio, liens et coordonnées
│   │   ├── skills.js           # Liste des compétences organisées par domaines
│   │   ├── projects.js         # Projets réalisés et modèles pour futurs projets
│   │   └── experience.js       # Données de la timeline formation & parcours
│   ├── index.css               # Styles globaux, utilitaires Tailwind & scrollbar personnalisée
│   ├── App.jsx                 # Assemblage des sections
│   └── main.jsx                # Point d'entrée React
├── .env.example                # Modèle de configuration pour le formulaire de contact
├── index.html                  # Balises SEO, Open Graph et polices typographiques
├── tailwind.config.js          # Configuration des thèmes et nuances personnalisées
└── package.json
```

---

## 🧩 Évolutivité : Comment ajouter du contenu ?

Le portfolio est conçu pour évoluer tout au long de votre parcours universitaire et professionnel :

### 1. Ajouter un nouveau projet (.NET, Android, Angular, Java, etc.)
Ouvrez `src/data/projects.js` et ajoutez simplement un objet dans le tableau :

```javascript
{
  id: "mon-nouveau-projet",
  name: "Application Mobile Android",
  domain: "Mobile Development",
  shortDescription: "Description synthétique du projet...",
  technologies: ["Android", "Kotlin", "Room", "Firebase"],
  features: ["Synchronisation hors-ligne", "Interface Material 3"],
  githubUrl: "https://github.com/israahitana/nom-du-depot",
  liveUrl: null, // ou URL de démonstration
  visualType: "software", // ou "ai", "web"
}
```
La carte sera automatiquement générée avec toutes les animations, badges et liens appropriés sans toucher aux composants React !

### 2. Ajouter une compétence ou un nouveau domaine
Ouvrez `src/data/skills.js` :
* Pour ajouter une technologie à une catégorie existante : ajoutez `{ name: "TensorFlow", category: "Deep Learning", highlight: true }`.
* Pour ajouter un domaine entier : ajoutez une nouvelle catégorie avec son titre, sa description et sa liste d'outils.

### 3. Mettre à jour votre CV ou vos coordonnées
Ouvrez `src/data/profile.js` pour modifier vos liens LinkedIn, GitHub, votre adresse email ou déposer votre fichier `cv-israa-hitana.pdf` dans le dossier `public/`.

---

## 📬 Configuration du Formulaire de Contact

Le formulaire intègre une solution prête pour l'envoi réel de messages sans exposer de clé privée dans le frontend :

1. Créez un fichier `.env` à la racine du projet (copiez `.env.example`) :
   ```bash
   cp .env.example .env
   ```
2. Ajoutez votre endpoint de messagerie (ex : via [Web3Forms](https://web3forms.com) ou [Formspree](https://formspree.io)) :
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit?access_key=VOTRE_CLE
   ```
3. **Système de secours automatique** : Si la variable d'environnement n'est pas renseignée, le portfolio ouvre automatiquement un client email (`mailto:`) pré-rempli avec le nom, le sujet et le message de l'expéditeur tout en affichant une confirmation conviviale.

---

## 💻 Installation & Lancement en Local

### Prérequis
* [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
* [npm](https://www.npmjs.com/)

### Étapes
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/israahitana/israa-hitana-portfolio.git
   cd israa-hitana-portfolio
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173/`.

4. Générer la version de production :
   ```bash
   npm run build
   ```

5. Prévisualiser le build de production :
   ```bash
   npm run preview
   ```

---

## 🌐 Déploiement

### Déploiement en 1 clic sur Vercel :
1. Poussez le projet sur GitHub.
2. Rendez-vous sur [vercel.com](https://vercel.com) et importez votre dépôt.
3. Vercel détecte automatiquement Vite et Tailwind. Ajoutez la variable d'environnement `VITE_CONTACT_FORM_ENDPOINT` si souhaité.
4. Cliquez sur **Deploy**.

### Déploiement sur GitHub Pages ou Netlify :
* Le projet est entièrement statique une fois construit (`npm run build`), générant les fichiers optimisés dans le dossier `dist/`.

---

## 📄 Licence
Ce projet est développé pour le portfolio personnel d'**Israa Hitana**. Tous droits réservés.
