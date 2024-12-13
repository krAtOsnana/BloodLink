import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, Droplet } from "lucide-react";

interface DonationRecord {
  date: string;
  bloodType: string;
  location: string;
  status: "completed" | "scheduled" | "cancelled";
}

const mockDonationHistory: DonationRecord[] = [
  {
    date: "2024-03-15",
    bloodType: "A+",
    location: "Central Blood Bank",
    status: "completed"
  },
  {
    date: "2024-01-10",
    bloodType: "A+",
    location: "Mobile Blood Drive - Downtown",
    status: "completed"
  },
  {
    date: "2023-10-05",
    bloodType: "A+",
    location: "Regional Medical Center",
    status: "completed"
  }
];

const DonationHistory = () => {
  return (
    <div className="space-y-8 ">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Donation History
        </h1>
        <p className="text-red-700 dark:text-red-400">
          View your past blood donations and upcoming appointments
        </p>
      </div>

      <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Past Donations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockDonationHistory.map((donation, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-red-100 dark:border-red-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-red-700 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {format(new Date(donation.date), "PPP")}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {donation.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Droplet className="h-4 w-4 text-red-700 dark:text-red-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {donation.bloodType}
                    </span>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                    {donation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationHistory;