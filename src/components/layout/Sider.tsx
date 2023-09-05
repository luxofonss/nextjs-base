import { FC, ReactNode } from "react"

import { AreaChart, FileText } from "lucide-react"

import AppMenuItem from "../ui/AppMenuItem"

interface IMenuItem {
  name: string
  href: string
  Icon: ReactNode
}

const menuItems: IMenuItem[] = [
  { name: "Dashboard", href: "/dashboard", Icon: <AreaChart strokeWidth={1.75} /> },
  { name: "Reports", href: "/reports", Icon: <FileText strokeWidth={1.75} /> }
]

const Sider: FC = () => {
  return (
    <div className='w-56 h-full bg-white pt-6 px-3 flex flex-col gap-4 border-r-2 border-neutral-100'>
      {menuItems.map((menu: IMenuItem) => {
        return (
          <AppMenuItem key={menu.href} className='bg-neutral-0' Icon={menu.Icon} href={menu.href} text={menu.name} />
        )
      })}
    </div>
  )
}
export default Sider
