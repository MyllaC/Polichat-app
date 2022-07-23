import * as Icon from 'phosphor-react'
interface SidebarIconProps {
  name: string
  size: number
}

export function SidebarIcon({ name, size }: SidebarIconProps) {
  const PhosphorIcon = Icon[name]

  return (
    <a className="w-[70px] flex cursor-pointer justify-center h-12 items-center border-l-2 border-slate-900 hover:bg-sky-500/10 transition-colors hover:border-l-2 hover:border-sky-500 ease-in-out">
      <PhosphorIcon size={size} />
    </a>
  )
}
