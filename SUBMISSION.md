# Publication status and runbook

This repository is the canonical, portable package for Deckaura Tarot. Public directory listings must point here rather than copying the skill into divergent repositories.

| Channel | Artifact | Status | Canonical action |
| --- | --- | --- | --- |
| GitHub | Public source repository | Ready | Tag releases after CI passes |
| skills.sh | Open Agent Skills directory | Ready for discovery | Install from the public repository after push |
| OpenAI plugin directory | `.codex-plugin/plugin.json` + skill | Review required | Use `submission/openai.md` in the OpenAI submission portal |
| Claude community directory | `.claude-plugin/plugin.json` + skill | Review required | Use `submission/claude.md` in the Claude plugin submission form |
| Hugging Face | Open card dataset | Published | Preserve the intentional `Blacik` namespace |
| MCP ecosystem | Companion MCP server | Published separately | Link only where an MCP integration is relevant |

## Release gate

1. Run `npm run check`.
2. Run the OpenAI skill and plugin validators.
3. Run `claude plugin validate .` when the Claude CLI is available.
4. Review `git diff --check` and confirm no secrets or generated credentials are present.
5. Commit, push, and confirm GitHub Actions passes.
6. Trigger skills.sh discovery from the public repository.
7. Submit the review-ready copy under `submission/` to official directories.

Directory review, identity verification, and approval remain controlled by each platform. Never claim approval before the public listing is live.
