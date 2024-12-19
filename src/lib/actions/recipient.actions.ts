import { CreateRecipientParams, RegisterRecipientParams } from "@/types/ index";
import { BUCKET_ID, DATABASE_ID, ENDPOINT, PROJECT_ID, RECIPIENT_COLLECTION_ID, databases, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils";
import { ID, Query } from "node-appwrite";




export const createRecipient = async (donor: CreateRecipientParams) => {
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

export const getRecipient = async (recipientId: string) => {
    try {
      const recipient = await users.get(recipientId);
      return parseStringify(recipient);
    } catch (error) {
      console.log(error);
      
    }
  }

  export const registerRecipient = async ({ transfusionRequestDocument, ...recipientsData }: RegisterRecipientParams) => {
    try {
      // Ensure required constants are defined
      // if (!BUCKET_ID || !DATABASE_ID || !RECIPIENT_COLLECTION_ID) {
      //   throw new Error("Missing required environment variables (BUCKET_ID, DATABASE_ID, or RECIPIENT_COLLECTION_ID).");
      // }
  
      let file; // To store file information if uploaded
  
      // Upload file if transfusionRequestDocument is provided
      if (transfusionRequestDocument) {
        const blobFile = transfusionRequestDocument.get("blobFile") as Blob;
        const fileName = transfusionRequestDocument.get("fileName") as string;
  
        if (!blobFile || !fileName) {
          throw new Error("Invalid transfusionRequestDocument: 'blobFile' and 'fileName' are required.");
        }
  
        const inputFile = new File([blobFile], fileName);
        file = await storage.createFile("67501054001111ba516c", ID.unique(), inputFile);
      }
  
      // Create new recipient document
      const newRecipient = await databases.createDocument(
        "674f5d9f001f3996afc3",
        "674f5e7400179a6f1d23",
        ID.unique(),
        {
          transfusionRequestDocumentId: file?.$id || null,
          transfusionRequestDocumentUrl: file?.$id
            ? `${"https://cloud.appwrite.io/v1"}/storage/buckets/${"67501054001111ba516c"}/files/${file.$id}/view?project=${"674f5a07003404b291bc"}`
            : null,
          ...recipientsData, // Spread the rest of the recipient data
        }
      );
  
      return parseStringify(newRecipient); // Utility function to parse and stringify the response
    } catch (error) {
      console.error("An error occurred while creating a new Recipient:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  };
  
  export const getRecipientData = async (recipientId: string) => {
    try{
      // creating new patient document 
      const recipietn = await getRecipient(recipientId)
      const email = recipietn.email
      const recipientData = await databases.listDocuments(
        "674f5d9f001f3996afc3",
        "674f5e7400179a6f1d23",
        [
          Query.equal('email', email)
        ]
      );
      return parseStringify(recipientData.documents[0]);
    }catch(error){
      console.error(error)
    }
  }

  export const getDocument = async  (documentId:string) => {
      try {
        const buffer  = await storage.getFilePreview( 
          "67501054001111ba516c",
          documentId)
          console.log(buffer);
          const blob = new Blob([buffer], { type: 'image/jpeg' });
          const url =  URL.createObjectURL(blob)
          return url
          //console.log(url);
          
      } catch (error) {
        console.log(error);
      }
  }