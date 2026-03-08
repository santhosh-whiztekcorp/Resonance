/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: "es5",
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindAttributes: ["className", "class", ".*ClassName"],
  tailwindFunctions: ["clsx", "twMerge", "tw", "cn"],
  importOrder: ["^react", "^next", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default config
