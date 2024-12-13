import Link from "next/link";
import React from "react";
import { Heart, Battery, Activity, Brain, Shield, Users } from "lucide-react";
import Logo from "@/components/Logo";
import DonorRegisterform from "@/components/forms/DonorRegisterform";
import { getDonor } from "@/lib/actions/donor.actions";

const page = async ({
  params
}: {
  params: {
    donorId: string;
  };
}) => {
  const { donorId } = await params;

  const donor = await getDonor(donorId);
  //console.log(donor);

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
      <section className="hidden md:block">
        <InformativeCards />
      </section>
    </div>
  );
};

export default page;

const informativeCards = [
  {
    type: "Preparation",
    title: "Who Can Donate?",
    description:
      "Donors must be between 18 and 65 years old, weigh at least 50 kg, and be in good health.",
    icon: Users
  },
  {
    type: "Preparation",
    title: "Hydrate Well",
    description:
      "Drink at least 500ml of water 1-2 hours before donating to stay hydrated.",
    icon: Activity
  },
  {
    type: "Preparation",
    title: "Eat Iron-Rich Foods",
    description:
      "Consume iron-rich foods like spinach, beans, or fortified cereals before donation.",
    icon: Battery
  },
  {
    type: "Preparation",
    title: "Avoid Alcohol",
    description: "Avoid alcohol for 24 hours before your blood donation.",
    icon: Shield
  },
  {
    type: "Health Benefits",
    title: "Lower Heart Disease Risk",
    description:
      "Regular donation reduces iron levels, which may lower heart disease risk.",
    icon: Heart
  },
  {
    type: "Health Benefits",
    title: "Improved Blood Flow",
    description:
      "Donating blood improves circulation and reduces harmful iron deposits.",
    icon: Brain
  },
  {
    type: "Health Benefits",
    title: "Free Health Screening",
    description:
      "Each donation includes a free mini health check (blood pressure, hemoglobin, etc.).",
    icon: Activity
  },
  {
    type: "Safety Guidelines",
    title: "Donation Frequency",
    description:
      "Men can donate every 12 weeks, and women can donate every 16 weeks.",
    icon: Users
  },
  {
    type: "Safety Guidelines",
    title: "Know Your Blood Type",
    description:
      "Understanding your blood type helps ensure compatibility for recipients.",
    icon: Brain
  },
  {
    type: "Post-Donation Care",
    title: "Rest for 15 Minutes",
    description:
      "After donating, rest for 15 minutes and enjoy some refreshments to recover.",
    icon: Shield
  },
  {
    type: "Post-Donation Care",
    title: "Avoid Heavy Exercise",
    description:
      "Do not engage in strenuous activities or heavy lifting for 24 hours post-donation.",
    icon: Battery
  },
  {
    type: "Post-Donation Care",
    title: "Stay Hydrated",
    description: "Drink extra fluids for 24-48 hours after donating blood.",
    icon: Activity
  },
  {
    type: "General Info",
    title: "Blood Shelf Life",
    description:
      "Donated blood lasts for up to 42 days. Platelets expire in just 5 days!",
    icon: Brain
  },
  {
    type: "General Info",
    title: "One Donation Saves Lives",
    description:
      "One blood donation can save up to three lives through plasma, platelets, and red cells.",
    icon: Heart
  }
];

function InformativeCards() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Blood Donation Facts & Tips
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {informativeCards.map((item, index) => (
          <div
            key={index}
            className={`flex items-start p-6 bg-white dark:bg-dark-400 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 ${
              item.type === "Preparation"
                ? "border-l-4 border-blue-500"
                : item.type === "Health Benefits"
                ? "border-l-4 border-green-500"
                : item.type === "Safety Guidelines"
                ? "border-l-4 border-yellow-500"
                : "border-l-4 border-red-500"
            }`}
          >
            <item.icon className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
