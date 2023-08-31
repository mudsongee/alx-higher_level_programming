#!/bin/bash
# Send a GET request to the specified URL and display only the body of a 200 status code response
echo $(curl -s -o /dev/null -w '%{http_code}' "$1" | grep -q "200" && curl -sL "$1")

