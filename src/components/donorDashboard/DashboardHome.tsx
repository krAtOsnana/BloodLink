import { DonorInfo } from "@/types/ index";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Calendar, Droplet, FileText } from "lucide-react";

interface DonorStats {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatsCard = ({ stat }: { stat: DonorStats }) => (
<<<<<<< HEAD
  <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
=======
  <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
>>>>>>> d1c9bce (donor dashboard completed)
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">
        {stat.label}
      </CardTitle>
      {stat.icon}
    </CardHeader>
    <CardContent>
<<<<<<< HEAD
      <div className="text-2xl font-bold text-red-700 dark:text-white">
=======
      <div className="text-2xl font-bold text-red-700 dark:text-dark-600">
>>>>>>> d1c9bce (donor dashboard completed)
        {stat.value}
      </div>
    </CardContent>
  </Card>
);

const PersonalInfoCard = ({ donor }: { donor: DonorInfo }) => (
<<<<<<< HEAD
  <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
=======
  <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
>>>>>>> d1c9bce (donor dashboard completed)
    <CardHeader>
      <CardTitle className="text-gray-900 dark:text-white">
        Personal Information
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Full Name", value: donor.name },
          { label: "Gender", value: donor.gender },
          { label: "Email", value: donor.email },
          { label: "Phone", value: donor.phone },
          { label: "Occupation", value: donor.occupation },
          { label: "Postal Code", value: donor.postId },
          { label: "Address", value: donor.address }
        ].map((item, index) => (
          <div key={index}>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {item.label}
            </p>
<<<<<<< HEAD
            <p className="text-sm text-red-700 dark:text-red-400">
=======
            <p className="text-sm text-red-700 dark:text-dark-600">
>>>>>>> d1c9bce (donor dashboard completed)
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const MedicalInfoCard = ({ donor }: { donor: DonorInfo }) => (
<<<<<<< HEAD
  <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
=======
  <Card className="bg-white dark:bg-dark-400 border-dark-500">
>>>>>>> d1c9bce (donor dashboard completed)
    <CardHeader>
      <CardTitle className="text-gray-900 dark:text-white">
        Medical Information
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {[
          {
            label: "Pre-existing Medical Conditions",
            value: donor.preExistingMedicalConditions || "None reported"
          },
          {
            label: "Allergies",
            value: donor.allergies || "None reported"
          },
          {
            label: "Last Donation Date",
            value: donor.lastDonationDate
<<<<<<< HEAD
              ? new Date(donor.lastDonationDate).toLocaleDateString()
=======
              ? new Date(donor.lastDonationDate).toLocaleDateString("en-GB")
>>>>>>> d1c9bce (donor dashboard completed)
              : "No previous donations"
          }
        ].map((item, index) => (
          <div key={index}>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {item.label}
            </p>
<<<<<<< HEAD
            <p className="text-sm text-red-700 dark:text-red-400">
=======
            <p className="text-sm text-red-700 dark:text-dark-600">
>>>>>>> d1c9bce (donor dashboard completed)
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const DonationProgressCard = ({ donor }: { donor: DonorInfo }) => (
<<<<<<< HEAD
  <Card className="bg-white dark:bg-dark-400 border-dark-500 border-dark-500">
=======
  <Card className="bg-white dark:bg-dark-400 border-dark-500 ">
>>>>>>> d1c9bce (donor dashboard completed)
    <CardHeader>
      <CardTitle className="text-gray-900 dark:text-white">
        Donation Progress
      </CardTitle>
<<<<<<< HEAD
      <CardDescription className="text-red-500 dark:text-red-400">
=======
      <CardDescription className="text-red-500 dark:text-dark-600">
>>>>>>> d1c9bce (donor dashboard completed)
        Your journey to becoming a regular donor
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Progress value={33} className="bg-red-500/20 dark:bg-red-700/20" />
        <p className="text-sm text-gray-900 dark:text-white">
          1 out of 3 donations this year
        </p>
      </div>
    </CardContent>
  </Card>
);

const DashboardHome = ({ donor }: { donor: DonorInfo }) => {
  const stats: DonorStats[] = [
    {
      label: "Blood Type",
      value: donor.bloodType,
      icon: <Droplet className="h-4 w-4 text-red-700 dark:text-white" />
    },
    {
      label: "Donation History",
      value: donor.donationHistory,
      icon: <FileText className="h-4 w-4 text-red-700 dark:text-white" />
    },
    {
      label: "Eligibility",
      value: donor.donationEligibility || "Pending Review",
      icon: <AlertCircle className="h-4 w-4 text-red-700 dark:text-white" />
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
<<<<<<< HEAD
          Donor Dashboard
=======
          Donor Dashboard* 
>>>>>>> d1c9bce (donor dashboard completed)
        </h1>
        <p className="text-red-700 dark:text-red-400">
          Welcome back, {donor.name}. Here's your donation overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PersonalInfoCard donor={donor} />
        <MedicalInfoCard donor={donor} />
      </div>

      <DonationProgressCard donor={donor} />
    </div>
  );
};

export default DashboardHome;