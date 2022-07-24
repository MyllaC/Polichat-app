import { Contact } from './Contact'
import { useState } from 'react'
import { chatsData } from './chatsData'
import { ContactHeader } from './ContactHeader'
import { ChatPerContact } from '../Chat/ChatPerContact'

export function Contacts() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex flex-col h-full">
      {!isOpen && (
        <div className="flex flex-col items-center bg-slate-900 rounded-lg border border-slate-500 ">
          <ContactHeader />
          <div className="w-full">
            {chatsData?.map((chat, i) => (
              <Contact
                toggle={() => setOpen(!isOpen)}
                key={i}
                chave={chat?.chave}
                img={chat?.img}
                contactName={chat?.contactName}
                message={chat?.message}
                user={chat?.user}
                date={chat?.date}
              />
            ))}
          </div>
        </div>
      )}
      {isOpen && <ChatPerContact toggle={() => setOpen(!isOpen)} />}
    </div>
  )
}
