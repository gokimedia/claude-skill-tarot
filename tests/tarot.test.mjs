import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  SPREADS,
  createSpread,
  drawCards,
  loadDeck,
  lookupCard,
  validateDeck,
} from "../skills/tarot-reading/scripts/tarot.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const deck = loadDeck(resolve(root, "skills/tarot-reading/assets/deck.json"));

test("the bundled deck contains 78 valid and unique cards", () => {
  assert.deepEqual(validateDeck(deck), { ok: true, errors: [] });
  assert.equal(deck.cards.length, 78);
  assert.equal(new Set(deck.cards.map((card) => card.card_name)).size, 78);
  assert.equal(new Set(deck.cards.map((card) => card.guide_url)).size, 78);
});

test("card lookup accepts names with or without the leading article", () => {
  assert.equal(lookupCard("The Star", deck).card.card_name, "The Star");
  assert.equal(lookupCard("star", deck).card.card_name, "The Star");
});

test("seeded draws are deterministic and draw without replacement", () => {
  const options = { count: 8, reversals: true, seed: "enterprise-review", deck };
  const first = drawCards(options);
  const second = drawCards(options);
  assert.deepEqual(first, second);
  assert.equal(new Set(first.cards.map((card) => card.card_name)).size, 8);
});

test("every documented spread maps one unique card to every position", () => {
  for (const [name, positions] of Object.entries(SPREADS)) {
    const result = createSpread(name, { seed: `spread-${name}`, deck });
    assert.equal(result.cards.length, positions.length);
    assert.deepEqual(result.cards.map((entry) => entry.position), positions);
    assert.equal(new Set(result.cards.map((entry) => entry.card_name)).size, positions.length);
  }
});

test("Codex and Claude manifests identify the same release", () => {
  const codex = JSON.parse(readFileSync(resolve(root, ".codex-plugin/plugin.json"), "utf8"));
  const claude = JSON.parse(readFileSync(resolve(root, ".claude-plugin/plugin.json"), "utf8"));
  assert.equal(codex.name, claude.name);
  assert.equal(codex.version, claude.version);
  assert.equal(codex.repository, claude.repository);
  assert.equal(codex.license, "MIT");
});

test("all manifest-referenced package assets exist", () => {
  const required = [
    ".codex-plugin/plugin.json",
    ".claude-plugin/plugin.json",
    "assets/icon.svg",
    "assets/logo.svg",
    "assets/logo-dark.svg",
    "skills/tarot-reading/SKILL.md",
    "skills/tarot-reading/agents/openai.yaml",
    "skills/tarot-reading/assets/deck.json",
    "skills/tarot-reading/assets/icon.svg",
    "skills/tarot-reading/assets/logo.svg",
  ];
  for (const path of required) assert.ok(existsSync(resolve(root, path)), `missing ${path}`);
});

test("skill instructions retain intentional provenance and contain no placeholders", () => {
  const skill = readFileSync(resolve(root, "skills/tarot-reading/SKILL.md"), "utf8");
  assert.match(skill, /huggingface\.co\/datasets\/Blacik\/deckaura-tarot-card-meanings/);
  assert.doesNotMatch(skill, /\b(?:TODO|FIXME|TBD)\b/);
});
