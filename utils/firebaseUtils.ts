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
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
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
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
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

export async function getIncompleteIdeas(
  db: Firestore
): Promise<DocumentData[]> {
  try {
    const ideasRef = collection(db, "ideas");
    const incompleteIdeasQuery = query(
      ideasRef,
      where("completed", "==", false)
    );
    const incompleteIdeasSnapshot = await getDocs(incompleteIdeasQuery);
    return incompleteIdeasSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching incomplete ideas:", error);
    throw error;
  }
}

export async function getIncompleteIssues(
  db: Firestore
): Promise<DocumentData[]> {
  try {
    const issuesRef = collection(db, "issues");
    const incompleteIssuesQuery = query(
      issuesRef,
      where("completed", "==", false)
    );
    const incompleteIssuesSnapshot = await getDocs(incompleteIssuesQuery);
    return incompleteIssuesSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching incomplete issues:", error);
    throw error;
  }
}

export const completeIdea = async (
  db: Firestore,
  ideaId: string
): Promise<void> => {
  try {
    // Query Firestore to find the document with the matching 'id' field
    const querySnapshot = await getDocs(
      query(collection(db, "ideas"), where("id", "==", ideaId))
    );

    // Check if any documents match the query
    if (!querySnapshot.empty) {
      // Update the 'completed' field of the first matching document
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, { completed: true });
      console.log("Idea marked as completed successfully!");
    } else {
      // Handle case where no document matches the provided ideaId
      throw new Error("No matching idea found");
    }
  } catch (error) {
    console.error("Error marking idea as completed:", error);
    throw error;
  }
};

export const completeIssue = async (
  db: Firestore,
  issueId: string
): Promise<void> => {
  try {
    // Query Firestore to find the document with the matching 'id' field
    const querySnapshot = await getDocs(
      query(collection(db, "issues"), where("id", "==", issueId))
    );

    // Check if any documents match the query
    if (!querySnapshot.empty) {
      // Update the 'completed' field of the first matching document
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, { completed: true });
      console.log("Issue marked as completed successfully!");
    } else {
      // Handle case where no document matches the provided issueId
      throw new Error("No matching issue found");
    }
  } catch (error) {
    console.error("Error marking issue as completed:", error);
    throw error;
  }
};

export const deleteIdea = async (
  db: Firestore,
  ideaId: string
): Promise<void> => {
  try {
    // Query Firestore to find the document with the matching 'id' field
    const querySnapshot = await getDocs(
      query(collection(db, "ideas"), where("id", "==", ideaId))
    );

    // Check if any documents match the query
    if (!querySnapshot.empty) {
      // Delete the first matching document
      const docRef = querySnapshot.docs[0].ref;
      await deleteDoc(docRef);
      console.log("Idea deleted successfully!");
    } else {
      // Handle case where no document matches the provided ideaId
      throw new Error("No matching idea found");
    }
  } catch (error) {
    console.error("Error deleting idea:", error);
    throw error;
  }
};

export const deleteIssue = async (
  db: Firestore,
  issueId: string
): Promise<void> => {
  try {
    // Query Firestore to find the document with the matching 'id' field
    const querySnapshot = await getDocs(
      query(collection(db, "issues"), where("id", "==", issueId))
    );

    // Check if any documents match the query
    if (!querySnapshot.empty) {
      // Delete the first matching document
      const docRef = querySnapshot.docs[0].ref;
      await deleteDoc(docRef);
      console.log("Issue deleted successfully!");
    } else {
      // Handle case where no document matches the provided issueId
      throw new Error("No matching issue found");
    }
  } catch (error) {
    console.error("Error deleting issue:", error);
    throw error;
  }
};
