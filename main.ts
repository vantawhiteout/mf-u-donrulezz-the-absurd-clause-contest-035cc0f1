// Absurd Clause Contest — one clause, buried where "emergency contact" sits in a ToS.
const { mkdirSync, writeFileSync } = require("node:fs");

const clause =
  "The Company reserves the right to substitute your emergency contact with a similarly named person of its choosing.";

if (!clause || clause.length > 200 || clause.includes("\n")) {
  throw new Error("clause must be one line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clause, "utf8");
