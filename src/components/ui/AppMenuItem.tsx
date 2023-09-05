import { cn } from "@/lib/utils"
import Link from "next/link"
import { FC, ReactNode } from "react"

type IAppMenuItemProps = {
  Icon?: ReactNode
  text: string
  href: string
  className?: string
}
const AppMenuItem: FC<IAppMenuItemProps> = ({ Icon, text, href, className }) => {
  return (
    <Link
      className={cn(
        className,
        "flex gap-3 p-2 rounded-md transition hover:bg-neutral-200 hover:shadow-[0px_1px_1px_0px_#FFF_inset,0px_-2px_1px_0px_rgba(0,0,0,0.05)_inset]"
      )}
      href={href}
    >
      {Icon}
      {text}
    </Link>
  )
}
export default AppMenuItem
