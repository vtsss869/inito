#!/usr/bin/env python3
import json
import xml.etree.ElementTree as ET

path = '/var/folders/ms/v0fp9y0526g73jxgkfrzrf5h0000gn/T/claude-hostloop-plugins/5d98745e5ceab915/projects/-Users-valeriiatsymbaliuk-Library-Application-Support-Claude-local-agent-mode-sessions-3e7cfb9b-7757-408f-86ca-c80d259e015a-a5f9cd26-7465-4638-8b64-4b92a1583f99-local-cbf8db50-3601-4192-991c-092a32dad-x2d4kj/4ee2fc03-0165-413c-ad18-4544ec356a05/tool-results/mcp-2b763db8-a199-4f31-8add-bbc8dc631435-get_metadata-1780491470333.txt'

with open(path) as f:
    data = json.load(f)

xml_text = data[0]['text']
root = ET.fromstring(xml_text)

results = []
for child in root:
    tag = child.tag.lower()
    if tag in ('frame', 'component', 'component_set'):
        node_id = child.get('id', '')
        name = child.get('name', '')
        results.append(f"{node_id} | {name}")

print(f"Total top-level frames/components: {len(results)}")
for r in results[:50]:
    print(r)
