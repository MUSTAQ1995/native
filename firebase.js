import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectUd: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app == firebase.app()
}

const auth = firebase.auth();

export {auth };

