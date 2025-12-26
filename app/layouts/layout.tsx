import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '../ui/breadcrumb';
import { AppSidebar } from './app-sidebar';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className='bg-[#24447f] relative flex w-full flex-col rounded-t-none pl-4 text-white rounded-xl h-[37.5vh] shrink-0 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'
          style={{ borderRadius: '0% 0% 50% 50% / 0% 0% 12vh 12vh;' }}
        >
          <div className='flex items-center gap-2 px-12 mt-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block text-white'>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div
          className='flex flex-1 flex-col gap-4 p-4 pt-0 z-50 px-12'
          style={{ marginTop: 'calc((37.5vh - 5rem) * -1)' }}
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export { Layout };
