import { useParams } from 'react-router-dom'
import { Contacts } from '../components/Contacts/Contacts'
import { ChatPerContact } from '../components/Chat/ChatPerContact'

export function Mobile() {
  const { chave } = useParams<{ chave: string }>()
  return (
    <div className="flex max-h-screen">
      {!chave ? (
        <div className="flex flex-1 max-h-screen">
          <Contacts />
        </div>
      ) : (
        <div className="m-4">
          <ChatPerContact />
        </div>
      )}
    </div>
  )
}
