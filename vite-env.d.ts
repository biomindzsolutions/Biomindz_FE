/// <reference types="vite/client" />

// Node.js global types for vite.config.ts
declare const __dirname: string

// Node.js module declarations
declare module 'path' {
  export function resolve(...paths: string[]): string
  export function dirname(path: string): string
}

// Image module declarations
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}
