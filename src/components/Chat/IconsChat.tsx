import * as Icons from 'phosphor-react'

//import { iconsChatData } from './IconsChatData'
interface SidebarIconProps {
  name: string
  size: number
}

export function IconsChat({ name, size }: SidebarIconProps) {

  const PhosphorIcon = (Icons as any)[name]

  return (
    <a className="p-2 cursor-pointer justify-center items-center rounded-full hover:bg-sky-500/10 transition-colors  ease-in-out">
      <PhosphorIcon size={size} />
    </a>
  )
}
