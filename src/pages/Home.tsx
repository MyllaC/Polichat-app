import { Contacts } from '../components/Contacts/Contacts'
import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { ChatPerContact } from '../components/Chat/ChatPerContact'
import { Chat } from '../components/Chat/Chat'
import { chatsData } from '../components/Contacts/chatsData'
import { useState } from 'react'

export function Home() {
  const { chave } = useParams<{ chave: string }>()
  function getData(URLKey: string) {
    const data = chatsData.find(data => data.chave === URLKey)
    return data
  }
  const Contact = getData(chave)

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />

        {!chave ? (
          <Contacts />
        ) : (
          <div className="flex flex-1 gap-6 m-4">
            <Contacts />
            <div className="flex-1">
              <ChatPerContact
                contactName={Contact?.contactName}
                img={Contact.img}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
