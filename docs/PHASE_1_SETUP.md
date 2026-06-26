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
- [x] Create Tailwind config file
- [x] Configure content paths
- [x] Add Tailwind directives to main CSS file
- [x] Test Tailwind with a simple class
- [x] Remove unused starter CSS

### Goal

Tailwind should be fully working before building the first page sections.

---

## 5. Folder Structure Setup

- [ ] Create main source folders
- [ ] Organize project for reusable components and pages
- [ ] Keep assets separated from code
- [ ] Prepare folders for future data and styles

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

- [ ] Install React Router
- [ ] Install Motion / Framer Motion
- [ ] Install icon library
- [ ] Confirm all packages install correctly

### Suggested Packages

```bash
npm install react-router-dom motion lucide-react
```

---

## 7. Routing Setup

- [ ] Add React Router
- [ ] Create basic page files
- [ ] Connect routes inside the app
- [ ] Test navigation between pages

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

- [ ] Create reusable `Navbar` component
- [ ] Create reusable `Footer` component
- [ ] Create reusable `Layout` component
- [ ] Wrap pages with shared layout
- [ ] Make sure navigation works on desktop and mobile

### Suggested Components

```txt
src/components/Navbar.jsx
src/components/Footer.jsx
src/components/Layout.jsx
```

---

## 9. Brand Foundation

- [ ] Choose temporary brand colors
- [ ] Choose temporary fonts
- [ ] Create basic button styles
- [ ] Create consistent section spacing
- [ ] Create reusable container width
- [ ] Add luxury-inspired visual direction

### Starting Brand Direction

- Dark green
- Cream / off-white
- Warm gold accent
- Natural earth tones
- Large outdoor images
- Clean modern typography

---

## 10. Project Cleanup

- [ ] Remove unused Vite files
- [ ] Remove unused CSS
- [ ] Confirm no console errors
- [ ] Confirm app loads correctly
- [ ] Confirm Git status is clean
- [ ] Commit completed Phase 1 setup

### Suggested Commit

```bash
git add .
git commit -m "Complete phase 1 project setup"
git push
```

---

## Phase 1 Completion Criteria

Phase 1 is complete when:

- [ ] Project is connected to GitHub
- [ ] React + Vite is installed and running
- [ ] Tailwind CSS is working
- [ ] Main folders are organized
- [ ] Basic routing is set up
- [ ] Navbar and footer exist
- [ ] Documentation files are created
- [ ] Project has been committed and pushed to GitHub

---

## Current Status

Status: Planned
