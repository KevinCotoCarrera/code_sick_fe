# 3D Model Pipeline

This folder uses simple GLB loading (via `ModelCanvas`) and a catalog of suggested assets. All sources are free/CC0-friendly; you still need to download the GLB files yourself to respect licensing and avoid broken links.

## Quick steps

1. Pick an entry from `catalog.ts` (see `slug`, `filename`, `sourceUrl`).
2. Download the GLB from the `sourceUrl` (most sources provide a direct GLB/GLTF or a ZIP). Keep the filename exactly as listed.
3. Drop the file into `public/models/<Filename>.glb`.
4. Visit `/templates/customize` → “3D model preview” and select the model. The canvas will hot-reload in dev; in prod you’ll need to redeploy with the asset included.

## Optional: generate a React component with gltfjsx

If you want a typed component instead of raw GLB loading:

```bash
npx gltfjsx public/models/Headphones.glb \
  --types --transform \
  --output src/components/three/models/Headphones.tsx
```

Then import it into a scene and place it inside `<Canvas>` as needed. Use `--draco` on heavy meshes to embed Draco decoding.

## Notes on sources

- Poly Haven, Kenney, Quaternius, AmbientCG assets are typically CC0; Sketchfab links should be filtered by CC0/Downloadable. Always confirm on the source page.
- Catalog entries are grouped by use case (hero, product, data, ambient, nature) to help pick the right mood for each section.
