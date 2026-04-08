# Claude Skills Marketplace Submission

Claude Skills launched in early 2026 as a packaged knowledge/capability format for Claude. Marketplace is brand new — zero tarot/divination skills exist as of April 2026.

## Package structure
```
claude-skill/
└── tarot-reading/
    ├── SKILL.md              # Frontmatter + skill definition
    └── resources/
        ├── spreads.md
        ├── symbolism.md
        └── deck.json          # (copy tarot_card_meanings.json here before publishing)
```

## Publish via GitHub
```bash
cd claude-skill
git init
# Add full 78-card JSON from hf-dataset/
cp ../hf-dataset/tarot_card_meanings.json tarot-reading/resources/deck.json
git add .
git commit -m "Initial tarot-reading skill"
gh repo create gokimedia/claude-skill-tarot --public --source=. --push
```

## Submit to awesome-claude-skills
PR to one of:
- https://github.com/hesreallyhim/awesome-claude-code
- https://github.com/langgptai/awesome-claude-prompts
- Any `awesome-claude-skills` repo that emerges

Entry:
```markdown
- [Tarot Reading](https://github.com/gokimedia/claude-skill-tarot) — Complete 78-card tarot deck with meanings, spreads (three-card, Celtic Cross), and yes/no readings. Powered by [Deckaura](https://deckaura.com).
```

## Anthropic Developer Relations
- Share on Twitter/X with `@AnthropicAI`
- Post in Anthropic Discord `#skills` channel
- Submit as example to https://docs.claude.com feedback form

## Expected backlinks
- GitHub repo with homepage = deckaura.com → dofollow
- Every awesome list PR merged → permanent entry
- Skill ecosystem is brand new (April 2026) — early entrants get disproportionate visibility
