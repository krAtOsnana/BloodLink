import DonorDashboard from "@/components/donorDashboard/DonorDashboard";
import { getDonorData } from "@/lib/actions/donor.actions";
import React from "react";

const page = async ({
  params
}: {
  params: {
    donorId: string;
  };
}) => {
  const { donorId } = await params;
  const donor = await getDonorData(donorId);

  return (
    <div>
      <DonorDashboard donor={donor} />
    </div>
  );
};

export default page;
