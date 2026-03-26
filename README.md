# Hostname Generator

Generates random hostnames in `name@adjectivenoun` format — e.g. `blake@frostmoor`.

- **name** — a random English first name (4–5 characters)
- **adjective** — a random English adjective (4–5 characters)
- **noun** — a random English noun (4–5 characters)

Word lists live in `public/data/` as plain JSON files.

## Preview locally

```bash
python3 -m http.server 8000 --directory public
```

Then open http://localhost:8000.
