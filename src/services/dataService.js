import { databases } from "../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

export async function getData(collectionId) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, collectionId);

    return response.documents;
  } catch (error) {
    console.log(error);
  }
}
