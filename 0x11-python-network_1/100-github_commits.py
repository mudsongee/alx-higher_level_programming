#!/usr/bin/python3
"""
A script that fetches the 10 most recent commits of the repository `rails` by the user `rails`
using the GitHub API and prints them in the format `<sha>: <author name>` (one by line).
"""

import requests
import sys

if __name__ == '__main__':
    repo_name = sys.argv[1]
    owner_name = sys.argv[2]
    url = f"https://api.github.com/repos/{owner_name}/{repo_name}/commits"
    res = requests.get(url)
    commits = res.json()
    for commit in commits[:10]:
        sha = commit['sha']
        author_name = commit['commit']['author']['name']
        print(f"{sha}: {author_name}")
