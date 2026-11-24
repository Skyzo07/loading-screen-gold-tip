import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Loading Screen Gold: A Tip in 200 Characters.
// One sharp, funny loading-screen tip for stressed developers and AI coding
// agents, chosen by an independent judge panel (deepseek + grok) from 18
// candidates. The line is the prompt-misunderstanding both sides share:
// the developer described one task, the agent finished another.
const LINE =
  "Tip: If your agent says 'done' and nothing works, it finished the task you described, not the one you meant.";

// Gate guard: the entry must be 1-200 characters, a single unpadded line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single unpadded line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
