import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'

export const YandexMaps = ({...props}) => {

  return (
    <YMaps>
      <div className='w-full shadow-4 ymaps-across -mt-3'>
        <Map
          defaultState={{
            center: props.center,
            zoom: props.zoom,
            controls: []
          }}
          width='100%'
          height='300px'
        >
          <Placemark
            defaultGeometry={props.center}
            properties={{
              iconCaption: 'ПРО100-ТУР'
            }}
          />
          <ZoomControl options={{float:'right'}} />
        </Map>
      </div>
    </YMaps>
  )
}
 