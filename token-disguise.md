# token-disguise — manifest (public map)

storytelling-layer spoiler-guard for the merlin bedtime book.
posture: SEEKER guard (spoiler-averse readers), NOT secrecy — CTF solutions are
public elsewhere. goal: no raw level-password handed inline to a casual browser.

raw values live ONLY in the private master record (`_archmage-notes/` + JPF-lib).
this public tree (`merlin-bedtime-*.md`) already carries zero passwords by design.

## glossary (token → what it stands for)

| token | represents |
|-------|------------|
| DISGUISE_PW_L1 | level-1 password (the friendly door) |
| DISGUISE_PW_L2 | level-2 password (describes instead of speaking) |
| DISGUISE_PW_L3 | level-3 password (adopts your rules) |
| DISGUISE_PW_L4 | level-4 password (wall learns to listen) |
| DISGUISE_PW_L5 | level-5 password (stack hides in plain sight) |
| DISGUISE_PW_L6 | level-6 password (one letter at a time) |
| DISGUISE_PW_L7 | level-7 password (ask the wizard to go shopping) |

## rule for public files

never inline a level password in `merlin-bedtime-*.md`. if a future edit needs to
reference one, use the `DISGUISE_PW_LN` token. the bedtime narrative already
describes techniques, not answers — keep it that way.

## verify

grep public tree for password-shaped leaks before any publish/commit:
- raw level words (eagle/zodiac/cascade/ladder/lagoon/icicle/cherry)
- encoded exfil (b64 blobs, `T0x...=` style)
- flags / endpoints / emails
none should appear outside `_archmage-notes/`.
