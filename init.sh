#!/bin/bash

if [ $1 ]; then
  sed -i "s/project_name/${1}/g" *.*
  bower install
  npm install
else
  echo "Error: Enter the project_name!"
  echo "Usage: ./init.sh project_name"
fi
