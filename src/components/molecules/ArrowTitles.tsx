"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


export function ArrowTitles() {
  let paths: string = usePathname();
  paths = decodeURIComponent(paths);
  const pathNames: string[] = paths.split('/')
  console.log("pathsnames: ", pathNames)
  // Split the pathname into links

  return (
    <Breadcrumb className='p-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {/* Dynamically generate BreadcrumbItems based on the current route */}
        {pathNames.map((link, index) => (
          <React.Fragment key={link}>
            <BreadcrumbItem>
              {index < pathNames.length - 1 ? (
                <BreadcrumbLink href={`/${pathNames.slice(0, index + 1).join('/')}`}>
                  {link}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{link}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < pathNames.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
