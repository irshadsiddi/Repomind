import { SidebarProvider } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import App from 'next/app';
import React from 'react';
import { AppSidebar } from './app-sidebar';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full m-2'>
                <div className='flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4'>
                    {/* <SearchBar /> */}
                    <div className='ml-auto '></div>
                    <UserButton/>
                  
                </div>
                
                 {/* main content */}
                 <div className='p-4 my-2 border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-10rem)]'>
                  {children}
                  </div>

            </main>
        </SidebarProvider>
       
    </>
    
  );
};

export default SidebarLayout;