import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyDyQebJMq7D81YXxT6RKdat3090y0CEOEo",
  
    authDomain: "project-management-site-f0e86.firebaseapp.com",
  
    projectId: "project-management-site-f0e86",
  
    storageBucket: "project-management-site-f0e86.appspot.com",
  
    messagingSenderId: "201630188234",
  
    appId: "1:201630188234:web:0ecccb466042009a22ea33"
  
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }