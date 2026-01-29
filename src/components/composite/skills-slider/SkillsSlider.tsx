'use client'
import { SkillDomain } from "@/lib/types"
import Marquee from "react-fast-marquee"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export function SkillsSlider({ skills } : { skills: SkillDomain[]}) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      speed={500}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
    >
      {skills.map((domain, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center gap-4">
            <h3>{domain.name}</h3>
            <p className="text-muted">{domain.subheadline}</p>

            <Marquee speed={20} autoFill={true} direction="right">
              {domain.skills.map((skill, j) => (
                <div key={j} className="p-4 rounded-lg transition-transform cursor-pointer w-full flex content-center">
                    <skill.icon size={48} className="text-foreground-primary" />
                  </div>
              ))}
            </Marquee>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}