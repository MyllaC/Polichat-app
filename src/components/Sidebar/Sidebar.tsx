import { CaretDoubleRight, Question } from 'phosphor-react'
import { SidebarIcon } from './SidebarIcon'
import { iconsData } from './IconsData'

export function Sidebar() {
  return (
    <aside className="w-[70px] max-h-screen bg-slate-900 flex flex-col items-center justify-between border-r border-b border-slate-500">
      <div className="flex flex-col items-center">
        {iconsData?.map(({ name, size }, i) => (
          <SidebarIcon key={i} name={name} size={size} />
        ))}
      </div>
      <div className="w-[70px] flex flex-col items-center gap-4 pt-4 border-t border-slate-500">
        <Question
          size={24}
          className="cursor-pointer rounded-full hover:bg-slate-600"
        />
        <span className="border border-rose-900 bg-rose-500 font-bold text-rose-900 p-1.5 rounded-full cursor-pointer hover:bg-rose-600">
          CA
        </span>
        <CaretDoubleRight
          size={20}
          className="cursor-pointer rounded-full hover:bg-slate-600"
        />
        <div className="flex flex-col items-center g-1">
          <span className="text-xs">Versão</span>
          <span className="text-sm ">v0.15.182</span>
        </div>
      </div>
    </aside>
  )
}
