import DonorForm from "@/components/forms/DonorForm";

import Link from "next/link";
import React from "react";
import { Heart, Battery, Activity, Brain, Shield, Users } from "lucide-react";
import Logo from "@/components/Logo";
import RecipientForm from "@/components/forms/RecipientForm";

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

          <RecipientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 BloodLink
            </p>
          </div>
        </div>
      </section>

      <section className="hidden md:block overflow-y-auto ">
        <BloodRecipientStories />
      </section>
    </div>
  );
};

export default page;

const recipients = [
  {
    icon: Heart,
    name: "Sarah",
    story: "Survived a car accident thanks to blood transfusions",
    image: "/recipientStories/sarah.jpg"
  },
  {
    icon: Activity,
    name: "Michael",
    story: "Recovered from leukemia with regular blood transfusions",
    image: "/recipientStories/michael.jpg"
  },
  {
    icon: Battery,
    name: "Emily",
    story: "Born prematurely, blood donations helped save her life",
    image: "/recipientStories/emily.jpg"
  },
  {
    icon: Brain,
    name: "David",
    story: "Underwent major surgery, blood transfusions were crucial",
    image: "/recipientStories/david.jpg"
  },
  {
    icon: Shield,
    name: "Lisa",
    story: "Manages chronic anemia with regular blood transfusions",
    image: "/recipientStories/lisa.jpg"
  },
  {
    icon: Users,
    name: "John",
    story: "Survived a workplace accident thanks to blood donors",
    image: "/recipientStories/john.jpg"
  }
];

function BloodRecipientStories() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lives We have Touched</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {recipients.map((recipient, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-6 bg-white dark:bg-dark-400 rounded-lg shadow-lg hover:bg-red-100 dark:hover:bg-red-600 transition duration-200 ease-in-out transform hover:-translate-y-1"
          >
            <img
              src={recipient.image}
              alt={recipient.name}
              height={1000}
              width={1000}
              className="object-cover w-full h-48 rounded-lg mb-4"
            />
            <div className="flex items-start space-x-4">
              <recipient.icon className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {recipient.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {recipient.story}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



