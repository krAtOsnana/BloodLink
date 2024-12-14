import React from 'react';
import { Meteors } from './ui/meteors';


export function CallToAction() {
  return (
    
    <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 ">
      
    <div className="container mx-auto px-6 text-center ">
    <Meteors className='bg-white before:from-white left-full'/>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 ">
        
        Every drop counts. Start your journey with BloodLink today!
      </h2>
      <button className="px-8 py-3 bg-white text-red-500 rounded-full hover:bg-dark-400 hover:text-white transition-colors text-lg font-semibold">
        Join BloodLink Now
      </button>
      
    </div>
    
  </section>
    
  );
}    