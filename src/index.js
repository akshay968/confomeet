
import { initializeApp } from 'firebase/app';
import {
getFirestore, collection,getDocs,onSnapshot,
addDoc, deleteDoc, doc,
query, where,orderBy,serverTimestamp,
getDoc ,updateDoc
}from 'firebase/firestore';
import {
  getAuth,createUserWithEmailAndPassword,signOut,
  signInWithEmailAndPassword
}from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAoatD_quQ2ySYJNBfLagKtbhmYNwuGwo8",
    authDomain: "ninja-firebase-tut-84c7c.firebaseapp.com",
    projectId: "ninja-firebase-tut-84c7c",
    storageBucket: "ninja-firebase-tut-84c7c.appspot.com",
    messagingSenderId: "385219444783",
    appId: "1:385219444783:web:8e7a4f8a654f29df56c6da",
    measurementId: "G-GLCNK3L4X3"
  };


  initializeApp(firebaseConfig);

//init services

const db =getFirestore();
const auth=getAuth();
const eventref = collection(db,'Events');
const create_event=document.querySelector('.createevent');
if(create_event)
{
  console.log(create_event);
    create_event.addEventListener('submit',(e)=>
    {

      e.preventDefault();
          console.log("hi");
          addDoc(eventref, {
          Title_of_the_event:create_event.Title_of_the_event.value,
          Organising_by:create_event.Organising_by.value,
          Speakers:create_event.Speakers.value,
         //EventDate:create_event.EventDate.value,
          Start_time:create_event.Start_time.value,
          End_time:create_event.End_time.value,
          Limit:create_event.Limit.value,
          Link:create_event.Link.value
        })

        .then(()=>{
           create_event.reset();
          }
        )

})
}
 //signup for the users
    const signupboo = document.querySelector('.signup')
    const arri = []
    if(signupboo){
     
      signupboo.addEventListener('submit', handlesignup)
    }
    
    function handlesignup(e){
      e.preventDefault();
      console.log("in");
      const signup = document.querySelector('.signup')

      const email= signup.suemail.value;
      userName = email;
      const password = signup.supassword.value
      const temppass = supassword;
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) =>{
            console.log('User Created', cred.user);
            signup.reset()
        })
        .catch((err) => {
          console.log(err.message)
        })

        addDoc(colRef2, {
          //   host: createEvent.host.value,
          // starttime: createEvent.starttime.value,
          // endtime: createEvent.endtime.value,
          // date: createEvent.date.value,
          // meetlink: createEvent.meetlink.value,
          // eventtype: createEvent.eventtype.value,
          // eid: val,
            emailId: userName,
            password: temppass,
            registered: arri
          })

    }

