<template>
  <TresMesh ref="meshRef">
    <TresPlaneGeometry :args="[2, 2]" />
    <primitive :object="material" attach="material" />
  </TresMesh>
</template>

<script setup lang="ts">
import { TresMesh, TresPlaneGeometry, useFrame, useThree } from '@tresjs/core'
import { computed, ref, useMemo } from 'vue'
import * as THREE from 'three'

interface Props {
  source: string
  uniforms: Record<string, any>
  maxFps?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxFps: 60
})

const meshRef = ref()

const { size } = useThree()
let lastFrameTime = 0

useFrame(({ clock }) => {
  if (!meshRef.value) return
  const timestamp = clock.getElapsedTime()
  if (timestamp - lastFrameTime < 1 / props.maxFps) {
    return
  }
  lastFrameTime = timestamp

  const material = meshRef.value.material
  if (material?.uniforms?.u_time) {
    material.uniforms.u_time.value = timestamp
  }
})

const getUniforms = () => {
  const preparedUniforms: any = {}

  for (const uniformName in props.uniforms) {
    const uniform = props.uniforms[uniformName]

    switch (uniform.type) {
      case 'uniform1f':
        preparedUniforms[uniformName] = { value: uniform.value }
        break
      case 'uniform3f':
        preparedUniforms[uniformName] = {
          value: new THREE.Vector3().fromArray(uniform.value),
        }
        break
      case 'uniform1fv':
        preparedUniforms[uniformName] = { value: uniform.value }
        break
      case 'uniform3fv':
        preparedUniforms[uniformName] = {
          value: uniform.value.map((v: number[]) =>
            new THREE.Vector3().fromArray(v)
          ),
        }
        break
      case 'uniform2f':
        preparedUniforms[uniformName] = {
          value: new THREE.Vector2().fromArray(uniform.value),
        }
        break
      default:
        console.error(`Invalid uniform type for '${uniformName}'.`)
        break
    }
  }

  preparedUniforms['u_time'] = { value: 0 }
  preparedUniforms['u_resolution'] = {
    value: new THREE.Vector2(size.width * 2, size.height * 2),
  }
  return preparedUniforms
}

const material = computed(() => {
  return new THREE.ShaderMaterial({
    vertexShader: `
      precision mediump float;
      in vec2 coordinates;
      uniform vec2 u_resolution;
      out vec2 fragCoord;
      void main(){
        float x = position.x;
        float y = position.y;
        gl_Position = vec4(x, y, 0.0, 1.0);
        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        fragCoord.y = u_resolution.y - fragCoord.y;
      }
    `,
    fragmentShader: props.source,
    uniforms: getUniforms(),
    glslVersion: THREE.GLSL3,
    blending: THREE.CustomBlending,
    blendSrc: THREE.SrcAlphaFactor,
    blendDst: THREE.OneFactor,
  })
})
</script>