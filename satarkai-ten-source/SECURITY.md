# Security policy

## Supported version

Security reports should target the latest version deployed from the default branch.

## Report a vulnerability

Please do not publish credentials, personal information, exploitable details, or an unredacted scam message in a public issue. Use GitHub's **Report a vulnerability** flow for this repository if it is enabled. If private reporting is unavailable, open a minimal issue asking for a private contact channel without including exploit details.

## Deployment cautions

- Never commit `.env`, API keys, session tokens, or real user data.
- Set a strong `SESSION_SECRET` before enabling authentication routes.
- The JSON store is a local/demo implementation; Vercel `/tmp` is ephemeral and is not suitable for durable user records.
- The text-analysis model runs in the visitor's browser. Treat its output as fallible guidance, not as a security verdict.
