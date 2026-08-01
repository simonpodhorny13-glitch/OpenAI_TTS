# RO Cruises OpenAI TTS

Generate the **RO Cruises safety demonstration** as an MP3 using OpenAI text-to-speech.

## Requirements

- Node.js 18 or newer
- An OpenAI API key

## Setup

Install the dependencies:

```bash
npm install
```

Set your API key as an environment variable.

### Windows PowerShell

```powershell
$env:OPENAI_API_KEY="sk-proj-your-key-here"
```

### macOS or Linux

```bash
export OPENAI_API_KEY="sk-proj-your-key-here"
```

Never paste your API key into `generate.js` or commit it to GitHub.

## Generate the MP3

Run:

```bash
npm run generate
```

The script creates:

```text
ROCruisesSafetyDemo.mp3
```

The generated MP3 is ignored by Git through `.gitignore`.

## Customization

Edit `generate.js` to change:

- the announcement text
- the OpenAI voice
- the speaking instructions
- the output filename

## Roblox

After generating the MP3, upload it through Roblox Creator Hub as an audio asset and use its asset ID in a `Sound` object.
