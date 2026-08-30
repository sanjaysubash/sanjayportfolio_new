// eslint-config-next v16 ships native flat configs, so they are imported
// directly. Routing them through FlatCompat/@eslint/eslintrc instead loads a
// flat config array down the legacy eslintrc path, and the validator's
// JSON.stringify then chokes on the plugin objects' circular references.
//
// Both entry points are needed, mirroring the previous
// compat.extends("next/core-web-vitals", "next/typescript"): core-web-vitals
// carries the Next.js/React/a11y rules, and typescript carries the
// typescript-eslint rule set (no-unused-vars, no-explicit-any, prefer-const…).
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default eslintConfig;
