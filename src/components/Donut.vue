<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import {BasicShadowMap, SRGBColorSpace, NoToneMapping} from 'three'

// const gl = {
//   clearColor: "#181C3E",
//   shadows: true,
//   alpha: false,
//   shadowMapType: BasicShadowMap,
//   outputColorSpace: SRGBColorSpace,
//   toneMapping: NoToneMapping,
// }
</script>

<template>
  <TresCanvas
    <!-- clear-color="#82DBC5" -->
    window-size
  >
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 50%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>