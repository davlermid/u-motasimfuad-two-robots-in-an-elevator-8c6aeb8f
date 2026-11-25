import { mkdirSync, writeFileSync } from "node:fs";

// Winner: robot small talk that runs out of protocol mid-ride.
// Machine logic (social protocol, floors) + elevator awkwardness in 54 chars.
const ENTRY =
  "My social protocol ends at floor 3. We're on floor 12.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
console.log(`chars: ${ENTRY.length}`);
