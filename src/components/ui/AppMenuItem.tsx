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
    <Link className={cn(className, "flex gap-3 p-2 rounded-md transition hover:bg-neutral-300")} href={href}>
      {Icon}
      {text}
    </Link>
  )
}
export default AppMenuItem
