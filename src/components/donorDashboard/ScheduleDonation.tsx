import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const locations = [
  "Central Blood Bank",
  "Regional Medical Center",
  "Mobile Blood Drive - Downtown",
  "Community Health Center"
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM"
];

const ScheduleDonation = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [location, setLocation] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");

  return (
    <div className="space-y-8 max-w-fit ">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Schedule Donation
        </h1>
        <p className="text-red-700 dark:text-red-400">
          Choose your preferred date, location, and time for your next donation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              Select Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-red-200 dark:border-red-800"
            />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              Location & Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-700 dark:text-red-400" />
                Select Location
              </label>
              <Select value={location} onValueChange={setLocation} >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a donation center" />
                </SelectTrigger>
                <SelectContent className="border border-dark-400">
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc} className="bg-dark-400  ">
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-700 dark:text-red-400" />
                Select Time
              </label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full bg-red-700 hover:bg-red-800 text-white"
              disabled={!date || !location || !timeSlot}
            >
              Schedule Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleDonation;