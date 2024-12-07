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





// CREATE APPWRITE USER
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

export const getDonor = async (donorId: string) => {
  try {
    const donor = await users.get(donorId);
    return parseStringify(donor);
  } catch (error) {
    console.log(error);
    
  }
}