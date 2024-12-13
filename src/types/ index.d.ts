/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  declare type Status = "pending" | "scheduled" | "cancelled";
  declare type DonorHistory = "First-Time" | "Regular";
  
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
    allergies?: string;
    preExistingMedicalConditins?: string;
    privacyConsent: boolean;
    disclosureConsent: boolean;
    donationHistory: DonorHistory;
    lastDonationDate: Date;
    bloodType: BloodType;
  }
  
  export interface DonorInfo {
    name: string;
    email: string;
    gender: string;
    phone: string;
    occupation: string;
    address: string;
    postId: string;
    preExistingMedicalConditions: string;
    allergies: string;
    bloodType: string;
    donationEligibility: string;
    donationHistory: string;
    lastDonationDate: string;
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