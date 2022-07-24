import Logo from '../../assets/logo.png'

export function Chat() {
  return (
    <div className="w-full h-full rounded-lg  border border-slate-500 flex items-center justify-center">
      <img src={Logo} alt="logo_poli" className="p-2 w-40 h-40 opacity-20" />
    </div>
  )
}
