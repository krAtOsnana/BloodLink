"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, MapPin, Phone, Bell } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface BloodRecipient {
  id: string
  name: string
  address: string
  phoneNo: string
  bloodGroup: string
}

const mockDonors = Array.from({ length: 50 }, (_, index) => ({
  id: (index + 1).toString(),
  name: `Donor ${index + 1}`,
  address: `${index + 1} Example St, City${index % 10}, Country`,
  phoneNo: `+91${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "ANY"][Math.floor(Math.random() * 9)]
}));

const RecipientList = () => {
  const [donors] = useState<BloodRecipient[]>(mockDonors)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const { toast } = useToast()

  const sendNotification = async (recipientId: string) => {
    const donor = donors.find(r => r.id === recipientId)
    console.log(donor);
    
    if (!donor) {
      toast({
        title: "Error",
        description: "Recipient not found",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientId: donor?.id,
          name: donor?.name,
          phoneNumber: donor?.phoneNo,
          address: donor?.address
        }),
      })

      const data = await response.json()
      console.log(data);
      
      if (data.success) {
        toast({
          title: "Notification Sent",
          description: `WhatsApp message sent to ${donor?.name}`,
        })
      } else {
        throw new Error(data.error || 'Failed to send notification')
      }
    } catch (error) {
      console.error('Error sending notification:', error)
      toast({
        title: "Error",
        description: "Failed to send notification. Please try again.",
        variant: "destructive",
      })
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentRecipients = donors.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(donors.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blood Donor's List*
        </h1>
        <p className="text-red-700 dark:text-red-400 tracking-[0.6px]">
          View the list of blood donor's and send notifications
        </p>
      </div>

      <Card className="bg-white dark:bg-dark-400 border-dark-500">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Donor's
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {currentRecipients.map((recipient) => (
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
                    className="flex items-center space-x-2 hover:bg-green-500"
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
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
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default RecipientList

