import { Models } from "node-appwrite";

export interface Donor extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  postId: string;
  occupation: string;
  allergies: string | undefined;
  preExistingMedicalConditions: string | undefined;
  privacyConsent: boolean;
  lastDonationDate: Date;
  donationEligibility: boolean;
  isRegularDonor: boolean;
  bloodType: BloodType ;
}

// export interface Appointment extends Models.Document {
//   patient: Patient;
//   schedule: Date;
//   status: Status;
//   primaryPhysician: string;
//   reason: string;
//   note: string;
//   userId: string;
//   cancellationReason: string | null;
// }