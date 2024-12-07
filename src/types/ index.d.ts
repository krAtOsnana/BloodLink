/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateDonorParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface Donor extends CreateDonorParams {
    $id: string;
  }
  
  declare interface RegisterDonorParams extends CreateDonorParams {
    userId: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    postId: string;
    occupation: string;
    allergies: string | undefined;
    preExistingMedicalConditions: string | undefined;
    privacyConsent: boolean;
    isRegularDonor: boolean;
    lastDonationDate: Date;
    donationEligibility: boolean;
    bloodType: BloodType ;

  }
  
  declare type CreateAppointmentParams = {
    userId: string;
    patient: string;
    primaryPhysician: string;
    reason: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateAppointmentParams = {
    appointmentId: string;
    userId: string;
    timeZone: string;
    appointment: Appointment;
    type: string;
  };