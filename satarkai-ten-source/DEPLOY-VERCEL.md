# Deploy Satark to Vercel

The live website is [satarkai-ten.vercel.app](https://satarkai-ten.vercel.app/). This project builds with Vite and includes an Express API adapter for optional account/workspace routes.

## Import the repository

1. In Vercel, choose **Add New → Project** and import `hemantrai-tech/satarkai-ten`.
2. Set the **Root Directory** to `./`.
3. Use **Vite** as the framework preset, **`npm install`** as the install command, **`npm run build`** as the build command, and **`dist`** as the output directory.
4. Deploy.

No AI API key is needed for browser-local text analysis or typed follow-ups.

## Environment variables

| Variable | Required? | Purpose |
| --- | --- | --- |
| `SESSION_SECRET` | Recommended before enabling auth | Long random secret used to sign session tokens. |
| `GEMINI_API_KEY` | Optional | Used by legacy server-side voice, screenshot, and audio routes. These features are not exposed in the current no-key UI. |
| `DATA_DIR` | Optional for local development | Overrides the local JSON data directory. Vercel's deployment uses temporary storage. |

Set a fresh, high-entropy `SESSION_SECRET` in Vercel's **Project Settings → Environment Variables** before enabling account routes. Without it, the fallback is random per process and sessions may not survive instance changes. Never place secrets in frontend code or commit them. Redeploy after changing environment variables.

## Model download and browser support

The first text analysis downloads the `Qwen2.5-0.5B-Instruct-q4f16_1-MLC` model (about 945 MB) from the model host and caches it in browser storage. A recent WebGPU-capable Chrome or Edge browser and sufficient device GPU memory are required. This can take time and data; the app shows loading progress. The small model may produce mistakes, especially in nuanced or less-tested languages.

## Storage warning

The prototype JSON store writes to `/tmp` in Vercel functions. That storage is temporary and isolated between instances; user accounts, contacts, and history are not durable. Use a managed database, production authentication, retention/deletion controls, and a security review before storing real user data.

## Routes

`api/[...path].ts` forwards `/api/*` requests to the Express app in `server.ts`. The Vite build serves the frontend from `dist`. `vercel.json` sets the framework, security headers, Content Security Policy, cache headers, and SPA fallback.
