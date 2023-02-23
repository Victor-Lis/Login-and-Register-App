import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_eHrh6EuDn8NeArqK_iZZt0wfLP5bZWs",
  authDomain: "first-project-a00f9.firebaseapp.com",
  databaseURL: "https://first-project-a00f9-default-rtdb.firebaseio.com/",
  projectId: "first-project-a00f9",
  storageBucket: "first-project-a00f9.appspot.com",
  messagingSenderId: "298220079963",
  appId: "1:298220079963:web:3f240af8be3eac3ca6a87e",
  measurementId: "G-QK64WV2JB7"
};

if(!firebase.apps.length){
  //Abrir minha conexao
  const app = firebase.initializeApp(firebaseConfig);

}

export default firebase;