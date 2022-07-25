import { useParams } from 'react-router-dom'
import { Contacts } from '../components/Contacts/Contacts'
import { ChatPerContact } from '../components/Chat/ChatPerContact'

export function Mobile() {
  const { chave } = useParams<{ chave: string }>()
  return (
    <div className="flex">
      {!chave ? (
        <div className="flex flex-1 gap-6 m-4">
          <Contacts />
        </div>
      ) : (
        <div className="flex flex-1 gap-6 m-4">
          <ChatPerContact />
        </div>
      )}
    </div>
  )
}
