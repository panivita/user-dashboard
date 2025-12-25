import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

const Dialog = ({ ...props }: ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root data-slot='dialog' {...props} />
}

const DialogPortal = ({ ...props }: ComponentProps<typeof DialogPrimitive.Portal>) => {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
}

const DialogContent = ({ className, children, ...props }: ComponentProps<typeof DialogPrimitive.Content>) => {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogPrimitive.Content
        data-slot='dialog-content'
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-lg outline-hidden duration-200 sm:max-w-xl md:max-w-2xl dark:border-neutral-800 dark:bg-neutral-950',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

const DialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot='dialog-header'
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

const DialogDescription = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
      {...props}
    />
  )
}

export { Dialog, DialogContent, DialogDescription, DialogHeader, DialogPortal, DialogTitle }
