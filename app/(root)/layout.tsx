import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className='p-20 max-lg:px-2'>
            {children}
        </div>
    </div>
  )
}

export default layout