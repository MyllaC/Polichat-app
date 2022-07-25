import { Contact } from './Contact'
import { useState } from 'react'
import { chatsData } from './chatsData'
import { ContactHeader } from './ContactHeader'
import { ChatPerContact } from '../Chat/ChatPerContact'

export function Contacts() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-slate-900 rounded-lg border border-slate-500 flex-1 flex flex-col ">
        <ContactHeader />
        <div className="justify-start overflow-y-auto h-[full]">
          {chatsData?.map((chat, i) => (
            <Contact
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
    </div>
  )
}
