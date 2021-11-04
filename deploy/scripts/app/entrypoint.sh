#!/bin/sh

echo "Admin Entrypoint"
set -e

printf "Admin Exec: %s\n" "$@"
exec "$@"