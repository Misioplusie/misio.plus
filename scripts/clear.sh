#!/usr/bin/sh

echo "Clearing the build enviornment..."

rm -rf scripts/
rm -rf scss/
rm .editorconfig
rm .gitignore
rm LICENSE
rm package-lock.json
rm package.json

echo "All clear!"
