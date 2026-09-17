#!/bin/zsh
# Kullanım: ./bump.sh 1.4  — sürümü app.js, version.txt ve tüm HTML'lerdeki ?v= etiketlerinde günceller
set -e
[[ -z "$1" ]] && { echo "kullanım: ./bump.sh <sürüm>"; exit 1; }
V="$1"; D="$(dirname "$0")/docs"
sed -i '' "s|var VERSION = \"[0-9.]*\";|var VERSION = \"$V\";|" "$D/app.js"
printf '%s' "$V" > "$D/version.txt"
for f in "$D"/*.html; do
  sed -i '' -E "s/(styles\.css|app\.js|exercises\.js|diagrams\.js)(\?v=[0-9.]*)?\"/\1?v=$V\"/g" "$f"
done
echo "sürüm $V: app.js, version.txt ve $(ls "$D"/*.html | wc -l | tr -d ' ') HTML güncellendi"
