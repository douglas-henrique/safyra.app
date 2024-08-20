'use client'
import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { useTranslations } from "next-intl"
const defaultLangs: string[] = ['pt', 'en']

export default function Breadcrumbs() {
  const paths = usePathname().split('/').filter(x => !defaultLangs.includes(x) && x !== '')
  const t = useTranslations('DASHBOARD')

  return (<Breadcrumb className="hidden md:flex">
    <BreadcrumbList>
      {
        paths.map((page, index) => <div key={page + index}>
          <BreadcrumbItem >
            <BreadcrumbLink asChild>
              <Link href={paths.join('')} prefetch={false}>
                {t(`BREADCRUMBS.${page}`)}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index + 1 < paths.length && (
            <BreadcrumbSeparator />
          )}
        </div>)
      }
    </BreadcrumbList>
  </Breadcrumb>)
}