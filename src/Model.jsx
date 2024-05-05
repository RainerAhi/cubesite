import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()
  const model2 = useRef()
  const model3 = useRef()
  const model4 = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  const cameraLoads = () => {
    gsap.to(scene.rotation, {
      duration: 5,
      y: Math.PI * 2,
      x: Math.PI * 2,
      ease: 'power3.out',
    });
    gsap.to(camera.position, {
      duration: 5,
      z: 10,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
      cameraLoads();
  }, []);

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST TO SECOND


      tl
      // .to(model.current.rotation, {
      //   x: Math.PI * 2,
      //   y: Math.PI * 2,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model2.current.rotation, {
      //   x: Math.PI * 2,
      //   y: Math.PI * 2,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model3.current.rotation, {
      //   x: Math.PI * 2,
      //   y: Math.PI * 2,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model4.current.rotation, {
      //   x: Math.PI * 2,
      //   y: Math.PI * 2,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })


      // SECOND TO THIRD
      
      .to(model.current.position, {
        x: isMobile ? 450 : 750,
        y: isMobile ? 450 : 750,
        z: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model2.current.position, {
        x: isMobile ? -450 : -750,
        y: isMobile ? 450 : 750,
        z: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model3.current.position, {
        x: isMobile ? 450 : 750,
        y: isMobile ? -450 : -750,
        z: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model4.current.position, {
        x: isMobile ? -450 : -750,
        y: isMobile ? -450 : -750,
        z: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // .to(model.current.scale, {
      //   x: 0.75,
      //   y: 0.75,
      //   z: 0.75,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model2.current.scale, {
      //   x: 0.75,
      //   y: 0.75,
      //   z: 0.75,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model3.current.scale, {
      //   x: 0.75,
      //   y: 0.75,
      //   z: 0.75,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(model4.current.scale, {
      //   x: 0.75,
      //   y: 0.75,
      //   z: 0.75,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

    })
    

  }, [])
  const { nodes, materials } = useGLTF('./cube.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          ref={model}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={ 0 }
          scale={ 0.997 }
        >
          <meshStandardMaterial color={ "#febf06" } metalness={ 0.1 } roughness={ 0.1 } />
        </mesh>
        <mesh
          ref={model2}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={ 0 }
          scale={ 0.998 }
        >
          <meshStandardMaterial color={ "#721060" } metalness={ 0.1 } roughness={ 0.1 }  />
        </mesh>
        <mesh
          ref={model3}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={ 0 }
          scale={ 0.999 }
        >
          <meshStandardMaterial color={ "#ef3457" } metalness={ 0.1 } roughness={ 0.1 }  />
        </mesh>
        <mesh
          ref={model4}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={ 0 }
        >
          <meshStandardMaterial color={ "#24215b" } metalness={ 0.1 } roughness={ 0.1 }  />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./cube.gltf')