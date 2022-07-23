import { Button } from './Links/Button'
import { Channel } from './Links/Channel'
import { Icons } from './Links/Icons'
import { Infos } from './Links/Infos'
import { Theme } from './Links/Theme'
import { UserIcon } from './Links/UserIcon'
import { MenuToggle } from './MenuToggle'
import { useState } from 'react'

export function LinksMobile() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div
      className={
        isOpen
          ? 'flex flex-col items-end z-99 h-auto absolute top-0 right-0 bg-slate-700 p-4 rounded-lg'
          : 'z-99 flex p-4'
      }
    >
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className="flex flex-col items-center gap-6 bg-slate-700 ">
          <UserIcon />
          <Infos />
          <Channel />
          <Button />
          <Icons />
          <Theme />
        </div>
      )}
    </div>
  )
}
