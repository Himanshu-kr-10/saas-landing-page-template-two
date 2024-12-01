import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...otherProps } = props
  return (
    <div className={twMerge("size-14 inline-flex items-center justify-center bg-neutral-300 rounded-2xl text-xl text-netural-950 font-medium text-black", className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Key