#!/bin/sh

echo "Initialize Forest Config Files..."

lumber update
printf "Kicking Off %s\n..." "$@"
exec "$@"