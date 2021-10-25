import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadSTL } from '../lib/loader'

function easeOutCirc(t: number) {
  return Math.sqrt(1 - Math.pow(t - 1, 4))
}

const SkylineGithub = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [_camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  /*const [initalCameraPosition] = useState(
    new THREE.Vector3( 
      0 * Math.sin(0.2 * Math.PI), x
      10, y
      0 * Math.cos(0.2 * Math.PI) z
    )
  ) */

  const [initalCameraPosition] = useState(new THREE.Vector3(200, 100, 0))

  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState<OrbitControls | null>(null)

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8 -> 6
      /* const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        100000
      )
      */
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      camera.position.copy(initalCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 10)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      controls.minDistance = 100
      controls.maxDistance = 500

      controls.maxPolarAngle = Math.PI / 2

      setControls(controls)

      loadSTL(scene, '/chapsag-2021.stl').then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0

      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        /*if (frame <= 100) {
          const t = initalCameraPosition
          const rotSpeed = -easeOutCirc(frame / 360) * Math.PI * 20
          camera.position.y = 10
          camera.position.x =
            t.x * Math.cos(rotSpeed) + t.z * Math.sin(rotSpeed)
          camera.position.z =
            t.z * Math.cos(rotSpeed) - t.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else { */
        controls.update()
        //}

        renderer.render(scene, camera)
        console.log('position')
        console.log(camera.position)
        console.log('rotation')
        console.log(camera.rotation)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="skyline-github"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

export default SkylineGithub
