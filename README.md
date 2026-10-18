# Victor Moni | Portfolio

Personal portfolio showcasing my projects, technical skills, and professional background as a Full Stack Developer.

Built with **React**, **TypeScript**, and **Vite**, and deployed on **Vercel**.

**[View Live Portfolio →](https://victormoni.vercel.app)**

## Features

- Responsive layout for desktop and mobile devices.
- Component-based interface built with React.
- Static typing with TypeScript.
- Local development and production builds powered by Vite.

## Tech Stack

| Category | Technology |
| --- | --- |
| UI library | React |
| Language | TypeScript |
| Build tool | Vite |
| Code quality | ESLint |
| Hosting | Vercel |

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/VictorMoni/Portfolio.git
cd Portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Commands

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run automated tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code quality with ESLint |

## Automated Tests

Install dependencies with `npm ci`, then run `npm test`. During development,
use `npm run test:watch` to rerun affected tests when files change.

The suite uses Vitest, React Testing Library, and jsdom. It covers page integration,
navigation targets, project links and favorite callbacks, and gallery interactions
(including Escape dismissal and scroll cleanup). Tests exercise the real React
components; jsdom's missing `matchMedia` API is supplied in `src/test/setup.ts`.
Responsive layout, slider positioning, and visual appearance require browser checks.

Run `npm run build` and `npm run lint` alongside the tests before submitting changes.

## About Me

I'm **Victor Moni**, a Full Stack Developer with experience in **.NET, C#, Angular, React, and SQL**.

This portfolio brings together my professional background and projects, reflecting my continued growth in software development.

## Connect

- [Portfolio](https://victormoni.vercel.app)
- [LinkedIn](https://www.linkedin.com/in/victormoni/)
- [GitHub](https://github.com/VictorMoni)
