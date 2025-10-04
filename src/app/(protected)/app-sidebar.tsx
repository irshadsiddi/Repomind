"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Bot, CreditCard, Icon, LayoutDashboard, Plus, Presentation } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/q-a",
    icon: Bot,
  },
  {
    title: "Meetings",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects=[
    {
        name:"Projet 1"
    },
    {
        name:"Projet 1"
    },
    {
        name:"Projet 1"
    },
    {
        name:"Projet 1"
    },
    {
        name:"Projet 1"
    }
]
export function AppSidebar() {
    const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>Logo</SidebarHeader>

      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <Link href={item.url} className={cn("flex items-center gap-2",pathname===item.url && "!bg-primary !text-white","list-none")}>
                    <item.icon/>
                    <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            
            ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton asChild>
                   <div>
                    <div className={cn('rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                     {'bg-primary text-white':true} )}>
                      {project.name[0]}
                    </div>
                    {project.name}
                   </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            
            ))}
            </SidebarMenu>

              <SidebarMenu>
              <SidebarMenuItem >
                <Link href='/create-project'>
                <Button size='sm' variant={"outline"}>
                  <Plus/>
                  Create Project</Button>
                </Link>
             
              </SidebarMenuItem>
              </SidebarMenu>
              
            

          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
     
    </Sidebar>

  
  );
}
