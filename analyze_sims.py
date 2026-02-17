import re
from collections import defaultdict

with open(r'c:\Users\lenovo\OneDrive\Desktop\phyzics\script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all formula names and their simulation types
pattern = r'name:\s*"([^"]+)"[\s\S]*?simulationType:\s*"([^"]+)"'
matches = re.findall(pattern, content)

# Count by simulation type
sim_counts = defaultdict(list)
for name, sim_type in matches:
    sim_counts[sim_type].append(name)

# Print results
print("=" * 80)
print("SIMULATION TYPE DISTRIBUTION")
print("=" * 80)
for sim_type in sorted(sim_counts.keys()):
    formulas = sim_counts[sim_type]
    print(f'\n{sim_type} ({len(formulas)} formulas):')
    for formula in formulas:
        print(f'  - {formula}')

print(f"\n\nTOTAL FORMULAS: {len(matches)}")
