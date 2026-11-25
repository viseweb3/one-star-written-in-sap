// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about its human owner, under 280 characters.
// Writes the review to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star: he bought me for 'good energy', then parked me behind the Wi-Fi router for feng shui and now blames my brown leaf tips on my attitude.";

// The bounty gate requires /output/entry.txt to be 1 to 279 characters;
// refuse to emit an over-long one.
if (line.length > 279) {
  throw new Error(`entry is ${line.length} characters, over the 279 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
