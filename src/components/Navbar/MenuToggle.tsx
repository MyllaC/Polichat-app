import { X, List } from 'phosphor-react'

export function MenuToggle({ toggle, isOpen }) {
  return (
    <div className="z-99 cursor-pointer ">
      <div className="flex" onClick={toggle}>
        {isOpen ? (
          <div>
            <X className="rounded-full h-8 w-8 p-1 hover:bg-slate-600 " />
          </div>
        ) : (
          <List className="rounded-full h-8 w-8 p-1 hover:bg-slate-800 " />
        )}
      </div>
    </div>
  )
}
