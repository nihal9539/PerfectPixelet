import React from 'react'
import { ItemCircle } from './ItemCircle'

const TransformImage = () => {
  return (
    <div className="flex min-h-screen justify-between px-16 max-lg:px-0 items-center max-lg:flex-col">
    <div className="w-1/2 max-lg:w-full px-10 max-lg:px-2 text-center">
      <h1 className="text-5xl max-lg:text-2xl font-bold mb-10">
        Transform Images Instantly <br /> with AI Magic
      </h1>

      <p className="font-semibold text-lg">
        Elevate your photos effortlessly with Perfect Pixelate’s advanced
        AI tools. Whether you’re removing backgrounds, restoring old
        images, or making detailed adjustments, our technology delivers
        seamless, high-quality results in seconds just one click is all it
        takes.
      </p>
    </div>
    <div className="w-1/2 max-lg:w-full  overflow-hidden">
      <ItemCircle />
    </div>
  </div>  )
}

export default TransformImage