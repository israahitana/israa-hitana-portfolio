/**
 * Parcours (Formation, Expériences et Certifications)
 * Source : CV d'Israa Hitana. L'ordre d'affichage est celui du tableau.
 * type : "education" | "experience" | "certification"
 */
export const timelineData = [
  {
    id: "baccalaureat",
    type: "education",
    role: "Baccalauréat en Informatique",
    institution: "Lycée 2 Mars 1934",
    period: "2024",
    location: "Ghomrassen, Tataouine",
    description: "Baccalauréat en Informatique obtenu avec la mention Assez Bien.",
    skills: ["Informatique", "Bases de la programmation", "Culture scientifique"],
    highlight: false,
  },
  {
    id: "licence-dsi",
    type: "education",
    role: "Licence en Développement des Systèmes d'Information",
    institution: "ISET Mahdia",
    period: "Septembre 2024 – Présent",
    status: "En cours · 3ème année (PFE)",
    location: "Mahdia, Tunisie",
    description:
      "Formation en cours, actuellement en 3ème année avec préparation du Projet de Fin d'Études (PFE). Je recherche un stage PFE pour contribuer à des projets innovants. Le diplôme n'est pas encore obtenu.",
    skills: [
      "Développement Full-Stack",
      "Conception UML",
      "POO & Design Patterns",
      "Bases de données",
      "Développement mobile",
      "Data & IA",
    ],
    highlight: true,
  },
  {
    id: "sqli-services",
    type: "experience",
    role: "Stagiaire en Développement Logiciel",
    institution: "SQLI-SERVICES",
    period: "Janvier 2026",
    location: "Tunisie",
    description:
      "Participation au développement d'une application web Full-Stack de gestion des tâches avec la stack MERN : React, Node.js / Express et MongoDB. Travail collaboratif en équipe avec Git et GitHub.",
    skills: ["React", "Node.js / Express", "MongoDB", "API REST", "Git / GitHub"],
    highlight: false,
  },
  {
    id: "git-github",
    type: "certification",
    role: "Introduction à Git et GitHub",
    institution: "365 Data Science",
    period: "Certification",
    location: "En ligne",
    description: "Gestion de versions et collaboration en développement.",
    skills: ["Git", "GitHub", "Gestion de versions", "Travail collaboratif"],
    highlight: false,
  },
  {
    id: "google-cloud-ai",
    type: "certification",
    role: "Google Cloud AI Fundamentals",
    institution: "Google Cloud",
    period: "Certification",
    location: "En ligne",
    description:
      "IA générative, grands modèles de langage (LLM), IA responsable et conception de prompts avec Vertex AI.",
    skills: ["IA générative", "LLM", "Vertex AI", "Prompt design", "IA responsable"],
    highlight: false,
  },
  {
    id: "la-poste-ctt",
    type: "experience",
    role: "Stagiaire au Service CTT",
    institution: "La Poste Tunisienne",
    period: "Janvier 2025",
    location: "Ghomrassen, Tataouine",
    description:
      "Analyse des processus métier du service (réception, suivi et traitement des envois) dans une optique d'informatisation, découverte des applications internes de gestion et identification des besoins des utilisateurs avec des pistes de digitalisation.",
    skills: ["Analyse des besoins", "Processus métier", "Applications de gestion", "Digitalisation"],
    highlight: false,
  },
];
