<<<<<<< HEAD
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, MapPin, Phone, Bell } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

interface BloodRecipient {
  id: string
  name: string
  address: string
  phoneNo: string
  bloodGroup: string
}

const mockRecipients: BloodRecipient[] = [
  {
    id: "1",
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    phoneNo: "(555) 123-4567",
    bloodGroup: "ANY"
  },
  {
    id: "2",
    name: "Jane Smith",
    address: "456 Elm St, Somewhere, USA",
    phoneNo: "(555) 987-6543",
    bloodGroup: "A-"
  },
  {
    id: "3",
    name: "Bob Johnson",
    address: "789 Oak Ave, Elsewhere, USA",
    phoneNo: "(555) 246-8135",
    bloodGroup: "B+"
  }
]

const RecipientList = () => {
  const [recipients, setRecipients] = useState<BloodRecipient[]>(mockRecipients)
  const { toast } = useToast()

  const sendNotification = (recipientId: string) => {
    // In a real application, this would send an actual notification
    toast({
      title: "Notification Sent",
      description: `A notification has been sent to recipient ${recipientId}.`,
      duration: 3000,
    })
  }

  return (
    <div className="space-y-8 ">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blood Recipient List
=======
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, MapPin, Phone, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface BloodRecipient {
  id: string;
  name: string;
  address: string;
  phoneNo: string;
  bloodGroup: string;
}

const mockRecipients = Array.from({ length: 50 }, (_, index) => ({
  id: (index + 1).toString(),
  name: `Recipient ${index + 1}`,
  address: `${index + 1} Example St, City${index % 10}, Country`,
  phoneNo: `+91${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "ANY"][
    Math.floor(Math.random() * 9)
  ]
}));

const RecipientList = () => {
  const [recipients] = useState<BloodRecipient[]>(mockRecipients);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const sendNotification = async (recipientId: string) => {
    const recipient = recipients.find((r) => r.id === recipientId);
    console.log(recipient);

    if (!recipient) {
      toast({
        title: "Error",
        description: "Recipient not found",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch("/api/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          recipientId: recipient?.id,
          name: recipient?.name,
          phoneNumber: recipient?.phoneNo,
          address: recipient?.address
        })
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Notification Sent",
          description: `WhatsApp message sent to ${recipient?.name}`
        });
      } else {
        throw new Error(data.error || "Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      toast({
        title: "Error",
        description: "Failed to send notification. Please try again.",
        variant: "destructive"
      });
    }
  };
// pagination **********************************
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipients = recipients.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(recipients.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blood Recipient List*
>>>>>>> d1c9bce (donor dashboard completed)
        </h1>
        <p className="text-red-700 dark:text-red-400">
          View the list of blood recipients and send notifications
        </p>
      </div>

<<<<<<< HEAD
      <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
=======
      <Card className="bg-white dark:bg-dark-400 border-dark-500">
>>>>>>> d1c9bce (donor dashboard completed)
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Recipients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
<<<<<<< HEAD
            {recipients.map((recipient) => (
=======
            {currentRecipients.map((recipient) => (
>>>>>>> d1c9bce (donor dashboard completed)
              <div
                key={recipient.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-100 dark:border-red-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 mb-2 sm:mb-0">
                  <div className="">
                    <p className="leading-8 font-medium text-gray-900 dark:text-white ">
                      {recipient.name}
                    </p>
                    <div className=" leading-6 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{recipient.address}</span>
                    </div>
                    <div className=" leading-6 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Phone className="h-4 w-4" />
                      <span>{recipient.phoneNo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                  <div className="flex items-center space-x-2 bg-red-100 dark:bg-red-800/30 px-3 py-1 rounded-full">
                    <Droplet className="h-4 w-4 text-red-700 dark:text-red-400" />
                    <span className="text-sm font-medium text-red-700 dark:text-red-400">
                      {recipient.bloodGroup}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => sendNotification(recipient.id)}
<<<<<<< HEAD
                    className="flex items-center space-x-2 hover:bg-green-700"
=======
                    className="flex items-center space-x-2 hover:bg-green-500"
>>>>>>> d1c9bce (donor dashboard completed)
                  >
                    <Bell className="h-4 w-4" />
                    <span>Notify</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    </div>
  )
}

export default RecipientList

=======
      {/* **************************** */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {/* **************************** */}
    </div>
  );
};

export default RecipientList;
>>>>>>> d1c9bce (donor dashboard completed)
