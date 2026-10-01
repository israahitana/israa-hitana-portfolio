/**
 * Données du parcours (Formation & Expériences professionnelles / académiques)
 * Organisées de manière chronologique pour une timeline moderne.
 */
export const timelineData = [
  {
    id: "pfe-target",
    type: "objective", // "objective", "education", "experience"
    role: "Recherche de Stage PFE (Projet de Fin d'Études)",
    institution: "Entreprises en Tunisie, France ou à l'International",
    period: "Février / Mars 2026 — 4 à 6 mois",
    location: "Tunisie / France / International",
    description: "Recherche active d'une opportunité de stage de fin d'études en tant que Software Developer. Volonté d'intégrer une équipe d'ingénierie logicielle pour concevoir et développer des solutions innovantes (Web, Logiciel, Mobile, Data & IA).",
    skills: ["Software Engineering", "Full-Stack", "Mobile", "Data & AI", "Agile"],
    highlight: true,
  },
  {
    id: "engineering-degree",
    type: "education",
    role: "Cycle Ingénieur en Génie Logiciel & Informatique",
    institution: "École d'Ingénieurs",
    period: "En cours (Dernière année / PFE)",
    location: "Tunisie",
    description: "Formation d'ingénieur approfondie couvrant la conception logicielle, les architectures distribuées, le développement Full-Stack, les systèmes de bases de données avancés, la conteneurisation et l'intelligence artificielle.",
    skills: ["Architecture Logicielle", "UML & POO", "Bases de données", "Java / Spring", "React", "Python"],
    highlight: false,
  },
  {
    id: "internship-academic-exp",
    type: "experience",
    role: "Stage / Projet d'Ingénierie Logicielle",
    institution: "Entreprise / Laboratoire d'Ingénierie",
    period: "Été / Session Académique",
    location: "Tunisie",
    description: "Participation au cycle de développement d'une solution logicielle : analyse des besoins, modélisation des processus, conception de l'architecture et implémentation de modules applicatifs.",
    skills: ["Développement Logiciel", "Git / GitHub", "Collaboration", "Tests"],
    highlight: false,
  },
  {
    id: "preparatory-cycle",
    type: "education",
    role: "Cycle Préparatoire aux Études d'Ingénieurs (ou Licence)",
    institution: "Institut Supérieur / Université",
    period: "Parcours préparatoire",
    location: "Tunisie",
    description: "Acquisition de bases solides en mathématiques appliquées, algorithmique fondamentale, structures de données, programmation procédurale et orientée objet.",
    skills: ["Algorithmique", "Structures de données", "Mathématiques", "C / C++", "Logique formelle"],
    highlight: false,
  },
];
