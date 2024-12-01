import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...otherProps } = props
  return (
    <div className={twMerge("rounded-full border-4 overflow-hidden border-blue-400 p-1 bg-neutral-900 size-20", className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Avatar