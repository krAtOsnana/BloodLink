"use client";
import { useState } from "react";
import { DonorInfo } from "@/types/ index";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ModeToggle";
import Logo from "@/components/Logo";
import DashboardHome from "./DashboardHome";
import DonationHistory from "./DonationHistory";
import ScheduleDonation from "./ScheduleDonation";
import Settings from "./Setting";
import RecipientList from "./RecipientList";

type View = "dashboard" | "history" | "schedule" | "settings" | "bloodRequest";

const DonorSidebar = ({
  donor,
  currentView,
  onViewChange
}: {
  donor: DonorInfo;
  currentView: View;
  onViewChange: (view: View) => void;
}) => (
  <Sidebar className="w-64 border-r border-dark-500 ">
    <SidebarHeader className="p-4 bg-red-500 dark:bg-red-700">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt={donor.name} />
          <AvatarFallback className="bg-red-200 dark:bg-red-800 text-white">
            <Logo h={"40"} w={"40"} />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{donor.name}</p>
          <p className="text-sm text-red-100 dark:text-red-200">
            {donor.bloodType} Donor
          </p>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        {/* <SidebarGroupLabel className="text-gray-900 dark:text-white">
          Menu
        </SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "dashboard"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("dashboard")}
              >
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "bloodRequest"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("bloodRequest")}
              >
                Blood Request
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "history"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("history")}
              >
                Donation History
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "schedule"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("schedule")}
              >
                Schedule Donation
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "settings"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("settings")}
              >
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarHeader className="p-4">
      <ModeToggle />
    </SidebarHeader>
  </Sidebar>
);

const DonorDashboardContent = ({ donor }: { donor: DonorInfo }) => {
  const [currentView, setCurrentView] = useState<View>("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardHome donor={donor} />;
      case "history":
        return <DonationHistory />;
      case "bloodRequest":
        return <RecipientList/>
      case "schedule":
        return <ScheduleDonation />;
      case "settings":
        return <Settings />;

      default:
        return <DashboardHome donor={donor} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-y-auto bg-gray-50 dark:bg-dark-400">
      {/* Sidebar */}
      <DonorSidebar
        donor={donor}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      {/* Main content */}
      <main className="flex-grow overflow-y-auto p-8">
        <div className="max-w-full mx-auto">
          {/* Render the selected view */}
          <div className="flex-grow  p-8 ">{renderView()}</div>
        </div>
      </main>
    </div>
  );
};

const DonorDashboard = ({ donor }: { donor: DonorInfo }) => {
  return (
    <SidebarProvider>
      <DonorDashboardContent donor={donor} />
    </SidebarProvider>
  );
};

export default DonorDashboard;
