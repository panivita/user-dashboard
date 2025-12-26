import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import SolidCheckmark from '@/assets/icons/solid-checkmark.svg'

import { cn } from '../lib/utils'

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer focus-visible:ring-darkblue data-[state=checked]:bg-[#24447f] data-[state=checked]:hover:shadow-darkblue h-4 w-4 shrink-0 rounded-sm ring-offset-white transition duration-500 focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-neutral-50 data-[state=checked]:hover:shadow-lg data-[state=unchecked]:border dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-white')}>
      <SolidCheckmark />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
