import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  DONOR_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import {
  DonorFormValidation,
  DonorRegistrationFormValidation
} from "@/lib/validation";
import {z} from "zod"
import { CreateDonorParams } from "@/types/ index";





// CREATE APPWRITE DONOR
export const createDonor = async (donor: CreateDonorParams) => {
    try {
      // Create new donor -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
      const newDonor = await users.create(
        ID.unique(),
        donor.email,
        donor.phone,
        undefined,
        donor.name
      );
  
      return parseStringify(newDonor);
    } catch (error: any) {
      // Check existing user || user already exist
      if (error && error?.code === 409) {
        const document = await users.list([
          Query.equal("email", [donor.email]),
        ]);
        console.log("user already exist",document.users)
        return document.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
  };

// GETTING EXISTIONG DONOR
export const getDonor = async (donorId: string) => {
  try {
    const donor = await users.get(donorId);
    return parseStringify(donor);
  } catch (error) {
    console.log(error);
    
  }
}

// REGISTERING DONOR'S DATA 
export const registerDonor = async ({...donorsData}: z.infer<typeof DonorRegistrationFormValidation>) => {
  try{
    // creating new patient document 
    const newDonor = await databases.createDocument(
      DATABASE_ID!,
      DONOR_COLLECTION_ID!,
      ID.unique(),
      {
        ...donorsData,
      }
    );
    return parseStringify(newDonor);
  }catch(error){
    console.error(error)
  }
}

//
export const getDonorData = async (donorId: string) => {
  try{
    // creating new patient document 
    const donor = await getDonor(donorId)
    const email = donor.email
    const donorData = await databases.listDocuments(
      DATABASE_ID!,
      DONOR_COLLECTION_ID!,
      [
        Query.equal('email', email)
      ]
    );
    return parseStringify(donorData.documents[0]);
  }catch(error){
    console.error(error)
  }
}

