# Deckaura Tarot Agent Skill

<p align="center">
  <a href="https://deckaura.com/pages/tarot-ai-knowledge-base">
    <img src="assets/logo.svg" alt="Deckaura" width="320">
  </a>
</p>

<p align="center">
  A local-first, open-data tarot skill for reflective card lookups and structured spreads.
</p>

<p align="center">
  <a href="https://github.com/gokimedia/claude-skill-tarot/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/gokimedia/claude-skill-tarot/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://skills.sh/gokimedia/claude-skill-tarot/tarot-reading"><img alt="skills.sh" src="https://skills.sh/b/gokimedia/claude-skill-tarot"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-2D154D.svg"></a>
</p>

Deckaura Tarot gives compatible AI agents a complete 78-card reference, deterministic or random draws, and six documented spreads. It is packaged for the open Agent Skills ecosystem, Codex plugins, and Claude plugins from a single versioned source.

## What it provides

- Upright, reversed, love, career, yes/no, elemental, zodiac, and guide data for all 78 cards.
- Daily, three-card, decision, relationship, Celtic Cross, and symbolic yes/no spreads.
- A dependency-free Node.js CLI for validation, lookup, drawing, and reproducible seeded spreads.
- Local-only operation: the skill sends no user input or reading data to Deckaura or any third party.
- Safety framing that treats tarot as reflection and entertainment, not factual prediction or professional advice.

## Install

Install the skill with the open skills CLI:

```bash
npx skills add gokimedia/claude-skill-tarot --skill tarot-reading
```

The same repository can be inspected or loaded locally by plugin-compatible clients. For Claude Code development:

```bash
git clone https://github.com/gokimedia/claude-skill-tarot.git
cd claude-skill-tarot
claude --plugin-dir .
```

Public directory availability depends on each platform's review process. The repository remains directly installable through the open Agent Skills workflow.

## Example prompts

- “Give me a reflective three-card tarot reading about a career transition.”
- “Explain The Star upright and reversed, then give me two journaling questions.”
- “Draw one card as a daily reflection prompt.”

## CLI and reproducibility

Node.js 18 or newer is sufficient; there are no runtime dependencies.

```bash
node skills/tarot-reading/scripts/tarot.mjs lookup "The Star"
node skills/tarot-reading/scripts/tarot.mjs draw --count 3 --reversals true --seed demo-2026
node skills/tarot-reading/scripts/tarot.mjs spread celtic-cross --seed demo-2026
npm run check
```

Supplying `--seed` makes a draw reproducible. Omitting it uses cryptographically secure operating-system randomness. Cards are drawn without replacement.

## Data and provenance

The bundled snapshot is derived from Deckaura's open tarot knowledge resources:

- [Deckaura Open Data & Developer Resources](https://deckaura.com/pages/ai-data-sources)
- [Deckaura Tarot AI Knowledge Base](https://deckaura.com/pages/tarot-ai-knowledge-base)
- [Hugging Face dataset by Blacik](https://huggingface.co/datasets/Blacik/deckaura-tarot-card-meanings)
- [Permanent Zenodo DOI](https://doi.org/10.5281/zenodo.19475329)
- [Live dataset explorer](https://gokimedia.github.io/tarot-dataset-explorer/)
- [Developer documentation](https://gokimedia.github.io/deckaura-developer-docs/)

Every card also contains a canonical HTTPS link to its corresponding guide on [Deckaura](https://deckaura.com). Detailed provenance and update rules are documented in [data-provenance.md](skills/tarot-reading/references/data-provenance.md).

## Related Deckaura integrations

- [Claude Code artifact](https://claude.ai/code/artifact/1be108b4-1a73-4202-a7bd-a2ff8499667c) — a shareable Deckaura implementation artifact.
- [Deckaura Tarot MCP server on npm](https://www.npmjs.com/package/@deckaura/tarot-mcp-server) — the companion option for clients that prefer MCP tools.
- [Official MCP Registry record](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.gokimedia%2Ftarot-mcp-server) — registry metadata for the companion server.

## Package structure

```text
.claude-plugin/plugin.json       Claude plugin manifest
.codex-plugin/plugin.json        OpenAI/Codex plugin manifest
skills/tarot-reading/SKILL.md    Portable skill instructions
skills/tarot-reading/assets/     Versioned 78-card dataset and icons
skills/tarot-reading/scripts/    Dependency-free local CLI
skills/tarot-reading/references/ Reading, safety, spread, and provenance docs
submission/                      Review-ready directory submission copy
tests/                           Data and package integrity tests
```

## Responsible use

This project is designed for reflection, journaling, and entertainment. It must not be presented as certainty, diagnosis, legal or financial advice, crisis support, or a substitute for qualified professional help. See the [safety and quality policy](skills/tarot-reading/references/safety-and-quality.md).

For privacy, terms, and help, see [Deckaura Privacy Policy](https://deckaura.com/pages/deckaura-privacy-policy), [Terms of Service](https://deckaura.com/pages/terms-of-service), and [Support](SUPPORT.md).

## License

Released under the [MIT License](LICENSE). Dataset provenance and canonical guide URLs are retained so downstream users can verify the source.
