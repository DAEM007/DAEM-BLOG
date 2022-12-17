import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUhf89iw5Z4FFbmFtN0_wHCSVt9zniCig",
    authDomain: "blog-project-ef219.firebaseapp.com",
    projectId: "blog-project-ef219",
    storageBucket: "blog-project-ef219.appspot.com",
    messagingSenderId: "262084446939",
    appId: "1:262084446939:web:6c4d35e7d5f3cae3551afe",
    measurementId: "G-3F8TE2P4BX"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { db };
