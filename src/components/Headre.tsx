'use client'
import React from 'react';
import { Droplets, Moon, Sun } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import Logo from './Logo';

export function Header() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <header className="fixed w-full top-0 bg-white/80 dark:bg-dark-400 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">

          <Logo h="9" w="9"  />
          {/* <div className="relative group">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl transition-all duration-300 ease-in-out group-hover:bg-red-500/30 group-hover:blur-4xl"></div>
              <div className="relative z-10 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
                <Droplets className="w-9 h-9 text-red-500 transition-all duration-300 ease-in-out group-hover:text-red-800" />
                <Droplets className="w-9 h-9 text-red-500 absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:animate-ping" />
              </div>
            </div> */}


            <span className="text-xl font-bold text-gray-900 dark:text-white">BloodLink</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works"  className="hover:scale-105 hover:font-semibold transition-transform text-gray-600 hover:text-red-500 dark:text-gray-300">How It Works</Link>
            <Link href="/donor" className="hover:scale-105 hover:font-semibold transition-transform text-gray-600 hover:text-red-500 dark:text-gray-300">Donate Blood</Link>
            <Link href="/recipient" className="hover:scale-105 hover:font-semibold transition-transform text-gray-600 hover:text-red-500 dark:text-gray-300">Request Blood</Link>
            <button className="px-4 py-2 text-red-500 border border-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
              Login
            </button>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}