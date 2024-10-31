'use client'

import { useRef } from 'react'
import Head from 'next/head'
import { useIntersectionObserver } from 'primereact/hooks'
import { classNames } from 'primereact/utils'
import { MainLayout } from './components/MainLayout'
import { SportIcons } from './components/SportIcons'
import { FeedbackSection } from './components/FeedbackSection'
import { ServiceSection } from './components/ServiceSection'
import { CarouselSection } from './components/CarouselSection'
import { AdvantageSection } from './components/AdvantageSection'
import { Reviews } from './components/Reviews'
import { Popular } from './components/Popular'

export default function Home() {
  const feedbackRef = useRef(null)
  const feedbackVisible = useIntersectionObserver(feedbackRef)

  return (
    <>
      <Head>
        <title>Организация спортивных сборов</title>
      </Head>
      <MainLayout>
        <CarouselSection />
        <main className='main'>
          <section className='relative w-full px-5 md:px-6 pt-5 text-lg'>
            <h2 className='text-800 mb-3'>Базы для спортивных и тренировочных сборов</h2>
            <p>Спортивные сборы в Краснодарском крае 2025. Компания <span className='font-medium'>«Про100-Тур»</span> предлагает детские лагеря и пансионаты для проведения спортивных и тренировочных сборов в Краснодарском крае.</p>
            <p>Сборы важны для достижения высоких результатов в спорте, так как позволяют улучшить технику, выносливость и избежать травм.</p>
            <p>Основной целью проведение учебно-тренировочных сборов на базе структурных подразделений является формирование систем знаний, умений, навыков в области выбранных видов спорта, повышение уровня физической подготовленности организма, организованный досуг в летний каникулярный период.</p>
          </section>
          <section className='relative w-full px-5 md:px-6 pt-5 text-lg'>
            <h2 className='text-800 mb-3'>О компании</h2>
            <p>Наша компания <span className='font-medium'>«Про100-Тур»</span> с 2016 года напрямую сотрудничает с отелями, туроператорами и комплексами России, что позволяет нам предлагать клиентам максимально удобные цены проведения мероприятий,
            в том числе спортивных сборов, а также выгодные и комфортные условия.</p>

            <p>Менеджеры <span className='font-medium'>«Про100-Тур»</span> – ваши надежные партнеры в процессе организации и проведения спортивных сборов, которые понимают важность ваших запросов, могут дать профессиональную консультацию по выбору спортивной базы и необходимых спортивных объектов, информируют о дополнительных услугах (трансфер, авиа и ЖД перевозки, аренда спортплощадок).</p>

            <p>Работа <span className='font-medium'>«Про100-Тур»</span> строится в диалоге с вами, исходя из пожеланий и стремлений клиентов. Мы ищем и находим новые решения по проведению спортивных сборов на Черноморском побережье по всем видам спорта. Нам важно, чтобы продукт, который мы вам предлагаем, соответствовал современным требованиям, цене и качеству.</p>
          </section>
          <AdvantageSection />
          <section className='relative w-full px-5 md:px-6 pt-5 text-lg'>
            <h2 className='text-800 mb-3'>Сотрудничество</h2>
            <p>Для объектов размещения со спортивной инфраструктурой компания <span className='font-medium'>«Про100-Тур»</span> предлагает разместить информацию о вашем объекте на наших интернет ресурсах. Готовы помочь в привлечении спортивных групп, команд, школ для организации и проведения спортивных сборов на вашей территории.</p>
            <p className='font-medium'>Предлагаем несколько вариантов сотрудничества:</p>
            <ul className='sectionlist'>
              <li><span className='ml-2'>Размещение на сайтах: PRO100-TOUR.SHOP, SPORT-SBOR-TOUR.RU, POEDEM-POLETIM.RU, BRONIRYEM.RU</span></li>
              <li><span className='ml-2'>Размещение на сайте PRO100-TOUR.SHOP с продвижением вашего объекта в контекстной рекламе и с помощью рассылки по клиентской базе.</span></li>
              <li><span className='ml-2'>Мы становимся вашим официальным и эксклюзивным представителем на рынке спортивного туризма. Берем на себя формирование продукта, компоновку пакета услуг.</span></li>
            </ul>
          </section>
          <Popular />
          <SportIcons />
          <section className='relative w-full px-5 md:px-6 pt-5 text-lg'>
            <h2 className='text-800 mb-3'>Особенности летних сборов</h2>
            <p>Летние сборы обычно проводятся на выезде, в местах, близких к природе. Часто это база отдыха на морском побережье или в лесной зоне – аналогом таких сборов являются детские спортивные лагеря.</p>
            <p className='font-medium'>Участие в летних сборах позволяет:</p>
            <ul className='sectionlist'>
              <li><span className='ml-2'>оздоровить организм ребенка</span></li>
              <li><span className='ml-2'>изучить углубленно технику</span></li>
              <li><span className='ml-2'>развивать физические качества под руководством тренера</span></li>
              <li><span className='ml-2'>наладить новые дружеские связи</span></li>
            </ul>
            <p>Отправив ребенка на летние сборы, родители решают сразу и проблему летнего отдыха, и летних тренировок – поездкой руководят тренеры секции, в которой занимается ребенок.</p>
            <p>За время поездки значительно улучшается спортивная подготовка ребенка – обстановка на сборах стимулирует стремление к успеху и усердие во время занятий. Кроме того, дети становятся более ответственными, самостоятельными, организованными и уверенными в себе.</p>
            <div className='flex align-items-start'>
              <i className="pi pi-info-circle mr-3" style={{fontSize:'2rem',color:'#054C89'}} />
              <p className='mt-0'>Стоимость поездки включает проживание, питание, сами тренировки и возможные дополнительные мероприятия (экскурсии, бассейн и пр.).</p>
            </div>
          </section>
          <section className='relative w-full px-5 md:px-6 pt-5 text-lg'>
            <h2 className='text-800 mb-3'>Что необходимо для поездки на летние сборы</h2>
            <p className='font-medium'>Для поездки не требуется много вещей. Необходимы:</p>
            <ul className='sectionlist'>
              <li><span className='ml-2'>спортивная форма, обувь для зала</span></li>
              <li><span className='ml-2'>плавки или купальник</span></li>
              <li><span className='ml-2'>предметы личной гигиены</span></li>
              <li><span className='ml-2'>две пары обуви для улицы</span></li>
              <li><span className='ml-2'>тапочки для помещения</span></li>
            </ul>
            <p>Повседневная одежда и теплые вещи выбираются самостоятельно в зависимости от погоды и места проведения сборов.</p>
            <p>Поскольку количество мест ограничено, записываться для поездки на сборы надо заранее – подробности вам надо уточнять у своего тренера. Стоимость зависит от длительности сборов, места проживания и дополнительных мероприятий.</p>
            <p>Проводимая в условиях летнего лагеря тренировка детей не утомляет ребенка, в отличие от городских условий – нет необходимости добираться к месту занятий, рядом новые товарищи и активный отдых на свежем воздухе.</p>
            <div className='flex align-items-start mb-3'>
              <i className="pi pi-info-circle mr-3" style={{fontSize:'2rem',color:'#054C89'}} />
              <p className='mt-0'>Не поехавшие на сборы дети обычно не занимаются тренировками в этот период, и это сказывается на их успехах (не каждый ребенок способен регулярно заниматься самостоятельно).</p>
            </div>
          </section>
          <ServiceSection bg={true} />
          <Reviews />
          <div ref={feedbackRef} className={classNames('w-full')}>
            <FeedbackSection visible={feedbackVisible} />
          </div>
        </main>
      </MainLayout>
    </>
  )
}
