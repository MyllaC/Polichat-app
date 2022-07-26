import { Contact } from './Contact'
import { chatsData } from './chatsData'
import { ContactHeader } from './ContactHeader'

export function Contacts() {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-500 flex flex-col h-full ">
      <ContactHeader />
      <div className="justify-start overflow-y-auto h-[full] scrollbar-thin scrollbar-thumb-rounded scrollbar-track-slate-900 scrollbar-thumb-teal-700 m-[2px]">
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
  )
}
