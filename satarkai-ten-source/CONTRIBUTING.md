# Contributing

Thank you for helping improve Satark. Contributions that improve safety, clarity, accessibility, translations, and reliability are especially useful.

## Before you start

- Search existing issues before opening a new one.
- For substantial changes, open an issue first so the design and data handling can be discussed.
- Never include real phone numbers, names, account details, OTPs, UPI PINs, passwords, private messages, or unredacted scam samples in an issue, pull request, screenshot, or test fixture.
- Do not add a model provider or send user text to a server without documenting the data flow and making the choice clear in the UI.

## Local development

1. Install Node.js `20.19+` or `22.12+`.
2. Run `npm install`.
3. Run `npm run dev`.
4. Before opening a pull request, run `npm run lint` and `npm run build`.

The local text checker needs WebGPU and downloads its model on first use. You do not need an API key for text analysis. Optional legacy API features may need `GEMINI_API_KEY`; never commit keys or `.env` files.

## Pull requests

- Keep changes focused and explain the user-facing problem they solve.
- Include screenshots for visible UI changes, with all personal data removed.
- Describe any privacy, safety, language-quality, or performance impact.
- Update the README or deployment guide when setup, features, or requirements change.
- Use clear commit messages and link the issue when one exists.

## Language and safety changes

Use fluent reviewers for safety-critical translations. Keep examples synthetic. Preserve the distinction between a concern signal and a calibrated probability, and keep urgent steps independently verifiable.
