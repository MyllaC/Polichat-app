import { User, WhatsappLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface ContactProps {
  chave: string
  img: string
  contactName: string
  date: string
  message: string
  user: string
}

export function Contact({
  chave,
  img,
  contactName,
  date,
  message,
  user
}: ContactProps) {
  return (
    //border-l-4 border-transparent
    <Link
      to={`/chat/${chave}`}
      className="flex border justify-between gap-2 m-3 p-2  rounded-lg bg-slate-800 hover:border-l-4 hover:border-sky-500 hover:bg-slate-900"
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
    </Link>
  )
}
