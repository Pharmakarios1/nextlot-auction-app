import { useLocation, Link } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.js"

export default function Breadcrumbs() {
  const location = useLocation()
  const paths = location.pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb className="border-red-600">
      <BreadcrumbList>
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((segment, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/")
          const isLast = index === paths.length - 1

          return (
            <BreadcrumbItem key={to}>
              <BreadcrumbSeparator />
              {isLast ? (
                <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={to} className="capitalize">
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
