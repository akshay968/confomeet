
import { initializeApp } from 'firebase/app';
import {
getFirestore, collection,getDocs,onSnapshot,
addDoc, deleteDoc, doc,
query, where,orderBy,serverTimestamp,
getDoc ,updateDoc
}from 'firebase/firestore';
import {
  getAuth,createUserWithEmailAndPassword,signOut,
  signInWithEmailAndPassword,onAuthStateChanged
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
const profileref=collection(db,'profile');
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
         EventDate:create_event.Edate.value,
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
     
      signupboo.addEventListener('submit', (e)=>{
        
    
    // function handlesignup(e){
      e.preventDefault();
      console.log(signupboo); 
      const signup1 = document.querySelector('.signup')
console.log(signup1.email);
      const email= signup1.email.value;
      const userName = email;
      const password = signup1.password.value
      const temppass = password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) =>{
            console.log('User Created', cred.user);
            signup1.reset()
        })
        .catch((err) => {
          console.log(err.message)
        })
      })
    }
      
    const loginboo = document.querySelector('.login')
    if(loginboo){
      loginboo.addEventListener('click', handlelogin)
    }
    console.log("jhcvb")
    
    function handlelogin(e){
      e.preventDefault()
      const login = document.querySelector('.login')

      const email = login.email.value
      const userName = email;
      const password = login.password.value
      signInWithEmailAndPassword(auth, email, password)  
      .then((cred)=>{
        window.location.replace("../dist/index2.html");
            console.log('user logged in', cred.user)
        })
        .catch((err)=>{
          console.log(err.message)
        })
    }


    //logout 
    // const logout = document.querySelector('.logout')
    // if(logout){
    //   logout.addEventListener('click', ()=>{
    //     signOut(auth)
    //       .then(()=>{
    //         // console.log('user signed out');
    //         window.location.replace("../dist/homepage.html");
    //       })
    //       .catch((err)=>{
    //         console.log(err.message);
    //       })
    //   })
    // }
    


    //Subscribing to auth Changes
    onAuthStateChanged(auth, (user) => {
      console.log('user status changed', user);
    })
    const colRef1 = collection(db, 'Events')
    const display = document.querySelector('.confii')
    if(display){
      display.addEventListener('click', (e)=>{
        const appendindash = document.querySelector('.card-content4')
        // append1.innerHTML = "Hiiiiii"
        let divi ;
        getDocs(colRef1)
          .then((snapshot) => {
              // console.log(snapshot.docs)
              let books = []
              snapshot.docs.forEach((doc) => {
                  books.push({ ...doc.data(), id:doc.id})
  
                    divi = divi + `<div class="card col">
                    <div class="card-img">
                        <img src="Assets/3.jpg" alt="image">
                    </div>
                    <div class="card-text">
                        <h2>${doc.data().Title_of_the_event}l</h2>
                        <p>${doc.data().EventDate}</p>
                        <div class="no-more"><button onclick="location.href='/dist/EventDescription.html';" type="button" class="btns">Know more</button></div>
                    </div>
                </div>`
                  }
                  
              )
              
              appendindash.innerHTML = divi;
              // console.log(books)
          })
          .catch(err => {
              console.log(err.message)
          })
      })
    }







let displayBtn = document.querySelector(".register_btn");
displayBtn.addEventListener("click", (e) =>{
  function myFunction() {
    /* Get the text field */
    let copy = document.querySelector(".copy");
    copy.innerHTML = 'Copied';
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

    
  }
  e.preventDefault();
  let displayBox = document.querySelector(".display-link");
  displayBox.innerHTML = `<input type="text" value="https://meet.google.com/wpz-giug-gmb" id="myInput">
  <button class="btn-primary copy" onclick=${myFunction}>Copy text</button>`
}
);



