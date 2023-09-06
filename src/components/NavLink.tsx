import Link, { LinkProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

export function NavLink({
  href,
  children,
  target,
  as,
}: {
  href: string
  children: React.ReactNode
  as?: LinkProps['as']
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <Link
      as={as}
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      target={target}
    >
      {children}
    </Link>
  )
}
