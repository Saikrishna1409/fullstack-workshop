#!/bin/bash
set -e
set -u
set -o pipefail
DIR=$1

if [ -z "$DIR" ] || [ ! -d "$DIR" ]; then
    echo "Usage: ./file-organizer.sh /c/users/HP/OneDrive/Desktop/devtraining/git-exercise"
    exit 1
fi

cd "$DIR" || exit

declare -A count

for file in *; do

    [ -f "$file" ] || continue


    if [[ "$file" == *.* ]]; then
        ext="${file##*.}"
    else
        ext="others"
    fi

    mkdir -p "$ext"

    mv "$file" "$ext/"

    count[$ext]=$((count[$ext] + 1))
done

echo "----- Summary -----"
for ext in "${!count[@]}"; do
    echo "Organized ${count[$ext]} .$ext files"
done
