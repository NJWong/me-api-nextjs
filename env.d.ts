declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TURSO_DATABASE_URL: string;
      TURSO_AUTH_TOKEN: string;
      AUTH0_SECRET: string;
      AUTH0_BASE_URL: string;
      AUTH0_ISSUER_BASE_URL: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_CLIENT_SECRET: string;
    }
  }
}

export {}