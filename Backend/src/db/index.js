import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "../config/env.js";
import * as schema from "./schema.js";

if (!env.databaseUrl) {
  throw new Error("DATABASE_URL is missing");
}

const client = postgres(env.databaseUrl, { prepare: false });

export const db = drizzle(client, { schema });
