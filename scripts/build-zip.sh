#!/usr/bin/env bash
# Rebuild assets/zuper-design-system.zip from repo sources so the download can never drift.
# Bundle = bundle/ (Claude Design sources that live only in the bundle)
#        + CLAUDE.md, claude-design-brief.md, slides/, templates/ (repo canonical copies)
#        + the shared assets listed below (repo canonical copies).
# Run from anywhere: scripts/build-zip.sh
set -euo pipefail
cd "$(dirname "$0")/.."

SHARED_ASSETS=(
  assets/logos/zuper-horizontal-gray.png
  assets/logos/zuper-horizontal-inverted.png
  assets/logos/zuper-horizontal-white.png
  assets/logos/zuper-horizontal.png
  assets/logos/zuper-logomark-inverted.png
  assets/logos/zuper-logomark-white.png
  assets/logos/zuper-logomark.png
  assets/logos/zuper-vertical-white.png
  assets/logos/zuper-vertical.png
  assets/backgrounds/zuper-breaker-bg.jpg
  assets/backgrounds/zuper-glass-bg.jpg
  assets/backgrounds/zuper-sense-bg.jpg
  assets/mini-humans/carrying-gear.gif
  assets/mini-humans/crew.gif
  assets/mini-humans/on-the-job.gif
  assets/mini-humans/on-the-ladder.gif
  assets/mini-humans/on-the-tools.gif
  assets/mini-humans/reaching-up.gif
  assets/mini-humans/ready-to-work.gif
  assets/mini-humans/waving.gif
  assets/shows/speaker-b.png
  assets/shows/speaker-c.png
)

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

rsync -a bundle/ "$STAGE/"
cp CLAUDE.md claude-design-brief.md "$STAGE/"
rsync -a slides "$STAGE/"
rsync -a templates "$STAGE/"
for f in "${SHARED_ASSETS[@]}"; do
  mkdir -p "$STAGE/$(dirname "$f")"
  cp "$f" "$STAGE/$f"
done

OUT="$PWD/assets/zuper-design-system.zip"
rm -f "$OUT"
# Fixed timestamps make the zip deterministic: rebuilding without source changes
# yields a byte-identical file, so git sees no churn.
find "$STAGE" -exec touch -t 202601010000 {} +
(cd "$STAGE" && find . -type f ! -name '.DS_Store' ! -path './.*' | sort | zip -qX "$OUT" -@)

# Package the Claude Agent Skill (skills/zuper-brand/ + bundled assets -> assets/zuper-brand-skill.zip).
# Assets are injected at build time from the repo's canonical copies so nothing is duplicated in git.
SKILL_ASSETS=(
  assets/logos/zuper-horizontal.svg assets/logos/zuper-horizontal.png
  assets/logos/zuper-horizontal-white.svg assets/logos/zuper-horizontal-white.png
  assets/logos/zuper-vertical.svg assets/logos/zuper-vertical.png
  assets/logos/zuper-logomark.svg assets/logos/zuper-logomark.png
  assets/logos/zuper-logomark-white.svg assets/logos/zuper-logomark-white.png
  assets/mini-humans/carrying-gear.gif assets/mini-humans/crew.gif
  assets/mini-humans/on-the-job.gif assets/mini-humans/on-the-ladder.gif
  assets/mini-humans/on-the-tools.gif assets/mini-humans/reaching-up.gif
  assets/mini-humans/ready-to-work.gif assets/mini-humans/waving.gif
  assets/agents/business-analyst.png assets/agents/field-technician.png
  assets/agents/front-office.png assets/agents/review-analyser.png
  assets/agents/sales-coach.png assets/agents/weather.png
  assets/backgrounds/zuper-glass-bg.jpg assets/backgrounds/zuper-sense-bg.jpg
  assets/backgrounds/zuper-breaker-bg.jpg
  assets/email/zuper-vertical-tight.png assets/email/zuper-emailer-sense.png
  assets/email/zuper-emailer-trades.png
)
SKILL_OUT="$PWD/assets/zuper-brand-skill.zip"
SKILL_STAGE="$(mktemp -d)"
rsync -a skills/zuper-brand "$SKILL_STAGE/"
for f in "${SKILL_ASSETS[@]}"; do
  mkdir -p "$SKILL_STAGE/zuper-brand/$(dirname "$f")"
  cp "$f" "$SKILL_STAGE/zuper-brand/$f"
done
rm -f "$SKILL_OUT"
find "$SKILL_STAGE" -exec touch -t 202601010000 {} +
(cd "$SKILL_STAGE" && find zuper-brand -type f ! -name '.DS_Store' | sort | zip -qX "$SKILL_OUT" -@)
rm -rf "$SKILL_STAGE"

# Regenerate llms-full.txt from the same canonical sources (llms.txt is the hand-written index).
{
  echo "# Zuper Design Language System — full spec"
  echo
  cat claude-design-brief.md
  echo
  echo "---"
  echo
  cat CLAUDE.md
} > llms-full.txt

echo "Built $OUT ($(du -h "$OUT" | cut -f1)) — $(unzip -l "$OUT" | tail -1 | awk '{print $2}') files"
echo "Rebuilt llms-full.txt"
