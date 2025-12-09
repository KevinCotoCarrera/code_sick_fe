"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  Center,
  useGLTF,
} from "@react-three/drei";
import { Color } from "three";
import type { ScenePreset } from "./catalog";

type FallbackVariant = "torus" | "sphere";

type ModelCanvasProps = {
  modelPath?: string;
  cameraPosition?: [number, number, number];
  autoRotate?: boolean;
  fallbackVariant?: FallbackVariant;
  className?: string;
  background?: string;
  scenePreset?: ScenePreset;
  lightingPreset?: "default" | "soft-dark";
  modelScale?: number;
  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];
  centerModel?: boolean;
};

function Loader() {
  return (
    <Html center>
      <div className="text-xs font-medium text-gray-500">Loading model…</div>
    </Html>
  );
}

function FallbackGeometry({ variant }: { variant: FallbackVariant }) {
  if (variant === "sphere") {
    return (
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
    );
  }

  return (
    <mesh>
      <torusGeometry args={[1.1, 0.35, 32, 128]} />
      <meshStandardMaterial color="#22c55e" metalness={0.85} roughness={0.2} />
    </mesh>
  );
}

function GLTFModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  useGLTF.preload(modelPath);
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      dispose={null}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

type NatureKey =
  | "ground_grass"
  | "tree_pineRoundC"
  | "tree_default"
  | "rock_largeC"
  | "rock_smallFlatB"
  | "ground_riverTile"
  | "bridge_wood"
  | "campfire_stones"
  | "tent_smallOpen"
  | "log"
  | "lily_small"
  | "platform_stone"
  | "stone_smallFlatC"
  | "tree_palmShort"
  | "path_stone";

type CityKey =
  | "building-a"
  | "building-b"
  | "building-c"
  | "building-d"
  | "building-e"
  | "building-f"
  | "building-g"
  | "building-h"
  | "building-i"
  | "building-j"
  | "building-k"
  | "building-l"
  | "building-m"
  | "building-n"
  | "building-skyscraper-a"
  | "building-skyscraper-b"
  | "building-skyscraper-c"
  | "building-skyscraper-d"
  | "building-skyscraper-e";

const bundledNatureModels: Record<NatureKey, string> = {
  ground_grass: new URL("./nature/ground_grass.glb", import.meta.url).href,
  tree_pineRoundC: new URL("./nature/tree_pineRoundC.glb", import.meta.url)
    .href,
  tree_default: new URL("./nature/tree_default.glb", import.meta.url).href,
  rock_largeC: new URL("./nature/rock_largeC.glb", import.meta.url).href,
  rock_smallFlatB: new URL("./nature/rock_smallFlatB.glb", import.meta.url)
    .href,
  ground_riverTile: new URL("./nature/ground_riverTile.glb", import.meta.url)
    .href,
  bridge_wood: new URL("./nature/bridge_wood.glb", import.meta.url).href,
  campfire_stones: new URL("./nature/campfire_stones.glb", import.meta.url)
    .href,
  tent_smallOpen: new URL("./nature/tent_smallOpen.glb", import.meta.url).href,
  log: new URL("./nature/log.glb", import.meta.url).href,
  lily_small: new URL("./nature/lily_small.glb", import.meta.url).href,
  platform_stone: new URL("./nature/platform_stone.glb", import.meta.url).href,
  stone_smallFlatC: new URL("./nature/stone_smallFlatC.glb", import.meta.url)
    .href,
  tree_palmShort: new URL("./nature/tree_palmShort.glb", import.meta.url).href,
  path_stone: new URL("./nature/path_stone.glb", import.meta.url).href,
};

Object.values(bundledNatureModels).forEach((url) => useGLTF.preload(url));

const bundledCityModels: Record<CityKey, string> = {
  "building-a": new URL("./city/building-a.glb", import.meta.url).href,
  "building-b": new URL("./city/building-b.glb", import.meta.url).href,
  "building-c": new URL("./city/building-c.glb", import.meta.url).href,
  "building-d": new URL("./city/building-d.glb", import.meta.url).href,
  "building-e": new URL("./city/building-e.glb", import.meta.url).href,
  "building-f": new URL("./city/building-f.glb", import.meta.url).href,
  "building-g": new URL("./city/building-g.glb", import.meta.url).href,
  "building-h": new URL("./city/building-h.glb", import.meta.url).href,
  "building-i": new URL("./city/building-i.glb", import.meta.url).href,
  "building-j": new URL("./city/building-j.glb", import.meta.url).href,
  "building-k": new URL("./city/building-k.glb", import.meta.url).href,
  "building-l": new URL("./city/building-l.glb", import.meta.url).href,
  "building-m": new URL("./city/building-m.glb", import.meta.url).href,
  "building-n": new URL("./city/building-n.glb", import.meta.url).href,
  "building-skyscraper-a": new URL(
    "./city/building-skyscraper-a.glb",
    import.meta.url
  ).href,
  "building-skyscraper-b": new URL(
    "./city/building-skyscraper-b.glb",
    import.meta.url
  ).href,
  "building-skyscraper-c": new URL(
    "./city/building-skyscraper-c.glb",
    import.meta.url
  ).href,
  "building-skyscraper-d": new URL(
    "./city/building-skyscraper-d.glb",
    import.meta.url
  ).href,
  "building-skyscraper-e": new URL(
    "./city/building-skyscraper-e.glb",
    import.meta.url
  ).href,
};

Object.values(bundledCityModels).forEach((url) => useGLTF.preload(url));

function NatureAsset({
  asset,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: {
  asset: NatureKey;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}) {
  const url = bundledNatureModels[asset];
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
    />
  );
}

function ForestGroveScene() {
  return (
    <group>
      <NatureAsset asset="ground_grass" scale={2.1} />
      <NatureAsset
        asset="tree_pineRoundC"
        position={[1.4, 0, -0.8]}
        scale={1.35}
      />
      <NatureAsset
        asset="tree_default"
        position={[-1.1, 0, -1.2]}
        scale={1.2}
      />
      <NatureAsset asset="rock_largeC" position={[-0.4, 0, 0.7]} scale={0.9} />
      <NatureAsset
        asset="rock_smallFlatB"
        position={[0.9, 0.02, 0.4]}
        scale={0.7}
      />
      <NatureAsset asset="path_stone" position={[0, 0.01, 0]} scale={0.9} />
    </group>
  );
}

function RiverCampScene() {
  return (
    <group>
      <NatureAsset asset="ground_riverTile" scale={2.2} />
      <NatureAsset asset="bridge_wood" position={[0, 0.02, 0]} scale={0.9} />
      <NatureAsset
        asset="campfire_stones"
        position={[-0.9, 0.04, 0.4]}
        scale={0.8}
      />
      <NatureAsset
        asset="tent_smallOpen"
        position={[1.1, 0.03, -0.3]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={0.9}
      />
      <NatureAsset
        asset="log"
        position={[-0.6, 0.06, -0.6]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <NatureAsset
        asset="lily_small"
        position={[0.15, 0.02, -0.95]}
        scale={1.1}
      />
    </group>
  );
}

function ZenCourtyardScene() {
  return (
    <group>
      <NatureAsset asset="platform_stone" scale={1.4} />
      <NatureAsset
        asset="stone_smallFlatC"
        position={[0.6, 0.02, -0.3]}
        scale={0.9}
      />
      <NatureAsset
        asset="stone_smallFlatC"
        position={[-0.7, 0.02, 0.2]}
        scale={0.7}
      />
      <NatureAsset
        asset="tree_palmShort"
        position={[0.1, 0.02, 0.6]}
        scale={0.9}
      />
      <NatureAsset
        asset="rock_smallFlatB"
        position={[-0.2, 0.02, -0.7]}
        scale={0.6}
      />
    </group>
  );
}

function CityBuilding({
  asset,
  position,
  scale,
  rotation,
}: {
  asset: CityKey;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) {
  const url = bundledCityModels[asset];
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale ?? 1}
      dispose={null}
    />
  );
}

function CityPlazaScene() {
  return (
    <group position={[0, -0.1, 0]}>
      <CityBuilding asset="building-skyscraper-a" position={[-1.2, 0, -1.0]} scale={12} />
      <CityBuilding asset="building-skyscraper-b" position={[1.1, 0, -1.1]} scale={11.5} />
      <CityBuilding asset="building-skyscraper-d" position={[0.15, 0, -1.4]} scale={11} />
      <CityBuilding asset="building-e" position={[-1.0, 0, 0.35]} scale={8} rotation={[0, Math.PI / 14, 0]} />
      <CityBuilding asset="building-g" position={[1.0, 0, 0.35]} scale={8} rotation={[0, -Math.PI / 16, 0]} />
      <CityBuilding asset="building-l" position={[0.2, 0, 0.9]} scale={7} />
      <CityBuilding asset="building-b" position={[-1.15, 0, 1.0]} scale={6.5} />
      <CityBuilding asset="building-c" position={[1.15, 0, 0.95]} scale={6.3} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <circleGeometry args={[2.4, 64]} />
        <meshStandardMaterial color="#0d0b16" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.015, 0]}>
        <ringGeometry args={[2.1, 2.5, 64]} />
        <meshStandardMaterial color="#312e81" transparent opacity={0.35} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.85, 48]} />
        <meshStandardMaterial color="#111827" roughness={0.75} metalness={0.15} />
      </mesh>
    </group>
  );
}

function AbstractOrbScene() {
  return (
    <group position={[0, 0.1, 0]}>
      <mesh rotation={[0.2, 0.6, 0]} scale={1.3}>
        <torusKnotGeometry args={[0.7, 0.18, 180, 32, 1, 3]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.65}
          roughness={0.25}
          emissive="#4f46e5"
          emissiveIntensity={0.45}
        />
      </mesh>

      <mesh scale={0.9}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.35}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}
        scale={1.4}>
        <ringGeometry args={[0.95, 1.05, 64]} />
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.4}
          roughness={0.15}
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}
        scale={1.8}>
        <ringGeometry args={[1.1, 1.5, 72]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.25}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
        <circleGeometry args={[1.35, 64]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

const presetScenes: Record<ScenePreset, React.ReactNode> = {
  "forest-grove": <ForestGroveScene />,
  "river-camp": <RiverCampScene />,
  "zen-courtyard": <ZenCourtyardScene />,
  "city-plaza": <CityPlazaScene />,
  "abstract-orb": <AbstractOrbScene />,
};

type ModelErrorBoundaryProps = React.PropsWithChildren<{
  fallback: React.ReactNode;
}>;

class ModelErrorBoundary extends React.Component<
  ModelErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ModelErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.error("ModelCanvas error", error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function ModelCanvas({
  modelPath,
  cameraPosition = [3.5, 2.5, 4],
  autoRotate = true,
  fallbackVariant = "torus",
  className = "",
  background = "#f8fafc",
  scenePreset,
  lightingPreset = "default",
  modelScale,
  modelPosition,
  modelRotation,
  centerModel = true,
}: ModelCanvasProps) {
  const clearColor = useMemo(() => new Color(background), [background]);
  const lighting = useMemo(
    () =>
      lightingPreset === "soft-dark"
        ? { ambient: 0.35, key: 1.35, rim: 0.6 }
        : { ambient: 0.5, key: 1.1, rim: 0.6 },
    [lightingPreset]
  );
  const envPreset = useMemo(() => {
    if (scenePreset === "city-plaza") return "city";
    if (scenePreset === "abstract-orb") return "studio";
    if (modelPath?.includes("/models/city/")) return "city";
    return "studio";
  }, [scenePreset, modelPath]);
  const resolvedModelPath = useMemo(() => {
    if (!modelPath) return undefined;
    if (modelPath.startsWith("/models/nature/")) {
      const raw = modelPath.replace("/models/nature/", "");
      const key = raw.replace(/\.glb$/i, "") as NatureKey;
      if ((bundledNatureModels as Record<string, string>)[key]) {
        return bundledNatureModels[key as NatureKey];
      }
    }
    if (modelPath.startsWith("/models/city/")) {
      const raw = modelPath.replace("/models/city/", "");
      const key = raw.replace(/\.glb$/i, "") as CityKey;
      if ((bundledCityModels as Record<string, string>)[key]) {
        return bundledCityModels[key as CityKey];
      }
    }
    return modelPath;
  }, [modelPath]);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor(clearColor, 1);
        }}
      >
        <color attach="background" args={[clearColor]} />
        <ambientLight intensity={lighting.ambient} />
        <directionalLight position={[5, 6, 5]} intensity={lighting.key} />
        <directionalLight
          position={[-5, -3, -5]}
          intensity={lighting.rim}
          color="#60a5fa"
        />

        <ModelErrorBoundary
          fallback={<FallbackGeometry variant={fallbackVariant} />}
        >
          <Suspense fallback={<Loader />}>
            {scenePreset ? (
              presetScenes[scenePreset]
            ) : resolvedModelPath ? (
              centerModel ? (
                <Center>
                  <GLTFModel
                    modelPath={resolvedModelPath}
                    scale={modelScale}
                    position={modelPosition}
                    rotation={modelRotation}
                  />
                </Center>
              ) : (
                <GLTFModel
                  modelPath={resolvedModelPath}
                  scale={modelScale}
                  position={modelPosition}
                  rotation={modelRotation}
                />
              )
            ) : (
              <FallbackGeometry variant={fallbackVariant} />
            )}
            <Environment preset={envPreset} />
            <ContactShadows
              position={[0, -1.2, 0]}
              opacity={0.35}
              blur={2.5}
              scale={8}
              far={4.5}
            />
          </Suspense>
        </ModelErrorBoundary>

        <OrbitControls
          autoRotate={autoRotate}
          enablePan={false}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}
