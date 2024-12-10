import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (

    <div className='w-full h-screen'>
      <div className='text-white absolute top-32 left-1/2 -translate-x-1/2'>
        <h1 className='text-5xl font-semibold text'>MacBook Pro.</h1>
      </div>
      
    <Canvas camera={{fov: 14, position: [0, -10, 220]}}>
      {/* <OrbitControls/> */}
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",]} />
      <ScrollControls pages={3}>
      <MacContainer/>
      </ScrollControls>
    </Canvas>
    
    </div>
    
  )
}

export default App