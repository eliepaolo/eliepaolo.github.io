#!/bin/bash

QUALITY=80

echo "🚀 Smart Optimizer + Cleaner Starting..."

slugify() {
  echo "$1" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g' \
  | sed -E 's/^-+|-+$//g'
}

process_image() {
  file="$1"
  dir="$2"
  sizes=("${@:3}")

  filename=$(basename "$file")
  name="${filename%.*}"
  extension="${filename##*.}"
  clean_name=$(slugify "$name")

  created_any=false

  for size in "${sizes[@]}"
  do
    output="$dir/${clean_name}-${size}.webp"

    if [ -f "$output" ]; then
      echo "   ⏭ Exists: $output"
    else
      echo "   🖼 Creating: $output"
      magick "$file" -auto-orient -resize "${size}x>" -strip -quality $QUALITY webp:"$output"
      created_any=true
    fi
  done

  # Se almeno una webp esiste → elimina originale
  first_output="$dir/${clean_name}-${sizes[0]}.webp"
  if [ -f "$first_output" ]; then
    echo "   🗑 Removing original: $file"
    rm "$file"
  fi
}

# HERO → 800 1600 2400
find ./hero -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read file
do
  echo "🖼 HERO: $file"
  process_image "$file" "$(dirname "$file")" 800 1600 2400
done

# CONTENT → 1400
find ./content -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read file
do
  echo "🖼 CONTENT: $file"
  process_image "$file" "$(dirname "$file")" 1400
done

# GALLERY → 1200
find ./gallery -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read file
do
  echo "🖼 GALLERY: $file"
  process_image "$file" "$(dirname "$file")" 1200
done

# GRAPHICS → 1000
find ./graphics -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read file
do
  echo "🖼 GRAPHICS: $file"
  process_image "$file" "$(dirname "$file")" 1000
done

echo "🎉 Optimization + Cleanup Complete!"