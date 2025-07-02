



import { initializeApp } from "firebase/app";
import { getFirestore   } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyCI-zqRA8grUm45NixaKOZNqrDjg2SQpPM",
  authDomain: "fireship-1e2e5.firebaseapp.com",
  projectId: "fireship-1e2e5",
  storageBucket: "fireship-1e2e5.firebasestorage.app",
  messagingSenderId: "328881578756",
  appId: "1:328881578756:web:386dcaac6cde194b662651",
  measurementId: "G-4EFZKE5TFM"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage(app);

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();