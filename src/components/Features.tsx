import React from 'react';
import { Search, FileText, Heart, Smile } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Find Blood Donors Quickly',
    description: 'Search for nearby donors by blood type and location.',
  },
  {
    icon: FileText,
    title: 'Easily Make Requests',
    description: 'Post a blood request for yourself or loved ones.',
  },
  {
    icon: Heart,
    title: 'Save Lives',
    description: 'Join a growing network of compassionate donors.',
  },
  {
    icon: Smile,
    title: 'User-Friendly Experience',
    description: 'Intuitive design with light/dark mode support.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-dark-400 border-b border-gray-800 mx-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-dark-500 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}