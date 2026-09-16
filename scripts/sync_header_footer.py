import os
import re
import glob

# Read canonical header, footer, responsive css link, and responsive js script from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

header_match = re.search(r'(<header\b[^>]*id=["\']masthead["\'][^>]*>.*?</header>)', index_content, re.DOTALL)
footer_match = re.search(r'(<footer\b[^>]*id=["\']colophon["\'][^>]*>.*?</footer>)', index_content, re.DOTALL)

if not header_match:
    raise Exception("Could not find masthead header in index.html")
if not footer_match:
    raise Exception("Could not find colophon footer in index.html")

canonical_header = header_match.group(1)
canonical_footer = footer_match.group(1)

css_link = '<link rel="stylesheet" href="css/responsive.css?v=6.4">'
js_script = '<script src="js/responsive.js?v=4.7"></script>'

# List of root html files to update (excluding index.html)
html_files = [f for f in glob.glob('*.html') if f != 'index.html']

updated_files = []
failed_files = []

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    orig_content = content

    # 1. Replace header
    # Check for <header ... id="masthead" ...>...</header> or <header ...>...</header>
    h_match = re.search(r'<header\b[^>]*id=["\']masthead["\'][^>]*>.*?</header>', content, re.DOTALL)
    if not h_match:
        h_match = re.search(r'<header\b[^>]*>.*?</header>', content, re.DOTALL)

    if h_match:
        content = content[:h_match.start()] + canonical_header + content[h_match.end():]
    else:
        print(f"Warning: No header found in {file_path}")
        failed_files.append((file_path, "No header found"))
        continue

    # 2. Replace footer
    f_match = re.search(r'<footer\b[^>]*id=["\']colophon["\'][^>]*>.*?</footer>', content, re.DOTALL)
    if not f_match:
        f_match = re.search(r'<footer\b[^>]*>.*?</footer>', content, re.DOTALL)

    if f_match:
        content = content[:f_match.start()] + canonical_footer + content[f_match.end():]
    else:
        print(f"Warning: No footer found in {file_path}")
        failed_files.append((file_path, "No footer found"))
        continue

    # 3. Ensure responsive.css link in <head>
    # Remove older versions if present
    content = re.sub(r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/responsive\.css(\?v=[^"\']*)?["\']\s*/?>', '', content)
    # Insert right before </head>
    content = content.replace('</head>', f'  {css_link}\n</head>')

    # 4. Ensure responsive.js script before </body>
    # Remove older versions if present
    content = re.sub(r'<script\s+src=["\']js/responsive\.js(\?v=[^"\']*)?["\']\s*></script>', '', content)
    # Insert right before </body>
    content = content.replace('</body>', f'  {js_script}\n</body>')

    # Save updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    updated_files.append(file_path)

print(f"Successfully updated {len(updated_files)} files:")
for f in updated_files:
    print(f" - {f}")

if failed_files:
    print(f"Failed files: {failed_files}")
