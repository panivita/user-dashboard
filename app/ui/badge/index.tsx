import { HTMLAttributes } from 'react'

import { badgeVariants, VariantProps } from '../badge/variants'
import { cn } from '../lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
