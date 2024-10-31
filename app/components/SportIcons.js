import { Carousel } from 'primereact/carousel'

export const SportIcons = () => {
  const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 6
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
  ]
  const icons = [
    {image:'1.svg', name:'football'},
    {image:'2.svg', name:'football'},
    {image:'3.svg', name:'football'},
    {image:'4.svg', name:'football'},
    {image:'5.svg', name:'football'},
    {image:'6.svg', name:'football'},
    {image:'7.svg', name:'football'},
    {image:'8.svg', name:'football'},
    {image:'9.svg', name:'football'},
    {image:'10.svg', name:'football'},
    {image:'11.svg', name:'football'},
    {image:'12.svg', name:'football'},
    {image:'13.svg', name:'football'},
    {image:'14.svg', name:'football'},
    {image:'15.svg', name:'football'},
    {image:'16.svg', name:'football'},
    {image:'17.svg', name:'football'},
    {image:'18.svg', name:'football'},
    {image:'19.svg', name:'football'},
    {image:'20.svg', name:'football'},
    {image:'21.svg', name:'football'},
    {image:'22.svg', name:'football'},
    {image:'23.svg', name:'football'},
    {image:'24.svg', name:'football'},
    {image:'25.svg', name:'football'},
    {image:'26.svg', name:'football'},
    {image:'27.svg', name:'football'},
    {image:'28.svg', name:'football'},
    {image:'29.svg', name:'football'},
    {image:'30.svg', name:'football'},
    {image:'31.svg', name:'football'},
    {image:'32.svg', name:'football'},
    {image:'33.svg', name:'football'},
    {image:'34.svg', name:'football'},
    {image:'35.svg', name:'football'},
    {image:'36.svg', name:'football'},
    {image:'37.svg', name:'football'},
    {image:'38.svg', name:'football'},
    {image:'39.svg', name:'football'},
    {image:'40.svg', name:'football'},
    {image:'41.svg', name:'football'}
  ]

  const productTemplate = (product) => {
    return (
      <div className="text-center">
        <img src={`/sporticons/${product.image}`} alt={product.name} className="w-10" />
      </div>
    )
  }

  return (
    <div className="flex align-items-center justify-content-center px-6 py-5 my-4">
      <Carousel value={icons} numVisible={6} numScroll={6} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular showIndicators={false} />
    </div>
  )
}
 