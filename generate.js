import OpenAI from "openai";
import fs from "node:fs/promises";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("Missing OPENAI_API_KEY environment variable.");
  process.exit(1);
}

const client = new OpenAI({ apiKey });

const safetyDemo = `Ladies and gentlemen, may we have your attention, please.

We would now like to ask our cabin crew to demonstrate the safety features aboard this vessel.

If the Return to Cabins sign illuminates, please make your way to your cabin as soon as possible. If your cabin door becomes stuck, try locking and unlocking it several times. If the issue persists, contact a crew member for assistance.

In the event of an emergency, proceed to the nearest lifeboat embarkation area. This vessel is equipped with several rescue boats, which are clearly marked throughout the ship.

If the Abandon Ship alarm sounds, leave the vessel immediately using the nearest emergency exit and follow the illuminated emergency guide lights. Leave your luggage and other belongings in your cabin, but take essential personal documents, such as identification, if it is safe to do so.

Life jackets are available at every rescue boat. Should an evacuation become necessary, our crew members will distribute them and provide instructions on how to wear them correctly.

In the unlikely event of an uncontrolled fire, the Captain may order the abandonment of the vessel. Please remain calm and carefully follow all instructions from the Captain and crew. Avoid restricted or hazardous areas, and proceed directly to your assigned rescue boat.

If you have any questions during your voyage, please do not hesitate to ask a member of our cabin crew. They will be happy to assist you.

Thank you for choosing RO Cruises. We wish you a safe and pleasant voyage.`;

try {
  const response = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: safetyDemo,
    instructions:
      "Speak as a calm, professional cruise ship safety announcer. Use clear pacing, confident delivery, and short natural pauses between sections.",
    response_format: "mp3",
  });

  const outputPath = "ROCruisesSafetyDemo.mp3";
  const audioBuffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, audioBuffer);

  console.log(`MP3 created: ${outputPath}`);
} catch (error) {
  console.error("Failed to generate speech:");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
