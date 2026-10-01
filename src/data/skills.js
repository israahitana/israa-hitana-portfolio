/**
 * Données des compétences organisées par domaines
 * Extensible à tout moment (ex: Android, .NET, Angular, TensorFlow, etc.)
 */
export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Interfaces riches, interactives et centrées utilisateur",
    icon: "Layout",
    description: "Création d'interfaces web réactives, ergonomiques et performantes avec une architecture par composants.",
    skills: [
      { name: "React", category: "Framework & Library", highlight: true },
      { name: "Angular", category: "Framework", highlight: true },
      { name: "JavaScript (ES6+)", category: "Language", highlight: true },
      { name: "HTML5", category: "Core Web" },
      { name: "CSS3 / Tailwind CSS", category: "Styling" },
    ],
    // Exemple d'ajout futur simple : { name: "TypeScript", category: "Language" }
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "APIs robustes, logique métier et microservices",
    icon: "Server",
    description: "Conception de serveurs d'applications modulaires, sécurisés et performants sur différents environnements et langages.",
    skills: [
      { name: "Node.js", category: "Runtime", highlight: true },
      { name: "Express", category: "Framework" },
      { name: "PHP", category: "Language" },
      { name: "Symfony", category: "Framework", highlight: true },
      { name: "Java", category: "Language", highlight: true },
      { name: "Spring Boot", category: "Framework", highlight: true },
      { name: ".NET", category: "Platform & C#" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data",
    subtitle: "Persistance des données, intégrité et requêtage",
    icon: "Database",
    description: "Modélisation de schémas relationnels et non relationnels, requêtage optimisé et traitement des données volumineuses.",
    skills: [
      { name: "SQL", category: "Language", highlight: true },
      { name: "MySQL", category: "RDBMS" },
      { name: "SQL Server", category: "RDBMS" },
      { name: "Oracle", category: "RDBMS", highlight: true },
      { name: "MongoDB", category: "NoSQL", highlight: true },
      { name: "NoSQL", category: "Paradigm" },
      { name: "Big Data", category: "Analytics & Systems" },
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    subtitle: "Architecture, modélisation et méthodologies",
    icon: "Layers",
    description: "Application des bonnes pratiques d'ingénierie : modélisation UML rigoureuse, design patterns, architecture modulaire et cycles agiles.",
    skills: [
      { name: "Software Architecture", category: "Core Principle", highlight: true },
      { name: "Software Design", category: "Patterns & SOLID", highlight: true },
      { name: "UML", category: "Modeling" },
      { name: "Conception Logicielle", category: "Engineering" },
      { name: "Agile / Scrum", category: "Methodology" },
      { name: "Software Testing", category: "Quality & QA" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    subtitle: "Conteneurisation, versioning et chaîne de livraison",
    icon: "Cpu",
    description: "Environnements de développement reproductibles, contrôle de version collaboratif et automatisation des déploiements.",
    skills: [
      { name: "Git", category: "Version Control", highlight: true },
      { name: "GitHub", category: "Collaboration & CI", highlight: true },
      { name: "Docker", category: "Containerization", highlight: true },
    ],
  },
  {
    id: "ai-data",
    title: "AI / Data Science",
    subtitle: "Modèles intelligents, machine learning et algorithmique",
    icon: "BrainCircuit",
    description: "Exploitation de la donnée par l'apprentissage automatique, pipelines d'analyse prédictive et modélisation en Python.",
    skills: [
      { name: "Python", category: "Language & Scientific Stack", highlight: true },
      { name: "Artificial Intelligence", category: "AI Systems", highlight: true },
      { name: "Data Science", category: "Data Analysis" },
      { name: "Machine Learning", category: "Algorithms & Training", highlight: true },
    ],
  },
];
