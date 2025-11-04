/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader, LoadingManager } from 'three';
  
  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: any) => void,
      onProgress?: (progress: any) => void,
      onError?: (error: any) => void
    ): void;
  }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher } from 'three';
  
  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement?: HTMLElement);
    enableDamping: boolean;
    update(): void;
    dispose(): void;
  }
}
