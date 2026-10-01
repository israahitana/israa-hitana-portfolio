/**
 * Données des projets du portfolio
 * Extensible : vous pouvez ajouter d'autres projets (Android, .NET, Angular, Java, Spring Boot, etc.)
 * en ajoutant simplement un nouvel objet dans ce tableau.
 */
export const projectsData = [
  {
    id: "ai-python-data",
    name: "Système d'Intelligence Artificielle & Machine Learning",
    domain: "AI & Data Science",
    shortDescription: "Solution intelligente d'analyse prédictive et de traitement de données développée en Python, exploitant des algorithmes de Machine Learning pour l'extraction de connaissances.",
    fullDescription: "Projet centré sur le cycle complet de la Data et de l'IA : ingestion et nettoyage de jeux de données, ingénierie des caractéristiques (feature engineering), entraînement de modèles prédictifs et évaluation rigoureuse des performances.",
    technologies: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Pandas",
      "Scikit-Learn",
    ],
    features: [
      "Pipeline de prétraitement et de nettoyage automatisé des données",
      "Sélection et entraînement de modèles d'apprentissage supervisé",
      "Évaluation des métriques de précision, rappel et matrice de confusion",
      "Visualisation intuitive des tendances et résultats décisionnels",
    ],
    githubUrl: "https://github.com/israahitana/ai-predictive-system",
    liveUrl: null, // Remplacer par l'URL de démonstration si disponible
    featured: true,
    visualType: "ai", // utilisé pour l'illustration vectorielle élégante
  },
  {
    id: "react-modern-platform",
    name: "Plateforme Web Interactive & Modulaire",
    domain: "Web & Software",
    shortDescription: "Application web réactive développée avec React et JavaScript moderne, offrant une architecture par composants propre, un design soigné et une navigation fluide.",
    fullDescription: "Conception d'une application centrée sur l'expérience utilisateur et les performances frontend. Mise en œuvre d'une gestion d'état réactive, de micro-interactions soignées et d'une intégration d'API REST robuste.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "RESTful API",
      "UI/UX Design",
    ],
    features: [
      "Architecture modulaire et composants réutilisables",
      "Interface entièrement responsive adaptée à tous les écrans",
      "Gestion d'état optimisée pour des transitions instantanées",
      "Intégration d'API asynchrone avec gestion des erreurs",
    ],
    githubUrl: "https://github.com/israahitana/react-modern-app",
    liveUrl: "https://israahitana.github.io/react-modern-app",
    featured: true,
    visualType: "web",
  },
  {
    id: "react-software-solution",
    name: "Solution Logicielle Collaborative React",
    domain: "Software & Web",
    shortDescription: "Application logicielle complète basée sur l'écosystème React, conçue pour la gestion structurée d'activités, la visualisation de données et la productivité.",
    fullDescription: "Développement d'un outil logiciel interactif mettant l'accent sur la robustesse du code, la validation des entrées utilisateurs, la modularité et l'élégance ergonomique.",
    technologies: [
      "React",
      "JavaScript",
      "Component Architecture",
      "State Management",
      "CSS Architecture",
    ],
    features: [
      "Tableau de bord dynamique avec widgets interactifs",
      "Système de filtrage et recherche instantanée",
      "Modélisation claire des données et persistance locale/distante",
      "Conception accessible et responsive",
    ],
    githubUrl: "https://github.com/israahitana/react-software-suite",
    liveUrl: null,
    featured: true,
    visualType: "software",
  },
  /*
   * Exemple pour vos projets futurs (Android, .NET, Angular, Spring Boot, etc.) :
   * Décommentez et complétez simplement pour l'afficher automatiquement !
   *
  {
    id: "android-mobile-app",
    name: "Application Mobile Android",
    domain: "Mobile Development",
    shortDescription: "Application mobile native avec Android Studio, architecture MVVM et persistance Room.",
    technologies: ["Android", "Java/Kotlin", "XML", "SQLite / Room"],
    features: ["Interface tactile native", "Mode hors ligne avec synchronisation"],
    githubUrl: "https://github.com/israahitana/android-app",
    liveUrl: null,
    featured: false,
    visualType: "mobile",
  },
  {
    id: "dotnet-enterprise-app",
    name: "Système de Gestion .NET",
    domain: "Software Development",
    shortDescription: "Application d'entreprise développée en C# / .NET avec base de données SQL Server.",
    technologies: [".NET", "C#", "SQL Server", "Clean Architecture"],
    features: ["Architecture en couches", "Gestion des transactions"],
    githubUrl: "https://github.com/israahitana/dotnet-app",
    liveUrl: null,
    featured: false,
    visualType: "enterprise",
  },
  */
];
