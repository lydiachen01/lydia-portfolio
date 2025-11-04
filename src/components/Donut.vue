<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import {BasicShadowMap, SRGBColorSpace, NoToneMapping} from 'three'
import { ref, onMounted, onUnmounted } from 'vue'

const gl = {
  clearColor: "#181C3E",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const meshRef = ref()
const canvasRef = ref()
let animationId: number
let velocityX = 0.01
let velocityY = 0.01
let isDragging = false
let lastMouseX = 0
let lastMouseY = 0

onMounted(() => {
  const animate = () => {
    if (meshRef.value && !isDragging) {
      // Apply momentum
      meshRef.value.rotation.x += velocityX
      meshRef.value.rotation.y += velocityY
      
      // Apply friction to slow down momentum
      velocityX *= 0.98
      velocityY *= 0.98
    }

    animationId = requestAnimationFrame(animate)
  }
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

// Handle mouse events
const onMouseDown = (event: MouseEvent) => {
  isDragging = true
  lastMouseX = event.clientX
  lastMouseY = event.clientY
  velocityX = 0
  velocityY = 0
}

const onMouseMove = (event: MouseEvent) => {
  if (isDragging && meshRef.value) {
    const deltaX = event.clientX - lastMouseX
    const deltaY = event.clientY - lastMouseY
    
    meshRef.value.rotation.y += deltaX * 0.01
    meshRef.value.rotation.x += deltaY * 0.01
    
    velocityX = deltaY * 0.01
    velocityY = deltaX * 0.01
    
    lastMouseX = event.clientX
    lastMouseY = event.clientY
  }
}

const onMouseUp = () => {
  isDragging = false
}

const onMouseLeave = () => {
  isDragging = false
}
</script>

<template>
  <div class="donut-container">
    <TresCanvas
      ref="canvasRef"
      :gl="gl"
      window-size
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseLeave"
    >
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <TresMesh ref="meshRef">
        <TresTorusGeometry :args="[1, 0.5, 32, 64]" />
        <TresMeshPhysicalMaterial 
          color="#ffffff"
          :transparent="true"
          :opacity="0.3"
          :metalness="0.1"
          :roughness="0.0"
          :ior="1.5"
          :transmission="0.9"
          :thickness="0.5"
          :env-map-intensity="1.0"
        />
      </TresMesh>
      
      <!-- Liquid surface effect -->
      <TresMesh>
        <TresTorusGeometry :args="[1, 0.45, 16, 32]" />
        <TresMeshPhysicalMaterial 
          color="#e0f7fa"
          :transparent="true"
          :opacity="0.6"
          :metalness="0.0"
          :roughness="0.1"
          :ior="1.33"
          :transmission="0.8"
          :thickness="0.1"
        />
      </TresMesh>
      
      <!-- Bubbles inside -->
      <TresMesh :position="[0.3, 0.2, 0.1]">
        <TresSphereGeometry :args="[0.05, 16, 16]" />
        <TresMeshPhysicalMaterial 
          color="#ffffff"
          :transparent="true"
          :opacity="0.4"
          :metalness="0.0"
          :roughness="0.0"
          :ior="1.0"
          :transmission="1.0"
        />
      </TresMesh>
      
      <TresMesh :position="[-0.2, -0.1, 0.3]">
        <TresSphereGeometry :args="[0.03, 12, 12]" />
        <TresMeshPhysicalMaterial 
          color="#ffffff"
          :transparent="true"
          :opacity="0.3"
          :metalness="0.0"
          :roughness="0.0"
          :ior="1.0"
          :transmission="1.0"
        />
      </TresMesh>
      
      <!-- Enhanced lighting for glass effect -->
      <TresAmbientLight :intensity="0.4" />
      <TresDirectionalLight 
        :position="[5, 5, 5]" 
        :intensity="1.2"
        cast-shadow
      />
      <TresDirectionalLight 
        :position="[-5, -5, -5]" 
        :intensity="0.8"
        color="#87ceeb"
      />
      <TresPointLight 
        :position="[0, 2, 0]" 
        :intensity="0.5"
        color="#e0f7fa"
      />
      
      <!-- Environment for reflections -->
      <TresEnvironment preset="sunset" />
    </TresCanvas>
  </div>
</template>

<style scoped>
.donut-container {
  width: 100%;
  height: 400px;
  position: relative;
}
</style>