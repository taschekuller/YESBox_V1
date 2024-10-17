import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    onIdTokenChanged,
    reload,
    sendPasswordResetEmail,
    signInWithCustomToken,
  } from "firebase/auth";
  import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    documentId,
    onSnapshot,
    serverTimestamp,
    updateDoc,
    addDoc,
    deleteDoc,
  } from "firebase/firestore";

  const firebaseConfig = {
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
  const db = getFirestore(firebaseApp);

  export const verifyCode = async (id) => {
    debugger;
    const certificateObject = await getDoc(doc(db, "certificates", id));
    if(certificateObject)
    return {...certificateObject.data(), id: certificateObject.id};
    else return null;
  };
