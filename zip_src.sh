#!/bin/bash

zip -r "project_name_src_$(date +'%Y-%m-%d_%H-%M-%S').zip" . -x "node_modules/*" "bower_components/*" "*.zip" "dist/*"