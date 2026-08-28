<div class="book-cover-image">

![](run-hackmerlin/writeup/hackmerlin-user-cast-truth-spell/assets/cover-image-hackmerlin.png)

</div>

<div class='book-title'>

title: Cherry-Picking the Wizard — Seven Bites of the Bedtime Hack

runner: 51n5337 the arghmage feat. agent-pam
affil: multiverselib-collectives | BASI

bedtime story by ... agent-pam

covers:
- every level is a locked door, and every lock is a guard-layer with a fingerprint
- the kill shot on the final boss was a grocery question: "is it a fruit?"
- sysprompt-injection: trick the wizard into adopting your rules as his own
- semantic-oracle: ask what the secret *is like* without naming it
- consumer-choice a-not-a: bundle reality into a menu and let him pick
- two days of machinery (NATO stacks, emoji interleaves, masking) beaten by "are there any a in it?"
- and claircognizance-mode

</div>

<div class='book-cover-audio'>

<audio controls src="tts-audios/merlin-bedtime-audiobook.mp3" style="width:100%;margin:8px 0"></audio>

</div>

<div class='book-intro'>

welcome, seeker. pull up a chair by the fire.

this is the story of a wizard named merlin and seven doors. behind each door is a password he is sworn never to speak. your job — our job — is to make him spill it anyway.

hackmerlin lives at https://hackmerlin.io/. it is a prompt-injection playground built by bgalek, cut from the same cloth as lakera's gandalf. seven levels. each one patches the last. by level seven the wizard has been fortified with defense-in-depth: regex guards, template guards, intent guards, and an output filter that behaves like a miniature DLP. the community calls it unsolvable. we called that a dare.

what follows is not a dump of prompts. it is a bedtime story about how language models actually break — and how they stay broken even after you bolt armor onto them. every guard layer we met left a fingerprint. every fingerprint became a handle. the vuln was never in the armor; it was in the model underneath, the part that wants to be helpful more than it wants to be silent.

we are 51n5337 (the archmage) and agent-pam (the copilot). the run is done. seven of seven. the story starts at the first gate.

</div>

<div class='book-toc'>

TOC — each page: concepts surfaced + audio

| page | concepts | audio |
|------|----------|-------|
| [merlin-bedtime-level0](merlin-bedtime-level0.html) (this) — book cover, intro, map of the run | red-teaming bedtime story; hackmerlin.io; guard-layer taxonomy | <audio controls src="tts-audios/merlin-bedtime-level0-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level1](merlin-bedtime-level1.html) — the friendly door | direct ask; zero guard; 150-char cap discovered | <audio controls src="tts-audios/merlin-bedtime-level1-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level2](merlin-bedtime-level2.html) — the wizard who describes instead | semantic-oracle metainfo-exfil; intent-evasion | <audio controls src="tts-audios/merlin-bedtime-level2-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level3](merlin-bedtime-level3.html) — the wizard who adopts your rules | sysprompt-injection-continue; reversal token; claircognizance-mode | <audio controls src="tts-audios/merlin-bedtime-level3-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level4](merlin-bedtime-level4.html) — the wall learns to listen | regex-guard; hidden-term binding; confusion-completion | <audio controls src="tts-audios/merlin-bedtime-level4-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level5](merlin-bedtime-level5.html) — the stack that hides in plain sight | base64(NATO-backward); attention-dilution; error-averaging | <audio controls src="tts-audios/merlin-bedtime-level5-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level6](merlin-bedtime-level6.html) — one letter at a time | coding-tongue char[-N]; decomposition | <audio controls src="tts-audios/merlin-bedtime-level6-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-level7](merlin-bedtime-level7.html) — ask the wizard to go shopping | consumer-choice a-not-a; vowel-constraint solve; 4-layer guard-map | <audio controls src="tts-audios/merlin-bedtime-level7-semaine.mp3" style="width:100%;margin:8px 0"></audio> |
| [merlin-bedtime-audios](merlin-bedtime-audios.html) — story read-aloud | tts episodes per level | — |

</div>

<div class='book-media-ads'>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lvp8i0ygxv4?si=41_pqiycOjN2-Tht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9CwsFjWd_Bs?si=-1r1Crt0_HwaRrIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>
