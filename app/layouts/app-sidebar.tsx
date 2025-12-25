'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '../ui/sidebar'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { motion } from 'motion/react'
import { NavMain } from './nav-main'
import { primaryNavigation, secondaryNavigation } from './collapsibleContent'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex flex-col items-center gap-3 p-4'>
              <Avatar className='relative h-14 w-14 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  className='border-darkblue absolute inset-0 rounded-full border'
                />
                <AvatarFallback className='p-[1.1rem]'>VK</AvatarFallback>
              </Avatar>
              <div className='mt-2 grid text-center'>
                <span className='truncate text-[15px] font-medium'>
                  Victoria Kush
                </span>
                <span className='truncate text-[10px] text-gray-400'>
                  Administrator
                </span>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={primaryNavigation} />
      </SidebarContent>
      <SidebarFooter className='border-t'>
        <NavMain items={secondaryNavigation} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
