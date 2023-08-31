#!/bin/bash
#size of content-length

# Check if a URL is provided as an argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

url="$1"
size=$(curl -sI "$url" | grep -i Content-Length | awk '{print $2}')
echo "$size"

