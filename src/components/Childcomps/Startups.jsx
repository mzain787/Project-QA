import React from 'react'
import"../Home/Home.css"
import startup1 from "../../assets/images/startup1.svg"
import startup2 from "../../assets/images/startup2.svg"
import startup3 from "../../assets/images/startup3.svg"
import startup4 from "../../assets/images/startup4.svg"
import startup6 from "../../assets/images/startup6.svg"
import Image from 'next/image'
const Startups = () => {
  return (
    <section className="startups p-0">
    <div className="hero-startups flex flex-wrap justify-center gap-10 w-full mb-20">
      <Image src={startup6} alt="startup1-img" className='w-full'/>
      <Image src={startup2} alt="startup2-img" className='w-full'/>
      <Image src={startup3} alt="startup3-img" className='w-full'/>
      <Image src={startup1} alt="startup4-img" className='w-full'/>
      <Image src={startup4} alt="startup6-img" className='w-full'/>
      </div>
    </section>
  )
}

export default Startups