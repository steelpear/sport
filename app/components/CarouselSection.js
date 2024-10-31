import { Carousel } from 'primereact/carousel'
import { Image } from 'primereact/image'

export const CarouselSection = () => {

  const photos = [
    {image:'1.jpg', name:'Спортивные сборы для команд'},
    {image:'2.jpg', name:'Детские спортивные лагеря'},
    {image:'3.jpg', name:'Развитие ребёнка'},
    {image:'4.jpg', name:'Страхование и медицинское сопровождение'},
    {image:'5.jpg', name:'Базы для спортивных и тренировочных сборов'},
    {image:'6.jpg', name:'Индивидуальный подход'}
  ]

  const productTemplate = (product) => {
    return (
      <div className='text-center relative'>
        <Image src={`/carousel/${product.image}`} alt={product.name} width='100%'/>
        <div className='hidden md:block'> {/* Hide on phone */}
          <div className='imgTextWrap'>
            <div className='text-6xl font-medium text-white'>{product.name}</div>
          </div>
        </div> {/* Hide on phone */}
      </div>
    )
  }

  return (
    <div className='relative w-full'>
      <Carousel value={photos} numVisible={1} numScroll={1} itemTemplate={productTemplate} circular showIndicators={false} showNavigators={true} className='sm:maincarouselnone maincarousel' />
    </div>
  )
}
 