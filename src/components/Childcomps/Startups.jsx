import React from 'react'
import"../Home/Home.css"
import startup1 from "../../assets/images/alien-tech.png"
import startup2 from "../../assets/images/app-ninja.png"
import startup3 from "../../assets/images/lightmedia.png"
import startup4 from "../../assets/images/forward.png"
import startup5 from "../../assets/images/codeguy.png"
import startup6 from "../../assets/images/starapp.png"
import Image from 'next/image'
const Startups = () => {
  return (
    <section className="startups p-0">
    <div className="hero-startups flex flex-wrap justify-center gap-4 w-full">
      <Image src={startup1} alt="startup1-img" className='w-full'/>
      <Image src={startup2} alt="startup2-img" className='w-full'/>
      <Image src={startup3} alt="startup3-img" className='w-full'/>
      <Image src={startup4} alt="startup4-img" className='w-full'/>
      <Image src={startup5} alt="startup5-img" className='w-full'/>
      <Image src={startup6} alt="startup6-img" className='w-full'/>
      </div>
    </section>
  )
}

export default Startups