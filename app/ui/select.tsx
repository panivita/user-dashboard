import * as SelectPrimitive from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { useView } from '@/hooks/utils/useView'

import { cn } from '../lib/utils'

import SolidArrowDown from '@/assets/icons/solid-arrow-down.svg'

export interface SelectTriggerProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  error?: boolean
}

export interface SelectContentProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  /** endReached takes in an array of two arguments, the first is a function that will be called when the user scrolls to the bottom of the list, the second is a boolean that indicates whether to disable the function. i.e runing a async operation */
  endReached?: [() => void, boolean?]
}

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, children, error, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      data-error={error}
      className={cn(
        'focus-visible:ring-darkblue data-[error=true]:border-error flex h-10 w-full items-center justify-between gap-1 rounded-md border border-neutral-200 bg-white px-3 py-2 text-xs ring-offset-white transition duration-500 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:shadow-lg focus-visible:shadow-black/10 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[error=true]:ring-transparent md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 [&>span]:line-clamp-1',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <SolidArrowDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <div className='rotate-180'>
      <SolidArrowDown />
    </div>
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <SolidArrowDown />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = forwardRef<ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  ({ className, children, position = 'popper', endReached = [() => null, false], ...props }, ref) => {
    const { ref: lastElementRef } = useView(endReached)

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className,
          )}
          position={position}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            {children}
            <div ref={lastElementRef} />
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  },
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectPrimitive.ItemIndicator />
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
}
