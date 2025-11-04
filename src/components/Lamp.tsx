import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Lamp = () => {
  const window = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.current) return

    console.log("Lamp component mounting...")

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0000ff) // Blue background

    const camera = new THREE.PerspectiveCamera(
      75,
      window.current.clientWidth / window.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.current.clientWidth, window.current.clientHeight)
    window.current.appendChild(renderer.domElement)

    // Add a simple cube to test if Three.js is working
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    console.log("Scene setup complete, cube added")

    // Try to load the lamp model
    const loader = new GLTFLoader()
    console.log("Attempting to load model from /models/25_06_29_06_12_24_682.glb")
    
    loader.load("/models/25_06_29_06_12_24_682.glb", (gltf: any) => {
      console.log("Model loaded successfully:", gltf)
      
      // Remove the test cube
      scene.remove(cube)
      
      // Add the lamp model
      scene.add(gltf.scene)
      
      // Center and scale the model if needed
      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      console.log("Model bounds:", { center, size })
      
      // Center the model
      gltf.scene.position.sub(center)
      
      // Scale if too large or small
      const maxDim = Math.max(size.x, size.y, size.z)
      console.log("Max Dimensions: ", maxDim)
      if (maxDim > 10) {
        const scale = 10 / maxDim
        gltf.scene.scale.setScalar(scale)
        console.log("Scaled model by:", scale)
      }
      
    }, (progress: any) => {
      console.log("Loading progress:", (progress.loaded / progress.total * 100) + "%")
    }, (err: any) => {
      console.error("GLB load error:", err)
      console.log("Model failed to load, keeping the green cube")
    })

    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate the cube to make it obvious it's working
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      console.log("Lamp component unmounting...")
      renderer.dispose()
    }
  }, [])

  return <div ref={window} style={{ width: "100%", height: "100vh" }} />
}

export default Lamp
