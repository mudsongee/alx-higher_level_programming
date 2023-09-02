#!/usr/bin/python3
"""
A script that fetches https://alx-intranet.hbtn.io/status.
- uses requests package
"""

import requests

if __name__ == '__main__':
    res = requests.get('https://alx-intranet.hbtn.io/status')
    content = res.text
    print("Body response:")
    print(f"\t- type: {type(content)}")
    print(f"\t- content: {content}")
