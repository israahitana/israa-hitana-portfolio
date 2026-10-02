/**
 * Données du parcours (Formation & Expériences professionnelles / académiques)
 * Ordre : du plus récent au plus ancien
 * 1. Licence en Développement des Systèmes d'Information — 2024 / 2027 (en cours)
 * 2. Stage SQLI-SERVICES — Été 2024
 * 3. Baccalauréat — 2023 / 2024
 */
export const timelineData = [
  {
    id: "licence-dsi",
    type: "education",
    role: "Licence en Développement des Systèmes d'Information",
    institution: "Formation en cours",
    period: "2024 / 2027",
    location: "Tunisie",
    description:
      "Formation en cours en développement des systèmes d'information, couvrant la conception logicielle, le développement web, les bases de données, UML, l'architecture logicielle et les technologies modernes (Web, Data & IA).",
    skills: [
      "Développement Logiciel",
      "Conception",
      "UML",
      "Bases de données",
      "Web Development",
      "Data & IA",
    ],
    highlight: true,
  },
  {
    id: "sqli-services",
    type: "experience",
    role: "Stage / Développement Logiciel",
    institution: "SQLI-SERVICES",
    period: "Été 2024",
    location: "Tunisie",
    description:
      "Expérience en développement informatique au sein de SQLI-SERVICES, société spécialisée dans les solutions web et mobile, le CRM, l'ERP et la cybersécurité. Participation au développement d'une application web de gestion des tâches et mise en pratique des technologies Full-Stack.",
    skills: [
      "Développement Web",
      "Full-Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Git / GitHub",
    ],
    highlight: false,
  },
  {
    id: "baccalaureat",
    type: "education",
    role: "Baccalauréat",
    institution: "Formation Académique",
    period: "2023 / 2024",
    location: "Tunisie",
    description: "Baccalauréat obtenu avec la mention Assez Bien.",
    skills: ["Baccalauréat", "Formation générale"],
    highlight: false,
  },
];
