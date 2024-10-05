import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMpfDc-kQVpP1c1mb0VSHLUBlGfXJqtNA",
  authDomain: "test-emulator-fa6d8.firebaseapp.com",
  projectId: "test-emulator-fa6d8",
  storageBucket: "test-emulator-fa6d8.appspot.com",
  messagingSenderId: "781371607813",
  appId: "1:781371607813:web:541d9e8d9225cb234e456c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectFirestoreEmulator(db, "127.0.0.1", 8080);
connectStorageEmulator(storage, "127.0.0.1", 9199);
