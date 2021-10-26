import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadSTL } from '../lib/loader'

const SkylineGithub = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [_camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [target] = useState(new THREE.Vector3(0, 0, 0))
  const [initalCameraPosition] = useState(new THREE.Vector3(-700, 300, 300))
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

      const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight
      )
      camera.position.copy(initalCameraPosition)
      setCamera(camera)

      // LIGHTS
      let ambientLight = new THREE.AmbientLight(0x333333)
      let light = new THREE.DirectionalLight(0xffffff, 1.0)
      scene.add(ambientLight)
      scene.add(light)

      // CONTROLS
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      controls.minDistance = 100
      controls.maxDistance = 200
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

        controls.update()

        renderer.render(scene, camera)
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
      w={[280, 480, 480]}
      h={[280, 480, 480]}
      maxH={['100', '200', '300']}
      maxW={['100', '400', '500']}
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
