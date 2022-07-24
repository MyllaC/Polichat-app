import { BrowserRouter } from 'react-router-dom'
import { Chat } from './components/Chat/Chat'
import { Contacts } from './components/Contacts/Contacts'
import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './pages/home'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
