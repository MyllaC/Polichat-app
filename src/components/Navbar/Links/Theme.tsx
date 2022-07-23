import { SunDim, Moon } from 'phosphor-react'

export function Theme() {
  return (
    <div className="flex items-center justify-center gap-1">
      <SunDim size={32} color="#f3f4f6" />
      <div className="flex justify-end bg-sky-900 w-12 h-6 rounded-full">
        <div className="bg-sky-500  rounded-full h-6 w-6 cursor-pointer"></div>
      </div>

      <Moon size={32} color="#f3f4f6" />
    </div>
  )
}
