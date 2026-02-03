# Biomindz Frontend

Frontend application for Biomindz built with React, TypeScript, and Vite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will start on `http://localhost:8087`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
  ├── assets/          # Static assets (images, fonts, etc.)
  ├── components/      # Reusable React components
  ├── config/          # Configuration files
  ├── contexts/        # React contexts
  ├── hooks/           # Custom React hooks
  ├── layouts/         # Layout components
  ├── lib/             # Utility libraries
  ├── pages/           # Page components
  ├── services/        # API service functions
  ├── types/           # TypeScript type definitions
  ├── App.tsx          # Main app component
  ├── main.tsx         # Entry point
  └── index.css        # Global styles
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Query
- And more...
