import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Condición basada en NODE_ENV
const isProduction = process.env.NODE_ENV === 'production';

const eslintConfig = isProduction
  ? [] // Desactiva ESLint en producción
  : [
      ...compat.extends("next/core-web-vitals", "next/typescript"),
      {
        ignores: [
          "node_modules/**",
          ".next/**",
          "out/**",
          "build/**",
          "next-env.d.ts",
        ],
      },
    ];

export default eslintConfig;