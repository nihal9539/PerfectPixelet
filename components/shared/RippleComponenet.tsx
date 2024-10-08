import React from 'react'
import Ripple from '../magicui/ripple'

const RippleComponenet = () => {
  return (
    <div className="relative  flex h-[600px] w-full flex-col items-center justify-center  bg-background ">
      <p className="z-10 max-lg:text-2xl whitespace-pre-wrap text-center text-4xl font-medium tracking-tight text-white">
      Al Tools
      </p>
      <div className='block max-lg:hidden'>
      <Ripple  />
      </div>
    <div className="hidden max-lg:block">
    <Ripple mainCircleSize={80} />
    </div>
    </div>
  )
}

export default RippleComponenet