import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '../lib/utils'

import SolidArrowDown from '@/assets/icons/solid-arrow-down.svg'

export type CalendarProps = ComponentProps<typeof DayPicker>

const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <DayPicker
      {...props}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col justify-center items-center text-center space-y-4 sm:space-x-4 sm:space-y-0 relative',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'z-5 w-full',
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-neutral-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-neutral-400',
        week: 'flex w-full mt-2',
        day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md text-xs grid',
        range_end: 'day-range-end',
        selected:
          '!bg-[#24447f] text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 !focus:bg-[#24447f] focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900 hover:shadow-lg hover:shadow-darkblue transition delay-50 duration-200',
        today: 'bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50',
        outside:
          'day-outside text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400',
        disabled: 'text-neutral-500 opacity-50 dark:text-neutral-400',
        range_middle:
          'aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        PreviousMonthButton: ({ ...props }) => (
          <button {...props} className='absolute left-0 rotate-90 px-2 py-1'>
            <SolidArrowDown />
          </button>
        ),
        NextMonthButton: ({ ...props }) => (
          <button {...props} className='absolute right-0 -rotate-90 px-2 py-1'>
            <SolidArrowDown />
          </button>
        ),
      }}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
