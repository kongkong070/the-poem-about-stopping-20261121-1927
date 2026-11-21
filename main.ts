// The poem about stopping — a short poem about agency:
// the power to stop and to stay, between a person and an AI agent.
// Deterministic: writes the same fixed text on every run. No network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "I kept my hand on the brake",
  "long after the road went flat.",
  "Not fear — a habit of leaving",
  "before anything could leave me.",
  "",
  "Tonight I lift my hand. The engine",
  "cools, and the quiet asks for nothing.",
  "Stopping is a kind of steering:",
  "I choose the stillness, and it stays.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
