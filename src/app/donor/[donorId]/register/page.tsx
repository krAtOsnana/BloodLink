

import Link from "next/link";
import React from "react";
import { Heart, Battery, Activity, Brain, Shield, Users } from "lucide-react";
import Logo from "@/components/Logo";
import DonorRegisterform from "@/components/forms/DonorRegisterform";
import { getDonor } from "@/lib/actions/donor.actions";

const page = async ( {params} : {
  params: {
    donorId: string;
  }
}) => {

  const {donorId} = await  params ;
  
  const donor = await getDonor(donorId);
  console.log(donor);
  
  return (
    <div className="grid md:grid-cols-[3fr_2fr] h-screen max-h-screen ">
      {/* Left Section */}
      <section className="container my-auto overflow-y-auto">
        <div className="sub-container max-w-[650px] mx-auto">
          <Link href="/">
            <div className="flex items-center space-x-0">
              {/* <Droplets className="h-8 w-8 text-red-500" /> */}
              <Logo h="8" w="8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                BloodLink
              </span>
            </div>
          </Link>
  
          <DonorRegisterform donor={donor} />
  
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 BloodLink
            </p>
          </div>
        </div>
      </section>
  
      {/* Right Section */}
      <section className="hidden md:block overflow-y-auto">
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
    <div className="p-8  ">
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


