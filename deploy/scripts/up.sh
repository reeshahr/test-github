#!/bin/bash
set -ev
CWD=$(dirname "$0")
cd ${CWD}

docker-compose up -d "${@}"
