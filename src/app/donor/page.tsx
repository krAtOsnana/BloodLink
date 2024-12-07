import DonorForm from "@/components/forms/DonorForm";
import { Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, Battery, Activity, Brain, Shield, Users } from "lucide-react";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 h-screen max-h-screen overflow-hidden">
      <section className="container my-auto overflow-y-auto">
        <div className="sub-container max-w-[496px]">
          <Link href="/">
            <div className="flex items-center space-x-0">
              {/* <Droplets className="h-8 w-8 text-red-500" /> */}
              <Logo h="8" w="8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                BloodLink
              </span>
            </div>
            
          </Link>

          <DonorForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 BloodLink
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-y-auto ">
        <DonationBenefits />
      </section>
    </div>
  );
};

export default page;

const benefits = [
  {
    icon: Heart,
    title: "Saves Lives",
    description: "One donation can save up to 3 lives",
    image: "/donationBenefits/saveLife3.jpg" // Replace with actual image path
  },
  {
    icon: Activity,
    title: "Health Check",
    description: "Free mini physical and blood tests",
    image: "/donationBenefits/healthCheck.jpg" // Replace with actual image path
  },
  {
    icon: Battery,
    title: "Reduces Health Risks",
    description: "Lower risk of heart disease and cancer",
    image: "/donationBenefits/healthRisk.jpg" // Replace with actual image path
  },
  {
    icon: Brain,
    title: "Mental Well-being",
    description: "Psychological benefits from helping others",
    image: "/donationBenefits/mentalWellBeing.jpg" // Replace with actual image path
  },
  {
    icon: Shield,
    title: "Improved Health",
    description: "Stimulates blood cell production",
    image: "/donationBenefits/rbc.jpg" // Replace with actual image path
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Join a community of lifesavers",
    image: "/donationBenefits/community2.jpg" // Replace with actual image path
  }
];

function DonationBenefits() {
  return (
    <div className="p-8">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-6 bg-white dark:bg-dark-400 rounded-lg shadow-lg hover:bg-red-100 dark:hover:bg-red-600 transition duration-200 ease-in-out transform hover:-translate-y-1"
          >
            <img
              src={benefit.image}
              alt={benefit.title}
              height={1000}
              width={1000}
              className="object-cover w-full h-48 rounded-lg mb-4"
            />
            <div className="flex items-start space-x-4">
              <benefit.icon className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


