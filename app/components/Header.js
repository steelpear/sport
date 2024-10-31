import {useState} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { Divider } from 'primereact/divider'
import { Dialog } from 'primereact/dialog'
import { FeedbackForm } from '../components/FeedbackForm'

export const Header = () => {
  const router = useRouter()
  const [feedbackDialog, setFeedbackDialog] = useState(false)

    return (
      <div className='flex flex-column md:flex-row justify-content-between align-items-center px-4 pb-5 pt-4' style={{boxShadow: '0 4px 2px -2px lightgray'}}>
        <div>
          <Link href='/'><img src='/main-logo.png' alt='logo' className='w-16rem' /></Link>
        </div>
        <div>
          <h1 className='text-800 text-center font-semibold uppercase m-2'>Спортивные сборы и турниры</h1>
          <div className='hidden md:block'> {/* Hide on phone */}
            <Divider  className='my-1'>
              <div className='text-center text-2xl text-800 font-medium lowercase'>Подбор баз и спортивных объектов</div>
            </Divider>
          </div> {/* Hide on phone */}
        </div>
        <div className='pr-2 text-center md:text-left'>
          <div><i className='pi pi-phone mr-2' style={{fontSize:'1.2rem'}} /><a className='no-underline text-800 text-xl font-medium' href='tel:+79886698337'>+7 (988) 669-83-37</a></div>
          <div className='flex align-items-center my-3'><i className='pi pi-bell mr-2' style={{fontSize:'1.2rem'}} />{router.route === '/' ? <Scroll to="feedback" smooth={true} duration={500} className='cursor-pointer no-underline text-800 hover:text-blue-800 text-xl font-medium'>Заказать обратный звонок</Scroll> : <div className='cursor-pointer no-underline text-800 hover:text-blue-800 text-xl font-medium' onClick={() => setFeedbackDialog(true)}>Заказать обратный звонок</div>}</div>
          <div className='flex align-items-center justify-content-center md:justify-content-start'>
            <Link href='https://wa.me/79886698337' target='_blank'><img src='/whatsapp.svg' alt='whatsapp' className='w-3rem mr-1' /></Link>
            <Link href='https://t.me/+iADdW6tHtm4wNTNi' target='_blank'><img src='/telegram.svg' alt='whatsapp' className='w-3rem' /></Link>
          </div>
        </div>
        <Dialog
          visible={feedbackDialog}
          dismissableMask={true}
          onHide={() => {if (!feedbackDialog) return; setFeedbackDialog(false);}}
          content={() => <FeedbackForm />}
        />
      </div>
    )
  }
   