# Satark AI

**A multilingual scam-safety companion for India.** Satark helps people pause, understand suspicious messages or calls, and choose practical next steps before sharing money, OTPs, UPI PINs, passwords, or personal information.

[Open the live website](https://satarkai-ten.vercel.app/) · [Report a bug](https://github.com/hemantrai-tech/satarkai-ten/issues/new?template=bug_report.yml) · [Suggest an idea](https://github.com/hemantrai-tech/satarkai-ten/issues/new?template=feature_request.yml)

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white) ![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)

## What it does

Satark accepts a typed statement describing a call, message, payment request, job offer, or other situation. A small language model runs in the browser and returns a structured, plain-language report with a pattern score, evidence, likely tactics, verification questions, and steps the person can take right away. People can ask typed follow-up questions about that report.

The site presents that utility through a cinematic, scroll-led story and a practical safety playbook. It is designed to encourage a calm pause and independent verification, rather than to make decisions for someone.

### Highlights

- **12 Indian languages:** Indian English, Hindi, Bengali, Marathi, Telugu, Tamil, Kannada, Gujarati, Malayalam, Punjabi, Odia, and Urdu.
- **On-device text analysis:** the current text checker uses WebLLM and the `Qwen2.5-0.5B-Instruct-q4f16_1-MLC` model in a WebGPU-capable browser. No Gemini or other model API key is needed for text checks or typed follow-ups.
- **Context and evidence:** results include a 0–100 concern-signal score, severity label, tactics spotted, immediate steps, independent verification questions, and a short response script.
- **Personal phrase watchlist:** users can keep up to 16 phrases in browser storage and provide them as unverified context to the local analysis.
- **Read results aloud:** uses the browser's built-in speech synthesis when an appropriate voice is available.
- **Safety guidance:** encourages independent contact through official channels. If money was transferred or banking access was exposed, the UI advises calling India's cyber fraud helpline **1930**.
- **Responsive story experience:** built with React, Tailwind CSS, GSAP, and Lenis, with reduced-motion preferences respected.

## Demo and model requirements

The live site is at [satarkai-ten.vercel.app](https://satarkai-ten.vercel.app/).

The first text check downloads the browser model (about **945 MB**) from the model host and caches it locally. Later visits may reuse that cache. It requires a recent WebGPU-capable browser and a device with sufficient available GPU memory. The analysis can be slower or unavailable on unsupported devices. See [WebLLM's model list](https://webllm.mlc.ai/models/) and [first-load guidance](https://webllm.mlc.ai/docs/user/basic_usage.html).

The 0.5B model is intentionally small for local inference. Its analysis can be wrong, incomplete, or inconsistent across languages. The score is a heuristic signal, **not a calibrated probability, proof of fraud, legal finding, or substitute for official advice**. Verify urgent claims through a known official app, website, or phone number. Never share OTPs, UPI PINs, passwords, or install remote-access software at a caller's request.

## Privacy and deployment notes

- Text analysis and typed follow-ups run in the browser. The model files are fetched from the model host on first use; the submitted statement is passed to the local model, not to a Gemini API.
- The watchlist is held in the browser's local storage. Avoid putting full OTPs, PINs, Aadhaar numbers, passwords, or other secrets into a statement.
- The repository also contains a legacy Express API for optional account, contact, and history features. Its JSON store is suitable only for local/demo use. On Vercel it writes to temporary `/tmp` storage, which is not durable or shared reliably across function instances.
- Voice transcription and screenshot analysis are **not exposed in the current no-key UI**. The legacy server routes for those features require `GEMINI_API_KEY` if re-enabled.
- Set a strong `SESSION_SECRET` before exposing account/authentication routes; without it, the fallback is random per process and sessions may not survive instance changes. Do not commit `.env` files, credentials, real scam messages containing personal data, or production secrets.

## Run locally

### Requirements

- Node.js `20.19+` or `22.12+`
- npm
- A recent WebGPU-capable browser for local model inference

### Install and start

```bash
git clone https://github.com/hemantrai-tech/satarkai-ten.git
cd satarkai-ten
npm install
npm run dev
```

The development server starts the Vite website and Express API. No environment file is required for the browser-local text checker. Copy `.env.example` to `.env` only if you need to configure the optional server features.

### Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local app and API server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the Vite production build |
| `npm run lint` | Run the TypeScript compiler check |

## Deploy to Vercel

The repository includes a Vercel configuration for Vite. Import the GitHub repository in Vercel with the project root set to `./` and these settings:

- **Framework:** Vite
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

No API key is needed for the current browser-local text checker. Configure `SESSION_SECRET` before enabling account routes. `GEMINI_API_KEY` is only needed for the legacy voice/image server routes if those are brought back into the UI. See [DEPLOY-VERCEL.md](DEPLOY-VERCEL.md) for the project-specific notes.

## Project layout

```text
api/                      Vercel adapter for the Express API
server.ts                 Express routes and local development server
server/ai.ts              Legacy Gemini-backed voice/image analysis
server/store.ts           Prototype JSON storage for API features
src/
  components/             Page sections and tracker UI
  i18n/                   Supported language labels and copy
  lib/localSatarkModel.ts WebLLM local analysis and follow-up prompts
  assets/                 Site images
  App.tsx                 App state and section orchestration
vercel.json               Vercel build, headers, CSP, and SPA routing
```

## Contributing

Bug reports, careful translations, model evaluations, and accessibility improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Please use synthetic or fully redacted examples when discussing scam messages; never publish another person's personal, financial, or authentication details.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for proposed improvements, including better threat evaluations, native-language review, durable storage, and accessible offline behavior. These are ideas, not a promise that a feature is implemented or scheduled.

## License

No open-source license is included yet. Unless the repository owner adds one, all rights remain with the copyright holder; do not assume the source is licensed for reuse.
