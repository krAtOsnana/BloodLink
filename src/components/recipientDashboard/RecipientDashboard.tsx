"use client";
import { useState } from "react";
import { DonorInfo, RecipientInfo } from "@/types/ index";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ModeToggle";
import Logo from "@/components/Logo";
import DashboardHome from "./DashboardHome";
import DonorList from "./DonorList";
import RequestStatus from "./RequestStatus";
import Settings from "./Settings";

type View = "dashboard" | "donorList" | "requestStatus" | "settings";

const DonorSidebar = ({
  recipient,
  currentView,
  onViewChange
}: {
  recipient: RecipientInfo;
  currentView: View;
  onViewChange: (view: View) => void;
}) => (
  <Sidebar className="w-64 border-r border-dark-500 ">
    <SidebarHeader className="p-4 bg-red-500 dark:bg-red-700">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt={recipient.name} />
          <AvatarFallback className="bg-red-200 dark:bg-red-800 text-white">
            <Logo h={"40"} w={"40"} />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{recipient.name}</p>
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
                  currentView === "donorList"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("donorList")}
              >
                Donor's List
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={`hover:bg-red-500/10 hover:text-red-700 dark:hover:bg-red-700/10 dark:hover:text-red-500 ${
                  currentView === "requestStatus"
                    ? "bg-red-500/10 text-red-700 dark:bg-red-700/10 dark:text-red-500"
                    : ""
                }`}
                onClick={() => onViewChange("requestStatus")}
              >
                Request Status
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

const RecipientDashboardContent = ({
  recipient
}: {
  recipient: RecipientInfo;
}) => {
  const [currentView, setCurrentView] = useState<View>("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardHome recipient={recipient} />;
      case "donorList":
        return <DonorList />;
      case "requestStatus":
        return <RequestStatus />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome recipient={recipient} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-y-auto bg-gray-50 dark:bg-dark-400">
      {/* Sidebar */}
      <DonorSidebar
        recipient={recipient}
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

const RecipientDashboard = ({ recipient }: { recipient: RecipientInfo }) => {
  return (
    <SidebarProvider>
      <RecipientDashboardContent recipient={recipient} />
    </SidebarProvider>
  );
};

export default RecipientDashboard;
