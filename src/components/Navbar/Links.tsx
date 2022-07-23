import { Button } from './Links/Button'
import { Channel } from './Links/Channel'
import { Icons } from './Links/Icons'
import { Infos } from './Links/Infos'
import { Theme } from './Links/Theme'
import { UserIcon } from './Links/UserIcon'

export function Links() {
  return (
    <div className="flex w-full items-center gap-10 pr-3">
      <UserIcon />
      <Infos />
      <Channel />
      <Button />
      <Icons />
      <Theme />
    </div>
  )
}
