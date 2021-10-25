import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import * as THREE from 'three'

export function loadSTL(
  scene,
  glbPath
  //options = { receiveShadow: true, castShadow: true }
) {
  //const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2c3fea,
      specular: 0x111111,
      shininess: 200,
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
      glbPath,
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
      }
    )
  })
}

/*glbPath,
        sltf => {
        const obj = sltf.scene
        obj.name = 'chapsag-2021'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj) 
      } */
