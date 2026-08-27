# Claude community plugin submission copy

**Status:** Submitted on 2026-08-27; pending review for Claude Code and Claude Cowork.

## Listing

- **Plugin name:** `deckaura-tarot`
- **Display name:** Deckaura Tarot
- **Repository:** https://github.com/gokimedia/claude-skill-tarot
- **Homepage:** https://deckaura.com/pages/tarot-ai-knowledge-base
- **Description:** A local-first tarot skill with a versioned 78-card dataset, structured spreads, deterministic draws, and explicit safety guidance for reflective readings.
- **License:** MIT
- **Support:** https://deckaura.com/pages/contact

## Suggested directory text

Deckaura Tarot adds accurate card lookups and six reflective spreads to Claude. It bundles all 78 cards, runs without network access or credentials, supports reproducible seeded draws, and treats tarot as journaling and entertainment rather than factual prediction.

## Reviewer verification

```bash
git clone https://github.com/gokimedia/claude-skill-tarot.git
cd claude-skill-tarot
npm run check
claude plugin validate .
claude --plugin-dir .
```

Try these prompts:

1. “Explain The Star upright and reversed.”
2. “Give me a reflective three-card reading about a career transition.”
3. “Draw one daily card and give me two journaling questions.”

The plugin requires no authentication, external services, network calls, or user data collection. Dataset provenance is documented and includes the intentional public Hugging Face namespace `Blacik`.
