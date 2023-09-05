import { FC } from "react"
import AppMenuItem from "../ui/AppMenuItem"
import { AreaChart, FileText } from "lucide-react"

const Sider: FC = () => {
  return (
    <div className='w-56 h-full pt-6 px-3 flex flex-col gap-4 border-r-2 border-neutral-100'>
      <AppMenuItem
        className='bg-neutral-100'
        Icon={<AreaChart strokeWidth={1.75} />}
        href='dashboard'
        text='Dashboard'
      />
      <AppMenuItem className='bg-neutral-100' Icon={<FileText strokeWidth={1.75} />} href='reports' text='Reports' />
    </div>
  )
}
export default Sider
