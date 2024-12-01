"use client"
import React, { Fragment } from 'react'
import { type IntegrationType } from '../integrations'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'

const IntegrationColumn = ({ integrations, className, reverse }: { integrations: IntegrationType, className?: string, reverse?: boolean }) => {
  return (
    <motion.div 
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }}
      className={twMerge("flex flex-col pb-4 gap-4", className)}
      >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((integration) => (
            <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6 ">
              <div className="flex justify-center">
                <Image src={integration.icon} alt={`${integration.name} icon`} className="size-24" />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  )
}

export default IntegrationColumn