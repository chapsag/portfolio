import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import * as THREE from 'three'

export function loadSTL(scene: THREE.Scene, path: string): Promise<THREE.Mesh> {
  return new Promise((resolve, reject) => {
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2c3fea,
      //color: 0xffffff,
      metalness: 0.25,
      roughness: 1,
      opacity: 1.0,
      transparent: false,
      transmission: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.25,
      wireframe: true
    })

    const loader = new STLLoader()
    loader.load(
      path,
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        scene.background = new THREE.Color(0xffffff)

        const xAxis = new THREE.Vector3(1, 0, 0)
        const zAxis = new THREE.Vector3(0, 0, 1)

        mesh.rotateOnWorldAxis(xAxis, Math.PI)
        mesh.rotateOnWorldAxis(zAxis, Math.PI / 2)
        mesh.rotateOnWorldAxis(xAxis, Math.PI / 2)
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
