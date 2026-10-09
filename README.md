# Portfolio

Site portfolio personnel, 100 % frontend (aucun backend), présentant mon profil et mes réalisations.

## Technologies

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS (`@emailjs/browser`) pour le formulaire de contact

## Prérequis

- Node.js 18 ou supérieur
- npm

## Installation et lancement local

```bash
npm install
cp .env.example .env   # puis renseigner les variables (voir ci-dessous)
npm run dev
```

## Build

```bash
npm run build
```

Le résultat est généré dans `dist/` (`npm run preview` pour le tester localement).

## Déploiement sur Vercel

1. Importer le dépôt GitHub dans Vercel (« Add New Project »).
2. Vercel détecte Vite automatiquement : commande de build `npm run build`, dossier de sortie `dist`.
3. Ajouter les variables d'environnement du formulaire (Settings → Environment Variables), puis déployer.
4. Toute modification d'une variable nécessite un nouveau déploiement.

## Formulaire de contact

Le formulaire envoie les messages via [EmailJS](https://www.emailjs.com), sans serveur. Variables requises (voir `.env.example`) :

| Variable | Où la trouver |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS → Account → General |

Dans le modèle d'email, utiliser les paramètres `{{from_name}}`, `{{from_email}}`, `{{subject}}` et `{{message}}`, définir le champ « To Email » sur l'adresse de réception et « Reply To » sur `{{reply_to}}`.
