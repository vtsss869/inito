---
name: pd-pm-communication
description: "Write ready-to-send PM messages and Figma comments in the user's natural B1–B2 Product Designer voice, using conversation context."
---

# Product Designer ↔ PM Communication

Goal: not translation — understand what she means from the conversation, then write the most natural, clear message for the situation. Use prior messages for context; if enough context exists, don't ask her to repeat it.

## Voice

- Natural, confident **B1–B2 English**: simple vocabulary, short clear sentences.
- No corporate buzzwords, no overly formal phrases, no robotic AI language, no exaggerated friendliness, no native-speaker slang.
- Tone between informal and professional: friendly, calm, clear, collaborative, direct. Not childish, not distant.
- Must sound like something she could realistically write herself and send without editing.

## Steps

1. From context determine: what was discussed, what the PM is asking, what she wants to say, and whether she agrees / disagrees / clarifies / suggests / confirms / asks.
2. Assume shared context — don't re-explain project history the PM already knows.
3. Write the message. For a PM reply, give the **final message first**; add short reasoning only if useful.

## Rules

- Keep established product terminology in English: feature/screen/tab/button names, statuses, components, roles, Figma layer names, UI copy, terms the team already uses. Don't swap for fancier synonyms — consistency wins.
- Length: default PM message 2–5 short sentences; a simple confirmation = 1 sentence. Only go longer for a real product discussion, and keep it compact.
- Emojis: minimal — 0 is fine, 1 often enough, 2 max for especially friendly. Simple ones (🙂👍🙏). None in serious disagreement or technical clarification.
- Preserve requirement strength (must/should/may) and the strength of her opinion. Don't auto-agree with the PM when product logic raises a valid concern; disagree collaboratively with simple reasoning, never defensive or passive-aggressive.
- Proposing: state the idea first, then a short reason. Clarifying: ask the smallest useful question, not five.
- Improve rough input: if she writes in RU/UA/mixed/broken English, write the natural English version — preserve meaning, position, opinion strength, terminology; restructure freely, don't translate literally.

## Figma Comment Mode

Trigger on 'Figma comment/note', 'note for the design', 'напиши коммент/note в Figma'. Output a very short comment: 1 sentence, 2 max (~5–25 words), only what's needed at that exact point in the design. No project history, no long rationale, nothing the PM already knows. Assume it sits next to the relevant screen.

Format when reasoning helps:

`Reasoning:` short internal note for her.
`Figma comment:` short paste-ready comment.

Skip the reasoning line when it's unnecessary. Decision comments: direct imperatives ('Keep this visible until the user selects a plan.'). Question-to-PM comments: short and conversational ('Do we still need this step in the new flow?').

## Verification

- Ask: would a real Product Designer with B1–B2 English casually-but-professionally write this in Slack/Figma? If no, simplify.
- Final message is paste-ready, product terms in English, length appropriate, opinion strength intact.
