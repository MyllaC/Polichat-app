import {
  ChatsCircle,
  ChatCircleText,
  Envelope,
  User,
  Funnel
} from 'phosphor-react'

export function ContactHeader() {
  return (
    <>
      <div className="border-b border-slate-500 h-12 w-full flex justify-around items-center">
        <ChatsCircle
          size={28}
          className="cursor-pointer hover:text-slate-600"
        />
        <ChatCircleText
          size={28}
          className="cursor-pointer hover:text-slate-600"
        />
        <Envelope size={28} className="cursor-pointer hover:text-slate-600" />
      </div>
      <form className="flex border-b w-full p-3 gap-2 justify-center border-slate-500">
        <label className="flex items-center border rounded bg-slate-700 pl-1 pr-2 border-slate-500 shadow-sm">
          <input
            type="text"
            placeholder="Gabriel Henrique"
            className="placeholder:italic placeholder:text-slate-400  block bg-transparent w-full  focus:outline-none focus:border-none sm:text-sm "
            size={16}
          />
          <span className="flex items-center pl-2 cursor-pointer hover:text-slate-600">
            X
          </span>
        </label>
        <button
          className="cursor-pointer border rounded w-8
         h-8 bg-slate-700 border-slate-500 flex items-center justify-center hover:bg-slate-500"
        >
          <User size={20} />
        </button>
        <button className="cursor-pointer border rounded w-8 h-8 bg-slate-700 flex items-center justify-center border-slate-500 hover:bg-slate-500">
          <Funnel size={20} />
        </button>
      </form>
    </>
  )
}
