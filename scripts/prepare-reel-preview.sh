#!/usr/bin/env bash
set -euo pipefail

# Generate a lightweight 4-second muted H.264 MP4 preview + JPEG poster
# for an authorized JKBF Instagram Reel video file.
#
# Usage:
#   ./scripts/prepare-reel-preview.sh <input-video.mp4> <output-slug>
#
# Example:
#   ./scripts/prepare-reel-preview.sh ~/Downloads/sma-open-reel.mp4 sma-open-reel

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <input-video-file> <output-slug>" >&2
  exit 1
fi

INPUT_VIDEO="$1"
SLUG="$2"
VIDEO_DIR="public/media/reels"
POSTER_DIR="public/images/whats-new"

mkdir -p "$VIDEO_DIR" "$POSTER_DIR"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is not installed. Install with: brew install ffmpeg" >&2
  exit 1
fi

OUT_MP4="$VIDEO_DIR/${SLUG}-preview.mp4"
OUT_POSTER="$POSTER_DIR/${SLUG}-poster.jpg"

# Extract first 4 seconds, strip audio (-an), scale max width 720px, even dimensions, faststart
ffmpeg -y -i "$INPUT_VIDEO" \
  -ss 0 -t 4 \
  -an \
  -vf "scale='min(720,iw)':-2" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUT_MP4"

# Extract high-contrast first frame as poster image
ffmpeg -y -i "$INPUT_VIDEO" \
  -ss 0.5 -vframes 1 \
  -vf "scale='min(960,iw)':-2" \
  -q:v 3 \
  "$OUT_POSTER"

echo "Generated preview video: /$OUT_MP4"
echo "Generated poster cover:  /$OUT_POSTER"

