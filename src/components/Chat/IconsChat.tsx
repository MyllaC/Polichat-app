import * as Icon from 'phosphor-react'
interface SidebarIconProps {
  name: any
  size: number
}

export function IconsChat({ name, size }: SidebarIconProps) {
  const PhosphorIcon = Icon[name]

  return (
    <a className="p-2 cursor-pointer justify-center items-center rounded-full hover:bg-sky-500/10 transition-colors  ease-in-out">
      <PhosphorIcon size={size} />
    </a>
  )
}
