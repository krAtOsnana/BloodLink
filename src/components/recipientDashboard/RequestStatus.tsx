"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Droplet, Clock } from 'lucide-react'

// Mock data for blood requests
const mockRequests = [
  { 
    id: 1, 
    date: "2023-06-15", 
    bloodType: "A+", 
    status: "Pending", 
    hospital: "City Hospital",
    recipient: "John Doe",
    address: "123 Main St, Cityville, ST 12345",
    phoneNo: "+1 (555) 123-4567"
  },
  { 
    id: 2, 
    date: "2023-06-10", 
    bloodType: "O-", 
    status: "Fulfilled", 
    hospital: "Central Clinic",
    recipient: "Jane Smith",
    address: "456 Oak Ave, Townsburg, ST 67890",
    phoneNo: "+1 (555) 987-6543"
  },
  { 
    id: 3, 
    date: "2023-06-05", 
    bloodType: "B+", 
    status: "Pending", 
    hospital: "St. Mary's Hospital",
    recipient: "Bob Johnson",
    address: "789 Pine Rd, Villageton, ST 13579",
    phoneNo: "+1 (555) 246-8135"
  },
]

const RequestStatus = () => {
  return (
    <Card className="bg-white dark:bg-dark-400 border-dark-500">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">
          Blood Request Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockRequests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-100 dark:border-red-800 pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 mb-2 sm:mb-0">
                <div className="">
                  <p className="leading-8 font-medium text-gray-900 dark:text-white">
                    {request.recipient}
                  </p>
                  <div className="leading-6 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{request.address}</span>
                  </div>
                  <div className="leading-6 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{request.phoneNo}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <div className="flex items-center space-x-2 bg-red-100 dark:bg-red-800/30 px-3 py-1 rounded-full">
                  <Droplet className="h-4 w-4 text-red-700 dark:text-red-400" />
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">
                    {request.bloodType}
                  </span>
                </div>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
                  request.status === "Pending"
                    ? "bg-yellow-100 dark:bg-yellow-800/30 text-yellow-700 dark:text-yellow-400"
                    : "bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-400"
                }`}>
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {request.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RequestStatus

