import OpenAI from "openai";
import fs from "fs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "alloy", // Try alloy, ash, ballad, coral, sage, or verse
  input: `Ladies and gentlemen, may we have your attention, please.

We would now like to ask our cabin crew to demonstrate the safety features aboard this vessel.

If the Return to Cabins sign illuminates, please make your way to your cabin as soon as possible...`,
});

const buffer = Buffer.from(await response.arrayBuffer());
fs.writeFileSync("ROCruisesSafetyDemo.mp3", buffer);

console.log("MP3 created!");
