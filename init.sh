#!/bin/bash

[ $1 ]; sed "s/project_name/${1}/g" *.* > /dev/null
bower install
npm install