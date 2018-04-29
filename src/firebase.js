import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_VgXrsfB_v6lAVE_JZxauoCLVRGaBvhw",
  authDomain: "goalcoach-24316.firebaseapp.com",
  databaseURL: "https://goalcoach-24316.firebaseio.com",
  projectId: "goalcoach-24316",
  storageBucket: "",
  messagingSenderId: "616752774532"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
