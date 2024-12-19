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

  declare interface CreateRecipientParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface Recipient extends CreateRecipientParams {
    $id: string;
  }
  declare interface RegisterRecipientParams extends CreateRecipientParams{
    userId: string ;
    address: string;
    postId: string;
    privacyConsent: boolean;
    disclosureConsent: boolean;
    transfusionRequestDocument: FormData | undefined;
    unitRequired: string;
  }
  export interface RecipientInfo{
    name: string;
    email: string;
    phone: string;
    address: string;
    postId: string;
    transfusionRequestDocumentUrl:string;
    transfusionRequestDocumentId: string;
    unitRequired: string;
    $createdAt: string;
    $createdAt: string;
  }