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
        </h1>
        <p className="text-red-700 dark:text-red-400">
          View the list of blood recipients and send notifications
        </p>
      </div>

      <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Recipients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recipients.map((recipient) => (
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
                    className="flex items-center space-x-2 hover:bg-green-700"
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
    </div>
  )
}

export default RecipientList

