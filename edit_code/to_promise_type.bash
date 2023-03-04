#!/bin/bash
SERVICEFILE_PATH=$1
awk  -F '{' -i inplace '/^ +[a-z]+(.*) {/ { printf "async %s :Promise<any> {\n", $1 } $0 !~ /^ +[a-z]+(.*) {/ { print }' $SERVICEFILE_PATH
