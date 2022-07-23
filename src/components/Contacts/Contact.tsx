import { User, WhatsappLogo } from 'phosphor-react'
import { ChatPerContact } from '../Chat/ChatPerContact'
import { useState } from 'react'

interface ContactProps {
  img: string
  contactName: string
  date: string
  message: string
  user: string
  toggle: Function
}

export function Contact({
  img,
  contactName,
  date,
  message,
  user,
  toggle
}: ContactProps) {
  return (
    //border-l-4 border-transparent
    <div
      onClick={toggle}
      className="flex border justify-between gap-2 m-2 p-2  rounded-lg bg-slate-800 hover:border-l-4 hover:border-sky-500 hover:bg-slate-900"
    >
      <div className="flex items-center justify-center">
        <img
          src={img}
          alt="Imagem de um contato"
          className="rounded-full w-12 h-12"
        ></img>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="font-bold text-xs flex justify-between">
          <span>{contactName}</span>

          <span className="flex font-light text-[9px] gap-1 items-center h-4">
            <p>{date}</p>
            <WhatsappLogo size={12} />
          </span>
        </div>
        <span className="text-[10px]">{message}</span>

        <span className="flex font-light text-[10px] items-center gap-1">
          <User size={12} />
          {user}
        </span>
      </div>
    </div>
  )
}
