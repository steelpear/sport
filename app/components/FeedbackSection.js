import { Element } from 'react-scroll'
import { FeedbackForm } from '../components/FeedbackForm'

export const FeedbackSection = ({...params}) => {
    return (
      <Element name="feedback" className='relative feedback-across w-full bg-center bg-cover bg-no-repeat px-3 md:px-8 pt-6 pb-8 md:pb-6 mb-6 xl:-mb-4 mt-4' style={{backgroundImage:'url(/feedback_section1.jpg)'}}>
        <div className='grid grid-nogutter w-full'>
          <div className="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-4">
            <FeedbackForm />
          </div>
          <div className='hidden md:block col-12 sm:col-6 md:col-6 lg:col-6 xl:col-4'> {/* Hide on phone */}
            <img src="/arrow.svg" alt="arrow" className={params.visible ? 'arrow blinker' : 'arrow'} />
          </div> {/* Hide on phone */}
        </div>
      </Element>
    )
  }
   