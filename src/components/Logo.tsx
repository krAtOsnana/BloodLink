import { Droplets } from 'lucide-react'
import React from 'react'

const Logo = ({w,h}:{w:string,h:string}) => {
  return (
    <div>
      <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl transition-all duration-300 ease-in-out group-hover:bg-red-500/30 group-hover:blur-4xl"></div>
              <div className="relative z-10 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
                <Droplets className={`w-${w} h-${h} text-red-500 transition-all duration-300 ease-in-out group-hover:text-red-800 `} />
                <Droplets className={`w-${w} h-${h} text-red-500 absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:animate-ping`} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Logo
