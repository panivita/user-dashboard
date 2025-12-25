import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../toast'
import { useToast } from '@/components/hooks/use-toast'

export const Toaster = () => {
  const { toasts } = useToast()

  return (
    <div className='absolute max-w-full'>
      <ToastProvider>
        {toasts.map(function ({ id, title, description, action, duration, ...props }) {
          return (
            <Toast key={id} duration={duration} {...props}>
              <div className='flex w-full flex-col'>
                <div className='mr-4 flex w-full items-center justify-start gap-2 p-2'>
                  <div className='grid gap-1'>
                    {title && <ToastTitle>{title}</ToastTitle>}
                    {description && <ToastDescription>{description}</ToastDescription>}
                  </div>
                  {action}
                </div>
                <ToastClose />
              </div>
            </Toast>
          )
        })}
        <ToastViewport />
      </ToastProvider>
    </div>
  )
}
