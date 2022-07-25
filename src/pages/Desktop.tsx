import { useParams } from 'react-router-dom'
import { Contacts } from '../components/Contacts/Contacts'
import { Chat } from '../components/Chat/Chat'
import { ChatPerContact } from '../components/Chat/ChatPerContact'

export function Desktop() {
  const { chave } = useParams<{ chave: string }>()
  return (
    <div className="flex flex-1">
      {!chave ? (
        <div className="flex flex-1 gap-6 m-4">
          <Contacts />
          <div className="flex-1">
            <Chat />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 gap-6 m-4">
          <Contacts />
          <div className="flex-1">
            <ChatPerContact />
          </div>
        </div>
      )}
    </div>
  )
}