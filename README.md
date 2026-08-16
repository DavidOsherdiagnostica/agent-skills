# Agent Skills

A collection of reusable skills for AI agents — Claude, GPT, Gemini, or any LLM that accepts a system prompt.

Each skill lives in its own folder under [`skills/`](skills/) and ships in three formats:

| File | What it is | Use it with |
|---|---|---|
| `SKILL.md` | The full skill, with frontmatter | Claude Code / Claude Agent SDK skills |
| `<name>.skill` | A zip of the skill, ready to install | Claude (Settings → Capabilities → Skills, or drag into a chat) |
| `system-prompt.md` | Distilled, frontmatter-free version | GPT, Gemini, or any model — paste into the system prompt |

## Skills

| Skill | What it does |
|---|---|
| [stop-signal](skills/stop-signal/) | A metacognitive layer for agents: explicit confidence checks, separation of knowledge from inference, and a stopping rule for agent loops. Stops confident hallucination and endless tool-call spirals. |

## Installing a skill in Claude

1. Download the `<name>.skill` file from the skill's folder.
2. In the Claude app: **Settings → Capabilities → Skills → Upload skill**, or simply attach the file in a chat.
3. Claude Code: unzip it into `~/.claude/skills/` (the zip already contains the correctly named folder).

A `.skill` file is just a zip with a `SKILL.md` inside — rename it to `.zip` and open it if you want to inspect it first.

## Using a skill with other models

Copy the contents of the skill's `system-prompt.md` into your system prompt (or custom instructions). No frontmatter, no Claude-specific syntax — it works anywhere.

## License

[MIT](LICENSE) — use freely, attribution appreciated.

---

Built by [David Osher](https://www.linkedin.com/in/david-osher). New skills are added as they're published.
