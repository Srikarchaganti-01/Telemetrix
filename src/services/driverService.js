import { Query } from "appwrite";
import { databases } from "../lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = "drivers";

export async function getDriver(shortName) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("shortName", shortName),
    ]);

    return response.documents[0];
  } catch (error) {
    console.log("getDriver error:", error);
    return null;
  }
}
