'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import { Mousewheel } from 'swiper/modules'
import { Experience } from '@/lib/types'

export function ExperienceSlider({ experiences }:{ experiences: Experience[] }) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={40}
      mousewheel={true}
      modules={[Mousewheel]}
      className="h-full flex content-center"
    >
      {experiences.map((exp: Experience, index: number) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div className="bg-background-elevated p-6 md:p-10 rounded-2xl shadow-lg w-full md:w-3/4 lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{exp.title}</h3>
            <span className="text-sm text-muted mb-4 block">{exp.timeframe}</span>
            <p className="text-base md:text-lg leading-relaxed">{exp.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}