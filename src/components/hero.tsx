"use client"
import React, { useEffect } from 'react'
import Button from './ui/button'
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Image from 'next/image'
import Pointer from './ui/pointer'
import { motion, useAnimate } from 'motion/react'
import cursorYouImage from "@/assets/images/cursor-you.svg"

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ])
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1}, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }]
    ])
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ])
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1}, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { y: 0, x: 140 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, -20, 0] }, { duration: 0.5, ease: "easeInOut" }]
    ])
  }, [])
  return (
    <section className='py-24 overflow-x-clip' style={{
      cursor: `url(${cursorYouImage.src}), auto`
    }}>
      <div className="container relative">
        <motion.div 
          ref={leftDesignScope} 
          initial={{ opacity: 0, y: 100, x: -100  }} 
          className='absolute -left-32 top-16 hidden lg:block' 
          drag
        >
          <Image  
            src={designExample1Image}
            alt='Design example 1'
            draggable='false'
          />
        </motion.div>
        <motion.div ref={leftPointerScope} initial={{ opacity: 0, y: 100, x: -200}} className='absolute left-56 top-96 hidden lg:block'>
          <Pointer name={'Andrew'} />
        </motion.div>

        <motion.div ref={rightDesignScope} initial={{ opacity: 0, y: 100, x: 100 }} className='absolute -right-64 -top-16 hidden lg:block' drag>
          <Image
            src={designExample2Image}
            alt='Design example 2'
            draggable="false"
          />
        </motion.div>
        <motion.div ref={rightPointerScope} initial={{ opacity: 0, y: 100, x: 240  }} className='absolute right-[280px] -top-4 hidden lg:block'>
          <Pointer name={'Bryan'} color='red' />
        </motion.div>
        <div className="flex justify-center">
          <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold '>✨$7.5 seed round raised</div>
        </div>
        <h1 className='text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6'>Impactful design, created effortlessly</h1>
        <p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto '>
          Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow. 
        </p>
        <form className='flex border border-white/15 mt-8 rounded-full p-2 max-w-lg mx-auto'>
          <input type="email" placeholder='Enter your email' className='bg-transparent px-4 md:flex-1 w-full'/>
          <Button type="submit" variant="primary" className='whitespace-nowrap' size='sm'>Sign Up</Button>
        </form>
      </div>
    </section>
  )
}

export default Hero