import Link from "next/link";
import React from "react";
import { Heart, Activity, Brain, Clock, Users, Zap, Repeat, Ambulance, Scissors, Target, Search, RefreshCw } from 'lucide-react';
import Logo from "@/components/Logo";
import { getRecipient } from "@/lib/actions/recipient.actions";
import RecipientRegisterForm from "@/components/forms/RecipientRegisterForm";

const page = async ({
  params
}: {
  params: {
    recepientId: string;
  };
}) => {
  const { recepientId } = await params;

  const recipient = await getRecipient(recepientId);


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

          <RecipientRegisterForm recipient={recipient} />

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
      type: "Recipient Stories",
      title: "Sarah's Recovery",
      description:
        "Sarah survived a car accident thanks to multiple blood transfusions during emergency surgery.",
      icon: Heart
    },
    {
      type: "Recipient Stories",
      title: "Michael's Battle",
      description:
        "Michael, a leukemia patient, receives regular transfusions as part of his treatment plan.",
      icon: Activity
    },
    {
      type: "Transfusion Facts",
      title: "Types of Transfusions",
      description:
        "Patients may receive whole blood, red cells, platelets, or plasma depending on their needs.",
      icon: Brain
    },
    {
      type: "Transfusion Facts",
      title: "Frequency of Need",
      description:
        "Every two seconds, someone in the U.S. needs blood, highlighting the constant demand.",
      icon: Clock
    },
    {
      type: "Impact",
      title: "Lives Saved",
      description:
        "One donation can save up to three lives through various blood components.",
      icon: Users
    },
    {
      type: "Impact",
      title: "Cancer Treatment",
      description:
        "Many cancer patients require blood products during chemotherapy or radiation treatments.",
      icon: Zap
    },
    {
      type: "Medical Conditions",
      title: "Sickle Cell Disease",
      description:
        "Patients with sickle cell disease often need frequent blood transfusions to manage their condition.",
      icon: Activity
    },
    {
      type: "Medical Conditions",
      title: "Thalassemia",
      description:
        "People with thalassemia may require lifelong, regular blood transfusions for survival.",
      icon: Repeat
    },
    {
      type: "Emergency Care",
      title: "Trauma Patients",
      description:
        "Severe trauma victims can require massive transfusions, sometimes needing 100 pints or more.",
      icon: Ambulance
    },
    {
      type: "Emergency Care",
      title: "Surgical Procedures",
      description:
        "Many complex surgeries wouldn't be possible without the availability of blood products.",
      icon: Scissors
    },
    {
      type: "Blood Types",
      title: "Universal Donors",
      description:
        "O-negative blood is universal and can be given to patients of all blood types in emergencies.",
      icon: Target
    },
    {
      type: "Blood Types",
      title: "Rare Blood Types",
      description:
        "Patients with rare blood types rely on a small pool of compatible donors for their transfusions.",
      icon: Search
    },
    {
      type: "Donation Impact",
      title: "Ongoing Need",
      description:
        "Blood has a limited shelf life, requiring a constant supply to meet patient needs.",
      icon: RefreshCw
    },
    {
      type: "Donation Impact",
      title: "Community Support",
      description:
        "Blood recipients often express deep gratitude for the anonymous donors who saved their lives.",
      icon: Heart
    }
  ];
  
  function InformativeCards() {
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Blood Recipient Stories & Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {informativeCards.map((item) => (
            <div
              key={item.title}
              className={`flex items-start p-6 bg-white dark:bg-dark-400 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 ${
                item.type === "Recipient Stories"
                  ? "border-l-4 border-red-500"
                  : item.type === "Transfusion Facts"
                  ? "border-l-4 border-blue-500"
                  : item.type === "Impact"
                  ? "border-l-4 border-green-500"
                  : item.type === "Medical Conditions"
                  ? "border-l-4 border-purple-500"
                  : item.type === "Emergency Care"
                  ? "border-l-4 border-yellow-500"
                  : item.type === "Blood Types"
                  ? "border-l-4 border-pink-500"
                  : "border-l-4 border-gray-500"
              }`}
            >
              <item.icon className="w-6 h-6 mr-4 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  
  