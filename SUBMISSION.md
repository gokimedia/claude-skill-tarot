# Publication status and runbook

This repository is the canonical, portable package for Deckaura Tarot. Public directory listings must point here rather than copying the skill into divergent repositories.

| Channel | Artifact | Status | Canonical action |
| --- | --- | --- | --- |
| GitHub | Public source repository | Published as `v1.0.0` | Release bundle and CI are live |
| skills.sh | Open Agent Skills directory | Published | Canonical skill page is live and passed Snyk scanning |
| OpenAI plugin directory | `.codex-plugin/plugin.json` + skill | Identity verification required | Complete developer or business verification, then use `submission/openai.md` |
| Claude community directory | `.claude-plugin/plugin.json` + skill | Submitted 2026-08-27 | Pending directory review |
| ComposioHQ Awesome Claude Skills | Canonical GitHub repository link | PR opened 2026-08-28; checks passing | Await maintainer review of PR #1749 |
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

## Live records

- GitHub release: https://github.com/gokimedia/claude-skill-tarot/releases/tag/v1.0.0
- skills.sh: https://www.skills.sh/gokimedia/claude-skill-tarot/tarot-reading
- Claude submission status: submitted and pending review as of 2026-08-27
- OpenAI submission status: the selected organization requires individual or business identity verification before a draft can be created
- ComposioHQ Awesome Claude Skills PR: https://github.com/ComposioHQ/awesome-claude-skills/pull/1749

## Deferred community directories

- `skillsdir.dev`: do not submit while its published GitHub repository and issue-template target return 404.
- VoltAgent Awesome Agent Skills: wait for real community usage; its contribution rules reject newly created skills without adoption.
- travisvn Awesome Claude Skills: wait until the repository has at least 10 genuine stars and submit manually, as required by its contribution rules.
