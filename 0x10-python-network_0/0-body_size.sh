#!/bin/bash
#size of content-length
echo curl -sI "$1" | grep -i Content-Length | awk '{print $2}'
