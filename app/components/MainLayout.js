import 'primeicons/primeicons.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { YandexMaps } from '../components/YandexMaps'

export function MainLayout({ children }) {

  return (
    <div  className='w-full'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <YandexMaps center={[44.692609, 37.779309]} zoom={15} />
    </div>
  )
}
