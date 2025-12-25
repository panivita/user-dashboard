import { forwardRef, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'

import { cn } from '../lib/utils'
import { NavLink } from 'react-router'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  link?: { path: string; dynamicSegment: number }
}

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className='relative w-full overflow-auto'>
    <table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
  </div>
))
Table.displayName = 'Table'

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />,
)
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  ),
)
TableBody.displayName = 'TableBody'

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ className, children, link, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'relative transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800',
      className,
    )}
    {...props}
  >
    {children}
    {link && (
      <TableCell className='absolute inset-0 p-0'>
        <NavLink className='block h-full w-full' to={link.path + link.dynamicSegment} />
      </TableCell>
    )}
  </tr>
))
TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
)
TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props} />
  ),
)
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, children, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('hidden w-full items-center text-sm not-first-of-type:not-last:last-of-type:flex', className)}
      {...props}
    >
      <p className='bg-error z-10 rounded-full px-2 py-1 text-xs text-white'>{children}</p>
      <div className='bg-error absolute h-0.5 w-full' />
    </caption>
  ),
)
TableCaption.displayName = 'TableCaption'

export { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow }
