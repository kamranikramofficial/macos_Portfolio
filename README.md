# Mac-Style UI Portfolio

A macOS-inspired portfolio UI built with React and Vite. The experience mimics a desktop with a dock, windows, and app-like sections to showcase work, resume, and contact details.

## Features

- Desktop-like layout with dock and window controls
- Windowed apps for Finder, Safari, Terminal, Resume, Photos, Text, and Contact
- Smooth motion and transitions powered by GSAP
- State handled with Zustand stores
- Tailwind CSS styling for fast iteration

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- GSAP
- Zustand
- React PDF

## Getting Started

Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the build:

```
npm run preview
```

Lint the codebase:

```
npm run lint
```

## Project Structure

```
src/
	components/   Dock, navbar, window controls
	windows/      App windows like Finder, Resume, Safari
	store/        Zustand stores for location and windows
	constants/    Shared labels and configuration
public/
	images/       Wallpapers and UI imagery
	icons/        App icons
	files/        PDFs and downloadable assets
```

## Customization

- Update window content inside src/windows
- Adjust UI labels and data in src/constants
- Replace images and icons in public/images and public/icons
- Add or update PDFs in public/files

## Deployment

This project uses Vite. Build output is generated in the dist folder after running npm run build.
