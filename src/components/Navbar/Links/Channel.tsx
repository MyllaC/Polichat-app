import { WhatsappLogo, CaretDown } from 'phosphor-react'

export function Channel() {
  return (
    <div className="w-[260px] cursor-pointer flex gap-3 items-center justify-center text-gray-100 rounded hover:bg-slate-600">
      <WhatsappLogo size={22} color="#10b981" />
      <span>
        <p>Canal Canal SDR 0001</p>
        <div className="flex items-center">
          <span className="text-yellow-500 text-xl font-bold ">90</span>
          <span className="font-bold text-cyan-600 pr-1 text-m">/1000</span>
          <span className=" text-cyan-600 text-sm">Contatos-dia</span>
        </div>
      </span>

      <CaretDown size={22} color="#fff" />
    </div>
  )
}
