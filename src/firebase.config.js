// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBc4b3qZPanPCDGabOEhugJS7OVE8TJ7zI',
  authDomain: 'house-marketplace-app-ad469.firebaseapp.com',
  projectId: 'house-marketplace-app-ad469',
  storageBucket: 'house-marketplace-app-ad469.appspot.com',
  messagingSenderId: '190538513246',
  appId: '1:190538513246:web:0707ade003e6dec75e2dcf',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
