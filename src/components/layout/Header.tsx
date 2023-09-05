import { FC } from "react"

import { ArrowRightSquare, Home, UserCircle2 } from "lucide-react"

import AppMenuItem from "../ui/AppMenuItem"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"
import { Separator } from "../ui/Separator"

const Header: FC = () => {
  return (
    <div className='bg-sky-100 h-14'>
      <div className='container h-14 flex justify-between items-center'>
        <div>Logo</div>
        <div className='flex gap-2'>
          <div className='flex flex-col justify-center'>
            <div className='text-xs'>Welcome back!</div>
            <div className='text-sm'>Quyen Nguyen Van</div>
          </div>
          <Popover>
            <PopoverTrigger className='hover:cursor-pointer' asChild>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align='end' className='w-52'>
              <div className='grid gap-2'>
                <AppMenuItem className='bg-neutral-100' href='/' Icon={<Home />} text='Home' />
                <Separator />
                <AppMenuItem className='bg-neutral-100' href='/' Icon={<UserCircle2 />} text='Profile' />
                <AppMenuItem className='bg-neutral-100' href='/' Icon={<ArrowRightSquare />} text='Sign out' />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
export default Header
