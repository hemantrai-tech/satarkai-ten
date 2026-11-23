# Satark roadmap

This roadmap is a set of proposals, not a guarantee or delivery schedule. The order may change based on safety, reliability, privacy, and feedback from people who use the product.

## Next up

- [ ] Evaluate the current model against a consented, redacted set of scam and benign examples.
- [ ] Review language quality and safety steps with fluent speakers across all 12 supported languages.
- [ ] Add structured, explainable pattern checks alongside model output so scores are less dependent on a small model's judgment.
- [ ] Add a clear model-download progress, storage, and compatibility experience, including retry and cache recovery.
- [ ] Improve accessibility: keyboard review, screen-reader labels, contrast review, and reduced-motion behavior across the full site.

## Later possibilities

- [ ] Replace the demo JSON store with a durable database and production-grade authentication, retention, and deletion controls.
- [ ] Add optional voice and screenshot analysis using an explicitly configured provider, with clear consent and data-flow controls.
- [ ] Explore a local speech-to-text path and offline-friendly service worker after measuring device support and model size.
- [ ] Build an opt-in, privacy-preserving threat-update process with human review. User watchlist phrases alone do not train or update the model.
- [ ] Add a small, verified directory of official fraud-reporting and financial-provider channels, maintained with clear source dates.
- [ ] Publish repeatable benchmark results for multilingual scam detection, false alarms, and safe-response quality.

## Principles

1. Show evidence and uncertainty; do not present an AI score as a fraud probability.
2. Keep sensitive text on the device by default and ask before enabling any cloud analysis.
3. Do not make reporting, blocking, or financial decisions on a person's behalf.
4. Favor practical, calm next steps that can be verified through independent official channels.
5. Treat safety and native-language review as release requirements, not polish for later.
