import { databases } from "../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

export async function getSchedule() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, "schedule");

    return response.documents;
  } catch (error) {
    console.log(error);
  }
}
