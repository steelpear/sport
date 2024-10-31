import { Divider } from 'primereact/divider'
import { Card } from 'primereact/card'

export const ServiceSection = ({...params}) => {
  const service = [
    {
      title: 'Организация поездок для спортивных команд',
      icon: '/serviceicons/travel.svg',
      list: ['Концепция и план мероприятия','Программа проживания','Регистрация участников','Продвижение мероприятия','Юридическая поддержка','Организация мероприятия']
    },
    {
      title: 'Подбор спортивных баз и объектов',
      icon: '/serviceicons/assortment.svg',
      list: ['Организация тренировок','Подбор отелей','Инвентарь и оборудование','Консультации','Подбор детского лагеря']
    },
    {
      title: 'Страхование и медицинское сопровождение команд',
      icon: '/serviceicons/medic.svg',
      list: ['Участие в сборах и соревнованиях','Защитить жизнь и здоровье','Финансовая безопасность','Варианты срока страхования','Действует по России и за рубежом','Покрывает риски получения травмы']
    },
    {
      title: 'Бронирование авиа и ж/д билетов, трансферов',
      icon: '/serviceicons/booking.svg',
      list: ['Авиакомпании России','Регулярные и чартерные рейсы','Эконом и бизнес-класс','Ж/Д билеты по РФ и СНГ','Аренда автомобиля','Трансфер']
    },
    {
      title: 'Организация сборов, турниров и соревнований под ключ',
      icon: '/serviceicons/ball.svg',
      list: ['Комфортные условия','Качественное питание','Подбор места размещения','Разумные цены','Экономия времени','Индивидуальный подход']
    },
    {
      title: 'Плюсы покупки тура онлайн',
      icon: '/serviceicons/buy.svg',
      list: ['Онлайн доступен в любое время','Экономия времени на посещение офиса','Большой выбор объектов и туров в одном месте','Покупайте тур не выходя из дома, оплачивая его банковской картой','Не требуется искать место для парковки']
    }
  ]
    return (
        <div className='relative w-full bg-center bg-cover bg-no-repeat px-4 md:px-8 py-6 mb-3 mt-1' style={params.bg ? {backgroundImage: 'url(/volleyball.jpg)'} : {background: 'none'}}>
        {!params.bg ? <Divider align="center">
          <div className='text-700 mx-1 font-semibold text-5xl'>Наши услуги</div>
        </Divider> : <div className='text-700 mb-5 font-medium text-white text-center text-5xl'>Наши услуги</div>}
        <div className='grid flex justify-content-center'>
          {service.map((item,index) => {
            return (
            <div className="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-4" key={index}>
              <Card className={params.bg ? 'shadow-2 border-round-xl pt-4' : 'shadow-none border-round-xl'}>
                <div className='text-center mb-1'>
                  <img src={item.icon} alt={item.title} height='100' />
                </div>
                <div className='text-700 font-medium text-center text-lg line-height-1 mb-2'>{item.title}</div>
                <div className='px-4 pb-4'>
                  {item.list.map((item,index) => {
                    return (
                      <div key={index}><i className="pi pi-star mr-2" style={{ fontSize: '.8rem' }} /><span className='text-sm'>{item}</span></div>
                    )
                  })}
                </div>
              </Card>
            </div>
            )
          })}
        </div>
      </div>
    )
  }
   