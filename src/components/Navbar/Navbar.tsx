import { Logo } from './Logo'
import { Links } from './Links'
import { LinksMobile } from './LinksMobile'
import { Polichat } from './Polichat'
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from './DeviceSize'

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <header className="h-16 flex justify-start items-center bg-slate-900 border-b border-slate-500 shadow-md gap-2">
      <div id="left-section" className="flex items-center ">
        <Logo />
        <Polichat />
      </div>

      {!isMobile && <Links />}

      {isMobile && <LinksMobile />}
    </header>
  )
}
