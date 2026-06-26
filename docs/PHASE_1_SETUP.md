# Phase 1: Project Setup To-Do List

## Goal

Set up the foundation for the Lucio's Gardening website so the project is organized, connected to GitHub, documented, and ready for development.

---

## 1. Repository Setup

- [x] Create project folder: `lucios-gardening-website`
- [x] Initialize Git inside the project folder
- [x] Create GitHub repository
- [x] Connect local project to GitHub remote
- [x] Rename default branch to `main`
- [x] Make first commit
- [x] Push project to GitHub

### Suggested Commit

```bash
git add .
git commit -m "Initial project setup"
git push -u origin main
```

---

## 2. Documentation Setup

- [x] Create `docs/` folder
- [x] Add `ROADMAP.md`
- [x] Add `PHASE_1_SETUP.md`
- [x] Add project notes as needed
- [x] Keep documentation updated as the project grows

### Suggested Structure

```txt
docs/
├── ROADMAP.md
└── PHASE_1_SETUP.md
```

---

## 3. React + Vite Setup

- [x] Create Vite React project
- [x] Confirm app runs locally
- [x] Remove unnecessary starter files
- [x] Clean up default Vite styling
- [x] Update project title and basic metadata

### Suggested Command

```bash
npm create vite@latest . -- --template react
```

Then:

```bash
npm install
npm run dev
```

---

## 4. Tailwind CSS Setup

- [x] Install Tailwind CSS
- [x] Configure Tailwind through Vite plugin
- [x] Configure content paths
- [x] Add Tailwind directives to main CSS file
- [x] Test Tailwind with a simple class
- [x] Remove unused starter CSS

### Goal

Tailwind should be fully working before building the first page sections.

---

## 5. Folder Structure Setup

- [x] Create main source folders
- [x] Organize project for reusable components and pages
- [x] Keep assets separated from code
- [x] Prepare folders for future data and styles

### Suggested Structure

```txt
src/
├── assets/
├── components/
├── data/
├── pages/
├── styles/
├── App.jsx
└── main.jsx
```

---

## 6. Base Dependencies

- [x] Install React Router
- [x] Install Motion / Framer Motion
- [x] Install icon library
- [x] Confirm all packages install correctly

### Suggested Packages

```bash
npm install react-router-dom motion lucide-react
```

---

## 7. Routing Setup

- [x] Add React Router
- [x] Create basic page files
- [x] Connect routes inside the app
- [x] Test navigation between pages

### Starter Pages

```txt
Home
About
Services
Gallery
Contact
```

### Suggested Page Files

```txt
src/pages/Home.jsx
src/pages/About.jsx
src/pages/Services.jsx
src/pages/Gallery.jsx
src/pages/Contact.jsx
```

---

## 8. Layout Setup

- [x] Create reusable `Navbar` component
- [x] Create reusable `Footer` component
- [x] Create reusable `Layout` component
- [x] Wrap pages with shared layout
- [x] Make sure navigation works on desktop and mobile

### Suggested Components

```txt
src/components/Navbar.jsx
src/components/Footer.jsx
src/components/Layout.jsx
```

---

## 9. Brand Foundation

- [x] Choose temporary brand colors
- [x] Choose temporary fonts
- [x] Create basic button styles
- [x] Create consistent section spacing
- [x] Create reusable container width
- [x] Add luxury-inspired visual direction

### Starting Brand Direction

- Dark green
- Cream / off-white
- Warm gold accent
- Natural earth tones
- Large outdoor images
- Clean modern typography

---

## 10. Project Cleanup

- [x] Remove unused Vite files
- [x] Remove unused CSS
- [x] Confirm no console errors
- [x] Confirm app loads correctly
- [x] Confirm Git status is clean
- [x] Commit completed Phase 1 setup

### Suggested Commit

```bash
git add .
git commit -m "Complete phase 1 project setup"
git push
```

---

## Phase 1 Completion Criteria

Phase 1 is complete when:

- [x] Project is connected to GitHub
- [x] React + Vite is installed and running
- [x] Tailwind CSS is working
- [x] Main folders are organized
- [x] Basic routing is set up
- [x] Navbar and footer exist
- [x] Documentation files are created
- [x] Project has been committed and pushed to GitHub

---

## Current Status

Status: Planned
