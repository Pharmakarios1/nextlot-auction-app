import { useLocation, Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.js'
import useHome from '@/hooks/useHome.js'

export default function Breadcrumbs() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)
  const { isHome } = useHome()

  return (
    <Breadcrumb
      className={`${isHome ? 'bg-none' : 'bg-slate-950'} w-fit p-1 rounded-md my-10 text-white`}
    >
      <BreadcrumbList>
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            {isHome ? null : (
              <Link to="/" className="text-white">
                Home
              </Link>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((segment, index) => {
          const to = '/' + paths.slice(0, index + 1).join('/')
          const isLast = index === paths.length - 1

          return (
            <BreadcrumbItem key={to}>
              <BreadcrumbSeparator />
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
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
