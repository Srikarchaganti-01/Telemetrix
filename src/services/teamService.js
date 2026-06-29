import { databases } from "../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = "teams";

export async function getTeams() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);

    return response.documents;
  } catch (error) {
    console.log(error);
  }
}
