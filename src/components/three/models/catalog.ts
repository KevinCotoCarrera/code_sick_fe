export type ScenePreset =
  | "forest-grove"
  | "river-camp"
  | "zen-courtyard"
  | "city-plaza"
  | "abstract-orb";

export type ModelMeta = {
  slug: string;
  label: string;
  filename: string;
  publicPath: string;
  sourceUrl: string;
  license: "CC0" | "Free (standard)";
  useCase: "hero" | "product" | "data" | "ambient" | "nature";
  /** Optional curated scene that uses bundled nature assets. */
  scenePreset?: ScenePreset;
  /** Flag bundled assets so consumers can show "bundled" badge. */
  bundled?: boolean;
  notes?: string;
};

// Add the downloaded .glb files to public/models with the filenames below.
export const modelCatalog: ModelMeta[] = [
  {
    slug: "abstract-shape-01",
    label: "Abstract Shape 01",
    filename: "AbstractShape01.glb",
    publicPath: "/models/AbstractShape01.glb",
    sourceUrl: "https://polyhaven.com/a/abstract_shape_01",
    license: "CC0",
    useCase: "hero",
    notes: "Organic abstract form for energetic hero backgrounds.",
  },
  {
    slug: "abstract-gem",
    label: "Abstract Gem",
    filename: "AbstractGem.glb",
    publicPath: "/models/AbstractGem.glb",
    sourceUrl: "https://www.kenney.nl/assets/abstract-shapes",
    license: "CC0",
    useCase: "hero",
  },
  {
    slug: "abstract-ring",
    label: "Abstract Ring",
    filename: "AbstractRing.glb",
    publicPath: "/models/AbstractRing.glb",
    sourceUrl: "https://www.kenney.nl/assets/abstract-shapes",
    license: "CC0",
    useCase: "ambient",
  },
  {
    slug: "parametric-torus",
    label: "Parametric Torus Loop",
    filename: "ParametricTorus.glb",
    publicPath: "/models/ParametricTorus.glb",
    sourceUrl:
      "https://sketchfab.com/3d-models/parametric-torus-cc0-downloadable",
    license: "CC0",
    useCase: "hero",
    notes: "Looping torus good for abstract motion cues.",
  },
  {
    slug: "headphones",
    label: "Headphones",
    filename: "Headphones.glb",
    publicPath: "/models/Headphones.glb",
    sourceUrl: "https://polyhaven.com/a/headphones",
    license: "CC0",
    useCase: "product",
  },
  {
    slug: "modern-chair",
    label: "Modern Chair",
    filename: "ModernChair.glb",
    publicPath: "/models/ModernChair.glb",
    sourceUrl: "https://polyhaven.com/a/chair_modern",
    license: "CC0",
    useCase: "product",
  },
  {
    slug: "desk-lamp",
    label: "Minimal Desk Lamp",
    filename: "DeskLamp.glb",
    publicPath: "/models/DeskLamp.glb",
    sourceUrl: "https://polyhaven.com/a/desk_lamp_modern",
    license: "CC0",
    useCase: "product",
  },
  {
    slug: "sci-fi-prop",
    label: "Sci-Fi Prop",
    filename: "SciFiProp.glb",
    publicPath: "/models/SciFiProp.glb",
    sourceUrl: "https://quaternius.com/packs/scifiprops.html",
    license: "CC0",
    useCase: "product",
  },
  {
    slug: "pie-chart",
    label: "3D Pie Chart",
    filename: "PieChart.glb",
    publicPath: "/models/PieChart.glb",
    sourceUrl: "https://sketchfab.com/3d-models/pie-chart-cc0",
    license: "CC0",
    useCase: "data",
  },
  {
    slug: "bar-chart",
    label: "3D Bar Chart",
    filename: "BarChart.glb",
    publicPath: "/models/BarChart.glb",
    sourceUrl: "https://sketchfab.com/3d-models/bar-chart-cc0",
    license: "CC0",
    useCase: "data",
  },
  {
    slug: "wireframe-globe",
    label: "Wireframe Globe",
    filename: "WireframeGlobe.glb",
    publicPath: "/models/WireframeGlobe.glb",
    sourceUrl: "https://sketchfab.com/3d-models/wireframe-globe-cc0",
    license: "CC0",
    useCase: "data",
  },
  {
    slug: "cubes-grid",
    label: "Floating Cubes Grid",
    filename: "CubesGrid.glb",
    publicPath: "/models/CubesGrid.glb",
    sourceUrl: "https://www.kenney.nl/assets/abstract-shapes",
    license: "CC0",
    useCase: "ambient",
    notes: "Lightweight abstract grid for metrics backdrops.",
  },
  {
    slug: "studio-light-rig",
    label: "Studio Light Rig",
    filename: "StudioLightRig.glb",
    publicPath: "/models/StudioLightRig.glb",
    sourceUrl: "https://polyhaven.com/a/studio_light_rig",
    license: "CC0",
    useCase: "ambient",
  },
  {
    slug: "podium-turntable",
    label: "Podium Turntable",
    filename: "PodiumTurntable.glb",
    publicPath: "/models/PodiumTurntable.glb",
    sourceUrl: "https://polyhaven.com/a/podium_turntable",
    license: "CC0",
    useCase: "product",
  },
  {
    slug: "softbox-room",
    label: "Softbox Room",
    filename: "SoftboxRoom.glb",
    publicPath: "/models/SoftboxRoom.glb",
    sourceUrl: "https://polyhaven.com/a/softbox_room",
    license: "CC0",
    useCase: "ambient",
    notes: "Backdrop for premium product lighting.",
  },
  {
    slug: "leafy-plant",
    label: "Leafy Plant",
    filename: "LeafyPlant.glb",
    publicPath: "/models/LeafyPlant.glb",
    sourceUrl: "https://polyhaven.com/a/leafy_plant_01",
    license: "CC0",
    useCase: "nature",
  },
  {
    slug: "pebble-stack",
    label: "Pebble Stack",
    filename: "PebbleStack.glb",
    publicPath: "/models/PebbleStack.glb",
    sourceUrl: "https://polyhaven.com/a/pebble_stack",
    license: "CC0",
    useCase: "nature",
  },
  {
    slug: "flora-sprig",
    label: "Flora Sprig",
    filename: "FloraSprig.glb",
    publicPath: "/models/FloraSprig.glb",
    sourceUrl: "https://www.kenney.nl/assets/nature-kit",
    license: "CC0",
    useCase: "nature",
  },
  {
    slug: "forest-grove",
    label: "Forest Grove (preset)",
    filename: "Bundled nature preset",
    publicPath: "/models/nature/forest-grove",
    sourceUrl: "https://www.kenney.nl/assets/nature-kit",
    license: "CC0",
    useCase: "nature",
    scenePreset: "forest-grove",
    bundled: true,
    notes:
      "Curated pines, rocks, and mossy ground for calm, product-friendly shots.",
  },
  {
    slug: "river-camp",
    label: "River Camp (preset)",
    filename: "Bundled nature preset",
    publicPath: "/models/nature/river-camp",
    sourceUrl: "https://www.kenney.nl/assets/nature-kit",
    license: "CC0",
    useCase: "nature",
    scenePreset: "river-camp",
    bundled: true,
    notes:
      "Campfire, tents, and a timber bridge over shallow water for outdoor funnels.",
  },
  {
    slug: "zen-courtyard",
    label: "Zen Courtyard (preset)",
    filename: "Bundled nature preset",
    publicPath: "/models/nature/zen-courtyard",
    sourceUrl: "https://www.kenney.nl/assets/nature-kit",
    license: "CC0",
    useCase: "nature",
    scenePreset: "zen-courtyard",
    bundled: true,
    notes:
      "Stone pads, bonsai-scale tree, and lantern stones for tranquil UI backdrops.",
  },
  {
    slug: "city-plaza",
    label: "City Plaza (preset)",
    filename: "Bundled city preset",
    publicPath: "/models/city/city-plaza",
    sourceUrl: "https://polyhaven.com/",
    license: "CC0",
    useCase: "hero",
    scenePreset: "city-plaza",
    bundled: true,
    notes:
      "Low-poly skyline with mixed towers and awnings for SaaS/analytics hero shots.",
  },
];
