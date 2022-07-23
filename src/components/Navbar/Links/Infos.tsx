import { CaretDown } from 'phosphor-react'

export function Infos() {
  return (
    <div className="cursor-pointer flex gap-2 items-center justify-center w-20 rounded text-gray-100 hover:bg-slate-600">
      <p>Poli</p>
      <CaretDown size={20} color="#f3f4f6" />
    </div>
  )
}
