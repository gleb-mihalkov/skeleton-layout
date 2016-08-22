#!/bin/bash

if [ $1 ]; then
  sed "s/project_name/${1}/g" *.* > /dev/null
  bower install
  npm install
else
  echo "Error: Enter the project_name!"
  echo "Usage: ./init.sh project_name"
fi
