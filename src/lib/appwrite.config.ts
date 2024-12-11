
import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  DONOR_COLLECTION_ID,
  RECIPIENT_COLLECTION_ID,
  // APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID
} = process.env;


const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("674f5a07003404b291bc")
      .setKey("standard_c99eed6c33e5caa4e78727aded2622779932a0e22e844ef02e26bc2566debf5016dc08235311767ba88b8d5cb38f1b43368153f4ce3b8e00aefa712c463060335101a52f0080726f7383ad1412da5696d88498de721a16ebce608c43a139be16465c1549a2b69cb24f6d33f2c3327de968c6c47992f49b4c4faceec4e1159992");

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

