// drizzle.config.js

/** @type {import("drizzle-kit").Config} */
// import dotenv from "dotenv";
// dotenv.config();

// export default {
//   dialect: "postgresql",
//   out: "./drizzle",
//    driver: "pg",
//   schema: "./utils/schema.js",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
//   },
// };

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_yUYjQoO9grR0@ep-green-sound-a8z1uk18-pooler.eastus2.azure.neon.tech/PrepTalk?sslmode=require&channel_binding=require"
  },
});

