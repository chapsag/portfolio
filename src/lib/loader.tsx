import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import * as THREE from 'three'

export function loadSTL(scene: THREE.Scene, path: string): Promise<THREE.Mesh> {
  const light = new THREE.SpotLight()
  light.position.set(20, 20, 20)
  scene.add(light)

  return new Promise((resolve, reject) => {
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2c3fea,
      metalness: 0.25,
      roughness: 1,
      opacity: 1.0,
      transparent: false,
      transmission: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.25
    })

    const loader = new STLLoader()
    loader.load(
      path,
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        resolve(mesh)
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      error => {
        console.error(error)
        reject(error)
      }
    )
  })
}
