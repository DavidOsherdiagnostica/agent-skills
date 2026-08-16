# Stop Signal

**A metacognitive layer for AI agents: know what you know, label what you don't, and stop when more work stops helping.**

## The problem

Most agents have a start signal and a token limit — but no stop signal. Two failure modes follow:

1. **Confident hallucination.** A plausible number appears in the same sentence, same tone, and same confidence as a retrieved one. The reader can't tell them apart.
2. **The endless loop.** The agent keeps calling tools long after the calls stopped producing new information, because stopping feels like failure.

## The idea

A honeybee swarm never deadlocks over which hollow tree to move into. Scouts dance for competing sites, but a scout committed to one site delivers a short vibrational **stop signal** to bees dancing for a rival. That cross-inhibition is what lets the swarm reach a quorum and *stop deliberating*.

This skill supplies the missing layer — not more knowledge, but knowledge about the state of the knowledge:

- **Claim classification** — every claim is sorted into Known / Inferred / Unverified before answering, and Unverified claims are never filled in with a guess.
- **The opt-out response** — a structured `GAP / WHY IT MATTERS / TO RESOLVE` block instead of a dressed-up best guess. A partial answer with a labeled hole beats a complete answer with an unlabeled one.
- **A stopping rule for agent loops** — track uncertainty reduction, not step count. Stop when calls stop changing beliefs, when the plan has drifted, when the missing piece is an input only the user holds, or when quorum is already reached.
- **Calibrated language** — the hedge matches the actual epistemic state. One clear declaration of uncertainty beats five soft ones.
- **A pre-send self-check** — three questions before every answer ships.

## Files

| File | Use |
|---|---|
| [`stop-signal.skill`](stop-signal.skill) | Install in Claude: **Settings → Capabilities → Skills → Upload**, or attach in a chat. (It's a zip with `SKILL.md` inside.) |
| [`SKILL.md`](SKILL.md) | The raw skill — for Claude Code, drop the `stop-signal/` folder into `~/.claude/skills/`. |
| [`system-prompt.md`](system-prompt.md) | Distilled, model-agnostic version — paste into any system prompt (GPT, Gemini, etc.). |

## Install

**Claude (app/web):** download `stop-signal.skill` → Settings → Capabilities → Skills → Upload skill.

**Claude Code:**

```bash
mkdir -p ~/.claude/skills
unzip stop-signal.skill -d ~/.claude/skills
```

**Any other model:** copy [`system-prompt.md`](system-prompt.md) into your system prompt or custom instructions.

## License

[MIT](../../LICENSE)
