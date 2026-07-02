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
(cd "$STAGE" && zip -rqX "$OUT" . -x '.*' -x '*/.DS_Store')

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
