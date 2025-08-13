# Wahaj Ahmed's Portfolio Website

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

This is my personal portfolio website built to showcase my skills, projects, and professional experience. It's a modern, responsive single-page application created with React and Vite.

**Live Demo:** [https://www.wahajahmed.site/][def]

## Features

- **Modern UI:** Clean and engaging user interface with smooth animations.
- **Component-Based:** Built with reusable React components for different sections like Hero, About, Skills, Projects, and Contact.
- **Responsive Design:** Looks great on all devices, from mobile phones to desktops.
- **Fast & Lightweight:** Optimized for performance with Vite's fast build tooling.
- **Smooth Scrolling:** Easy navigation between sections using smooth scroll links.

## Tech Stack

- **Frontend:** React, HTML5, CSS3
- **Styling:** Bootstrap, React-Bootstrap, Custom CSS
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Animations & Icons:** React Type Animation, FontAwesome, React Icons
- **Linting:** ESLint

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and other assets
│   ├── components/      # Reusable React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── NavBar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── utils/           # Utility scripts
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or your favorite package manager)

### Installation & Setup

1.  **Clone the repository (or download the source code):**
    ```sh
    # If you haven't already, clone your repository
    # git clone <your-repo-url>
    # cd portfolio-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    This will start a local server, usually at `http://localhost:5173`.
    ```sh
    npm run dev
    ```

4.  **Build for production:**
    This will create a `dist/` folder with the optimized production build.
    ```sh
    npm run build
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

[def]: https://www.wahajahmed.site/