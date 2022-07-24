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
import { chatsData } from '../Contacts/chatsData'
import { Texts } from './Texts'

interface ChatProps {
  contactName: any
  img: any
}

export function ChatPerContact({ contactName, img }: ChatProps) {
  const [messages, setMessages] = useState(['oi'])

  function handleCreateNewMessage() {
    event.preventDefault()

    const newMessage = event.target.textareaValue.value

    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex flex-col h-full items-center bg-slate-900 rounded-lg border border-slate-500 ">
      <header className="flex w-full p-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowLeft size={25} />
          <img
            src={img}
            alt="contact photo"
            className="rounded-full w-12 h-12"
          />
          <p>{contactName}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="border border-rose-900 bg-rose-500 font-bold text-rose-900 p-1.5 rounded-full cursor-pointer hover:bg-rose-600">
            GH
          </span>
          <DotsThreeVertical size={32} />
        </div>
      </header>
      <main className="w-full flex flex-1 flex-col items-end justify-start border-t border-slate-500 bg-slate-600 overflow-auto  bg-cover">
        {messages?.map((line, i) => (
          <Texts key={i} content={line} />
        ))}
      </main>
      <footer className="flex-col w-full items-center justify-between border-t border-slate-500">
        <div>
          <form
            onSubmit={handleCreateNewMessage}
            className="w-full flex  gap-2 flex-col"
          >
            <div className="flex gap-1 pt-1">
              <WhatsappLogo size={18} color="#10b981" />
              <textarea
                name="textareaValue"
                placeholder="Aa"
                className="placeholder:italic placeholder:text-slate-400  block bg-transparent w-full  focus:outline-none focus:border-none sm:text-sm border border-slate-500 h-16"
              />
            </div>

            <div className="flex  items-center justify-between border-t border-slate-500">
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

                <button type="submit">
                  <PaperPlaneRight
                    size={34}
                    className="p-2 m-1 cursor-pointer justify-center items-center rounded-full text-sky-500 hover:bg-sky-500/10 transition-colors  ease-in-out"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </div>
  )
}
