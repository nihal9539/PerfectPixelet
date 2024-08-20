import Footer from '@/components/shared/Footer'
import MobileNav from '@/components/shared/MobileNav'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <MobileNav homepage={true}/>
        <div className='p-20 max-lg:px-2'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default layout