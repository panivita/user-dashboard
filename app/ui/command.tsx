import { Command as CommandPrimitive } from 'cmdk'
import { ComponentProps } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../dialog'
import { cn } from '../lib/utils'

const Command = ({ className, ...props }: ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      loop
      data-slot='command'
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 outline-none dark:bg-neutral-950 dark:text-neutral-50',
        className,
      )}
      {...props}
    />
  )
}

const CommandDialog = ({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
}) => {
  return (
    <Dialog {...props}>
      <DialogHeader className='sr-only'>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className='overflow-hidden p-0'>
        <Command className='**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:[&_[cmdk-group-heading]]:text-neutral-400 [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2.5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div data-slot='command-input-wrapper' className='flex h-9 items-center gap-2 border-b px-3'>
      <CommandPrimitive.Input
        data-slot='command-input'
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-[15px] outline-hidden placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400',
          className,
        )}
        {...props}
      />
    </div>
  )
}

const CommandList = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.List>) => {
  return (
    <CommandPrimitive.List
      data-slot='command-list'
      className={cn('max-h-[350px] scroll-py-1 overflow-x-hidden overflow-y-auto outline-none', className)}
      {...props}
    />
  )
}

const CommandEmpty = ({ ...props }: ComponentProps<typeof CommandPrimitive.Empty>) => {
  return <CommandPrimitive.Empty data-slot='command-empty' className='py-6 text-center text-sm' {...props} />
}

const CommandGroup = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      data-slot='command-group'
      className={cn(
        'overflow-hidden p-1 text-neutral-950 dark:text-neutral-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:[&_[cmdk-group-heading]]:text-neutral-400',
        className,
      )}
      {...props}
    />
  )
}

const CommandItem = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Item>) => {
  return (
    <CommandPrimitive.Item
      data-slot='command-item'
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-lg px-2 text-[13px] outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-neutral-100 data-[selected=true]:text-neutral-900 dark:data-[selected=true]:bg-neutral-800 dark:data-[selected=true]:text-neutral-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-neutral-500 dark:[&_svg:not([class*='text-'])]:text-neutral-400",
        className,
      )}
      {...props}
    />
  )
}

export { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList }
