import { Contacts } from '../components/Contacts/Contacts'
import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { ChatPerContact } from '../components/Chat/ChatPerContact'
import { Chat } from '../components/Chat/Chat'

export function Home() {
  const { chave } = useParams<{ chave: string }>()

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />
        <div className="flex-1 m-4">
          
          <Contacts />
        </div>
      </main>
    </div>
  )
}
