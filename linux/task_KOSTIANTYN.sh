#!/bin/bash
#
CURRENT_DATE=$(date +"%d.%m.%y")
cd "$(dirname "$0")"
for i in {1..10}
do
touch "${i}_${CURRENT_DATE}"
done
