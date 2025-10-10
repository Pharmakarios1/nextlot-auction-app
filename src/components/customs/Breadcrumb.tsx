import { useLocation, Link } from 'react-router-dom'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.js'

export default function Breadcrumbs() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)
  const isHome = location.pathname === '/'

  return (
    <Breadcrumb
      className={`${isHome ? 'bg-none' : 'bg-slate-950'} w-fit p-1 rounded-md my-10 text-white`}
    >
      <BreadcrumbList>
        {!isHome && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Separator after Home item */}
            <BreadcrumbSeparator />
          </>
        )}

        {paths.map((segment, index) => {
          const to = '/' + paths.slice(0, index + 1).join('/')
          const isLast = index === paths.length - 1

          return (
            <React.Fragment key={to}>
              <BreadcrumbItem key={to}>
                {isLast ? (
                  <BreadcrumbPage className="capitalize text-white">{segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to} className="capitalize text-white">
                      {segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {/* Only render separator if not last */}
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
