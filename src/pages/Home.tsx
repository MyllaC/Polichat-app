import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from '../components/Navbar/DeviceSize'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

export function Home() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />
        {!isMobile && <Desktop />}
        {isMobile && <Mobile />}
      </main>
    </div>
  )
}
