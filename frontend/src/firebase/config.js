// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import  {v4} from 'uuid';


const firebaseConfig = {
    apiKey: "AIzaSyCa2B5ZbugRuCJEk2Q6aB1nnpDjeM3mSOA",
    authDomain: "generaciones-de-paz.firebaseapp.com",
    projectId: "generaciones-de-paz",
    storageBucket: "generaciones-de-paz.appspot.com",
    messagingSenderId: "643235676414",
    appId: "1:643235676414:web:964a9ea6f654149215a5af",
    measurementId: "G-LL3D35M9HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {

    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef) 
    return url

}

const analytics = getAnalytics(app); 