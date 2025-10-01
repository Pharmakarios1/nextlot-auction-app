/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  // add more env vars here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
