import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBPeHE-oqMn1vh4TgkjpEYu5hL1LsamV7s",
    authDomain: "atline-70e6e.firebaseapp.com",
    projectId: "atline-70e6e",
    storageBucket: "atline-70e6e.appspot.com",
    messagingSenderId: "477192524489",
    appId: "1:477192524489:web:e4534081deec25e0ae7318",
    measurementId: "G-S4FMBEE181"
  };
  

const firebase = initializeApp(firebaseConfig);

const __dirname  =dirname(fileURLToPath(import.meta.url)); // middleware
const app = express()


app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));



app.get('/', function (req, res) {
  res.sendFile(__dirname+"/html/loginPage.html")
});

app.post("/",function(req, res){
    let email = req.body.email; //name gets its value

    let password = req.body.password;

    console.log(email,password)
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    res.redirect("/mainPage");
    console.log("sign works");
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.redirect("/");
    console.log("sign does not works");

  });


})


app.get('/SignIn', function (req, res) {
  res.sendFile(__dirname+"/html/signPage.html")
});



app.post("/SignIn",function(req,res){
  let email = req.body.email; //name gets its value

  let password = req.body.password;

  console.log(email,password)
  

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  console.log("works")
  const user = userCredential.user;
  // redirect to main page
  res.redirect("/");
  return;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(res,"not works")
  res.redirect("/SignIn");
  return;
  // ..
});

})

app.get('/mainPage', function (req, res) {
  res.sendFile(__dirname+"/html/mainPage.html")
});

app.get("/mainPage/testmap",function(req,res){
  res.sendFile(__dirname+"/html/testmap.html")
})

app.listen(3000);









//     const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     console.log("works")
//     const user = userCredential.user;
//     // redirect to main page
//     return;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(res,"not works")
//     res.redirect("/SignIn");
//     return;
//     // ..
//   });