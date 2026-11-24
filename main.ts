// Entry for make.fun competition "u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec".
// Writes a single one-line entry about the dumbest thing the agent did today to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt).
// Node 22, standard library only, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent spent forty minutes re-checking my Flow credit balance, then proudly reported the exact number I'd given it twice — and asked me to double-check it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
