<div align="center">

# 🌐 Portfolio

Personal portfolio website, built with **React** and **Vite**.

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)](https://chakra-ui.com)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Live Demo](https://bullbatti.github.io/portfolio/)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#️-tech-stack)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Contact](#-contact)

## ✨ Overview

Personal portfolio built to showcase projects, skills, and professional experience. The interface is built with **Chakra UI** for a clean, accessible design, navigation is handled with **React Router**, and icons are provided by **Boxicons**.

> Junior Full Stack Developer. Firm believer in continuous learning, collaboration, and knowledge sharing.

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| [React](https://react.dev) | Library for building the user interface |
| [Vite](https://vitejs.dev) | Ultra-fast build tool and dev server |
| [React Router](https://reactrouter.com) | Client-side routing |
| [Chakra UI](https://chakra-ui.com) | Accessible, composable component library |
| [Boxicons](https://boxicons.com) | Open-source icon set |

## 🚀 Installation

Requirements: [Node.js](https://nodejs.org/) ≥ 18 and npm.

```bash
# Clone the repository
git clone https://github.com/bullbatti/portfolio.git

# Move into the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development environment |
| `npm run build` | Creates the production build |
| `npm run preview` | Local preview of the build |
| `npm run deploy` | Publishes the site to GitHub Pages |

## 🌐 Deploying to GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Set `base` in `vite.config.js`:
   ```js
   export default defineConfig({
     base: "/portfolio/",
   });
   ```
4. Run the deploy:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

## 📬 Contact

**Your Name**

[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:your-email@example.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white)](https://your-username.github.io/portfolio/)

---

<div align="center">
<sub>Built with ❤️ by <strong>Your Name</strong></sub>
</div>
