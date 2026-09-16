import os
import glob

html_files = glob.glob("*.html")
for filepath in html_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace any responsive.css and responsive.js version tags with new version
    import re
    content = re.sub(r'css/responsive\.css(\?v=[^"\'>\s]+)?', 'css/responsive.css?v=8.6', content)
    content = re.sub(r'js/responsive\.js(\?v=[^"\'>\s]+)?', 'js/responsive.js?v=5.6', content)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Updated cache bust version on {len(html_files)} HTML files.")
