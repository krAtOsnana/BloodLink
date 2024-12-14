import React from 'react';
import { Droplets } from 'lucide-react';
import Link from 'next/link';
import { Meteors } from './ui/meteors';
import Logo from './Logo';

export function Hero() {
  return (
    <section className="pt-32  pb-24 bg-gradient-to-br from-red-50 to-white dark:from-dark-500 dark:to-dark-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Meteors/>
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Connecting Lives,{' '}
              <span className="text-red-500">One Drop at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join a community of life-savers. Donate blood or find a donor with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donor" className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 ease-in-out">
                Become a Donor
              </Link>
              <Link href="/recipient" className="px-8 py-3 border-2 border-dark-500 text-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 ease-in-out">
                Request Blood
              </Link>
            </div>
          </div>
          <Logo h="64" w="64"/>
          {/* <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl transition-all duration-300 ease-in-out group-hover:bg-red-500/30 group-hover:blur-4xl"></div>
              <div className="relative z-10 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
                <Droplets className="w-64 h-64 text-red-500 transition-all duration-300 ease-in-out group-hover:text-red-800" />
                <Droplets className="w-64 h-64 text-red-500 absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:animate-ping" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

