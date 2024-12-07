import React from "react";
import { UserPlus, Search, Heart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Register as a donor or requester",
  },
  {
    icon: Search,
    title: "Search or Post",
    description: "Search or post blood requests",
  },
  {
    icon: Heart,
    title: "Connect",
    description: "Connect and save lives!",
  },
];

export function Steps() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-dark-400">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl pt-4 font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-xs text-center relative group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 relative z-10 
                              transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg
                              before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
                              before:bg-red-600 before:rounded-full before:scale-0 before:opacity-0
                              before:transition-all before:duration-300 before:ease-in-out
                              group-hover:before:scale-100 group-hover:before:opacity-100">
                <step.icon className="w-8 h-8 text-white relative z-20 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 ease-in-out group-hover:text-red-500">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-900 dark:group-hover:text-white">
                {step.description}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-[4.5rem] w-[4.5rem]">
                  <div className="relative w-full">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:bg-red-800"></div>
                    <div className="absolute -right-1 -top-[3px] w-0 h-0 
                      border-t-[4px] border-t-transparent 
                      border-b-[4px] border-b-transparent 
                      border-l-[8px] border-l-red-500
                      transition-all duration-300 ease-in-out
                      group-hover:border-l-red-800">
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

