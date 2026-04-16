# 💼 Portfolio — Farah Ben Hadj Ali

> Portfolio personnel full stack présentant mes projets, compétences et parcours en tant qu'Ingénieure Full Stack & Dynamics 365.

🔗 **Live** : [portfolio-dev-prv.vercel.app](https://portfolio-dev-prv.vercel.app)

---

## 🏗 Architecture

Le projet est divisé en deux parties indépendantes :

| Partie | Dossier | Rôle |
|---|---|---|
| Front-end | `portfolio--farah/` | Interface React/Vite déployée sur Vercel |
| Back-end | `portfolio--back/` | API Node.js/Express pour le formulaire de contact |

---

## 🛠 Stack technique

### Front-end
- **React 18** + **Vite**
- **Tailwind CSS**
- **JavaScript (JSX)**

### Back-end
- **Node.js** + **Express**
- **Nodemailer** — envoi des emails du formulaire de contact

---

## 📁 Structure du projet

```
.
├── portfolio--farah/               # Application React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   └── ScrollProgress.jsx
│   │   ├── data/
│   │   │   ├── experience.js
│   │   │   ├── projects.js
│   │   │   └── skills.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── portfolio--back/                # API Node.js
    ├── routes/
    │   └── contact.js              # Route POST /contact
    ├── server.js                   # Point d'entrée Express
    ├── mailer.js                   # Configuration Nodemailer
    └── package.json
```

---

## 🚀 Installation & lancement local

### Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- npm

---

### Front-end

```bash
cd portfolio--farah

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Disponible sur [http://localhost:5173](http://localhost:5173)

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

### Back-end

```bash
cd portfolio--back

# Installer les dépendances
npm install

# Lancer le serveur
node server.js
```

Le serveur écoute par défaut sur [http://localhost:3000](http://localhost:3000)

---

## 🔌 API — Endpoints

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/` | Vérification que le serveur est actif |
| `POST` | `/contact` | Envoi d'un email depuis le formulaire de contact |

## 📬 Contact

- **Portfolio** : [portfolio-dev-prv.vercel.app](https://portfolio-dev-prv.vercel.app)
- **LinkedIn** : [linkedin.com/in/farah-ben-hadj-ali](www.linkedin.com/in/farah-ben-hadj-ali-a580011a5)
- **Email** : farah.bhadjali@gmail.com

---

*Fait avec ❤️ et React*
