import {
  GitFork,
  Monitor,
  GlobeHemisphereWest,
  Megaphone
} from 'phosphor-react'

export function Icons() {
  return (
    <div id="icons" className="flex gap-2">
      <GitFork
        size={40}
        color="#f3f4f6"
        className="p-2 rounded-full cursor-pointer hover:bg-slate-600"
      />
      <Monitor
        size={40}
        color="#f3f4f6"
        className="p-2 rounded-full cursor-pointer hover:bg-slate-600"
      />
      <GlobeHemisphereWest
        size={40}
        color="#f3f4f6"
        className="p-2 rounded-full cursor-pointer hover:bg-slate-600"
      />
      <Megaphone
        size={40}
        color="#f3f4f6"
        className="p-2 rounded-full cursor-pointer hover:bg-slate-600"
      />
    </div>
  )
}
