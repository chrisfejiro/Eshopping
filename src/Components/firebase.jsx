import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQPW32lw6JndALwIvRZMHhDwmI2o4sAcY",
  authDomain: "ecommerce-shopping-405b5.firebaseapp.com",
  projectId: "ecommerce-shopping-405b5",
  storageBucket: "ecommerce-shopping-405b5.appspot.com",
  messagingSenderId: "968120182647",
  appId: "1:968120182647:web:5590a096f89357120ea372",
  measurementId: "G-7YCHYEE694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();