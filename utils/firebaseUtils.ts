import {
  doc,
  getDoc,
  Firestore,
  DocumentData,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

export async function getUserData(
  db: Firestore,
  userId: string
): Promise<DocumentData | null> {
  try {
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export const submitIssue = async (
  db: Firestore,
  issueName: string,
  issueDescription: string
): Promise<void> => {
  try {
    // Create a new issue object with necessary information
    const issueData = {
      description: issueDescription,
      name: issueName,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };

    // Add the issue to the "issues" collection
    const issuesRef = collection(db, "issues");
    await setDoc(doc(issuesRef), issueData);

    console.log("Issue submitted successfully!");
    console.log(issuesRef); // Log the issue data for debugging purposes
  } catch (error) {
    console.error("Error submitting issue:", error);
    throw error;
  }
};

export const submitIdea = async (
  db: Firestore,
  ideaName: string,
  ideaDescription: string
): Promise<void> => {
  try {
    // Create a new idea object with necessary information
    const ideaData = {
      description: ideaDescription,
      name: ideaName,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };

    // Add the idea to the "ideas" collection
    const ideasRef = collection(db, "ideas");
    await setDoc(doc(ideasRef), ideaData);

    console.log("idea submitted successfully!");
    console.log(ideasRef); // Log the idea data for debugging purposes
  } catch (error) {
    console.error("Error submitting idea:", error);
    throw error;
  }
};
