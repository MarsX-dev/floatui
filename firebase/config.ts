import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc as getOneDoc,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  WhereFilterOp,
} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MG_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const signInMethod = signInWithEmailAndPassword;

// Add new doc
const insertDoc = async (doc: object, collectionName: string) => {
  const dbInstance = collection(db, collectionName);
  return addDoc(dbInstance, doc);
};

// Get docs
const fetchDocs = (collectionName: string) => {
  const dbRef = collection(db, collectionName);

  return getDocs(dbRef);
};

// Get docs
const useQuery = (
  collectionName: string,
  q: {
    fieldPath: string;
    opStr: WhereFilterOp;
    value: number | string | boolean;
  }
) => {
  const dbRef = query(
    collection(db, collectionName),
    where(q.fieldPath, q.opStr, q.value)
  );

  return getDocs(dbRef);
};

// Delete doc
const deleteDocument = (id: string, collectionName: string) => {
  const dbRef = query(collection(db, collectionName), where("id", "==", id));

  return getDocs(dbRef).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const id = querySnapshot.docs[0].id;

      const docRef = doc(db, collectionName, id);
      return deleteDoc(docRef);
    }
  });
};

// Get component
const getDoc = (value: string, collectionName: string, fieldPath?: string) => {
  const dbRef = fieldPath
    ? query(collection(db, collectionName), where(fieldPath, "==", value))
    : query(collection(db, collectionName), where("id", "==", value));
  return getDocs(dbRef);
};

// Edit doc
const editDoc = (
  value: string,
  collectionName: string,
  data: any,
  fieldPath?: string
) => {
  const dbRef = fieldPath
    ? query(collection(db, collectionName), where(fieldPath, "==", value))
    : query(collection(db, collectionName), where("id", "==", value));

  return getDocs(dbRef).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      const docRef = doc(db, collectionName, docId);
      return updateDoc(docRef, data);
    }
  });
};

export {
  auth,
  signInMethod,
  insertDoc,
  fetchDocs,
  deleteDocument,
  getDoc,
  getOneDoc,
  editDoc,
  useQuery,
  db,
  doc,
};
