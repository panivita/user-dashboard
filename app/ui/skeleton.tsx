import { HTMLAttributes, forwardRef } from 'react'

import { cn } from '../lib/utils'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  ContainerLength?: number
}

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse bg-neutral-100 dark:bg-neutral-800', className)} {...props} />
}

const SkeletonContent = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ContainerLength = 3, children, ...props }, ref) => {
    return (
      <>
        {Array.from({ length: ContainerLength }).map((_, index) => (
          <div
            ref={ref}
            key={index}
            data-index={index}
            className={cn('flex gap-4 not-data-[index=0]:mt-4 not-data-[index=0]:flex-row-reverse', className)}
            {...props}
          >
            {children}
          </div>
        ))}
      </>
    )
  },
)

export { Skeleton, SkeletonContent }
