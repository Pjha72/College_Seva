
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD1QFL3UjODViW9pv3fXkaorm0Yef5xcqg",
    authDomain: "mumbai-hackathon-579dd.firebaseapp.com",
    projectId: "mumbai-hackathon-579dd",
    storageBucket: "mumbai-hackathon-579dd.appspot.com",
    messagingSenderId: "175234386605",
    appId: "1:175234386605:web:d70e7b5cdf894c6decd424"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()