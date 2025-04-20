import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { LoadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelPenguin = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()
  const target = new THREE.Vector3(-0.5, 1.2, 0)
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  )

  const handleWindowResize = useCallback(() => {
    const container = refContainer.current
    if (container && renderer) {
      const ScW = container.clientWidth
      const ScH = container.clientHeight
      renderer.setSize(ScW, ScH)
    }
  }, [renderer])

  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const container = refContainer.current
    if (!container || renderer) return

    const ScW = container.clientWidth
    const ScH = container.clientHeight

    const rendererInstance = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    rendererInstance.setPixelRatio(window.devicePixelRatio)
    rendererInstance.setSize(ScW, ScH)
    rendererInstance.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(rendererInstance.domElement)
    setRenderer(rendererInstance)

    const scale = ScH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(
      -scale, scale, scale, -scale, 0.01, 50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
    setCamera(camera)

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, rendererInstance.domElement)
    controls.autoRotate = true
    controls.target = target
    setControls(controls)

    let req = null
    let frame = 0

    const animate = () => {
      req = requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      rendererInstance.render(scene, camera)
    }

    const basePath = process.env.NODE_ENV === 'production' ? '/jaden-atienza' : ''

    LoadGLTFModel(scene, `${basePath}/penguin-baked.glb`, {
      receiveShadow: false,
      castShadow: false
    })
      .then(() => {
        animate()
        setLoading(false)
      })
      .catch(err => {
        console.error('❌ Failed to load model:', err)
      })

    return () => {
      cancelAnimationFrame(req)
      rendererInstance.domElement.remove()
      rendererInstance.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className='voxel-penguin'
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position='relative'
    >
      {loading && (
        <Spinner
          size='xl'
          position='absolute'
          left="50%"
          top="50%"
          ml='calc(0px - var(--spinner-size) / 2)'
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

export default VoxelPenguin
