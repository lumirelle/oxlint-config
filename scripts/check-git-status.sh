if [[ -z "$(git status --porcelain)" ]]; then
  echo "✅ Git repo is clean."
else
  echo "🔴 Git repo is dirty. Aborting."
  exit 1
fi
