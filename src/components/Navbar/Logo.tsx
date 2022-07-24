import PoliLogo from '../../assets/logo.png'

export function Logo() {
  return (
    <div className="flex align-center w-[70px] border-r  border-slate-500 cursor-pointer">
      <img src={PoliLogo} alt="logo_poli" className="p-2" />
    </div>
  )
}
