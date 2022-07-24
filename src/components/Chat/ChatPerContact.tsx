import { iconsChatData } from './IconsChatData'
import { IconsChat } from './IconsChat'
import {
  DotsThreeVertical,
  ArrowLeft,
  WhatsappLogo,
  TextT,
  DeviceMobile,
  PaperPlaneRight
} from 'phosphor-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export function ChatPerContact({ toggle }: any) {
  return (
    <div className="flex h-full flex-col items-center bg-slate-900 rounded-lg border border-slate-500 ">
      <header className="flex w-full p-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowLeft size={25} onClick={toggle} />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="rounded-full w-12 h-12"
          />
          <p>Gustavo</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="border border-rose-900 bg-rose-500 font-bold text-rose-900 p-1.5 rounded-full cursor-pointer hover:bg-rose-600">
            GH
          </span>
          <DotsThreeVertical size={32} />
        </div>
      </header>
      <main className="flex w-full h-full max-h-screen p-2 items-center justify-between border-t border-slate-500 bg-[url('https://images.unsplash.com/photo-1572557798994-41431698dc8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]  bg-cover overflow-x-auto">
        <div className="overflow-y-auto">{newMessage}</div>
      </main>
      <footer className="flex-col w-full items-center justify-between border-t border-slate-500">
        <div className="flex p-2 gap-2">
          <WhatsappLogo size={18} color="#10b981" />
          <form className="w-full">
            <input
              type="text"
              placeholder="Aa"
              className="placeholder:italic placeholder:text-slate-400  block bg-transparent w-full  focus:outline-none focus:border-none sm:text-sm border border-slate-500 h-16"
            ></input>
          </form>
        </div>
        <div className="flex items-center justify-between border-t border-slate-500">
          <div className="flex ">
            <TextT
              size={32}
              className="p-2 cursor-pointer justify-center items-center rounded-full hover:bg-sky-500/10 transition-colors  ease-in-out"
            />
            <DeviceMobile
              size={32}
              className="p-2 cursor-pointer justify-center items-center rounded-full hover:bg-sky-500/10 transition-colors  ease-in-out"
            />
          </div>
          <div className="flex justify-center items-center">
            {iconsChatData?.map(({ name, size }, i) => (
              <IconsChat key={i} name={name} size={size} />
            ))}

            <PaperPlaneRight
              size={34}
              className="p-2 m-1 cursor-pointer justify-center items-center rounded-full text-sky-500 hover:bg-sky-500/10 transition-colors  ease-in-out"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
