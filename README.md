### Portfolio Redwane Aitbrahim 
Portfolio professionnel développé avec React.js et Node.js, design noir et blanc minimaliste.
Déployement sur Vercel

# Prérequis
Compte GitHub
Compte Vercel (gratuit)

Instructions de déploiement
1. Préparation du projet
Créer un nouveau repository GitHub :

```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Redwane Aitbrahim"
```

   # Créer un repo sur GitHub puis :
```bash
   git remote add origin https://github.com/votre-username/votre-repo-name.git
   git branch -M main
   git push -u origin main
```

2. Structure des fichiers
Assurez-vous que votre structure de fichiers est la suivante :
portfolio/
├── package.json
├── server.js
├── vercel.json
├── README.md
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        └── components/
            ├── Header.js
            ├── Home.js
            ├── About.js
            ├── Experience.js
            ├── Projects.js
            ├── Skills.js
            ├── Contact.js
            └── Footer.js

3. Déployement sur Vercel

Via l'interface Vercel :

Allez sur vercel.com
Connectez-vous avec votre compte GitHub
Cliquez sur "New Project"
Sélectionnez votre repository
Vercel détectera automatiquement la configuration


Via Vercel CLI (optionnel) :

```bash
   npm i -g vercel
```

4. Configuration Vercel
Vercel utilisera automatiquement le fichier vercel.json qui est configuré pour :

Construire le backend Node.js
Construire le frontend React
Router correctement les requêtes API et statiques

5. Variables d'environnement (si nécessaire)
Si vous ajoutez des variables d'environnement plus tard :

Allez dans votre dashboard Vercel
Sélectionnez votre projet
Onglet "Settings" → "Environment Variables"
Ajoutez vos variables

🛠 Développement Local
Installation

```bash
npm install
```

# Installer les dépendances du client

```bash
cd client
npm install
cd ..
```

Lancement en mode développement
# Terminal 1 : Serveur backend (port 5000)

```bash
npm run server
```

# Terminal 2 : Client React (port 3000)
```bash
npm run client
```

# OU lancer les deux en même temps
```bash
npm run dev
```

Build de production
```bash
npm run build
```

# Structure du Projet

Backend (Node.js/Express) : API REST servant les données du portfolio
Frontend (React) : Interface utilisateur responsive avec animations
Design : Noir et blanc minimaliste avec animations Framer Motion

# Fonctionnalités

Design responsive (mobile, tablette, desktop)
Navigation fluide entre les sections
Animations et transitions élégantes
API REST pour les données
SEO optimisé
Performance optimisée

# Technologies Utilisées
Backend: Node.js, Express.js, CORS, Helmet, Compression

Frontend: React.js, React, Router, Framer Motion (animations), React Icons

Vercel, GitHub

🚀 URL de Déploiement
Après déploiement, votre site sera accessible sur :
https://votre-projet-name.vercel.app