console.log('welcome to contact js')

//--------------------FIREBASE-----------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import {
    getAuth, createUserWithEmailAndPassword
    , signInWithEmailAndPassword
    , sendEmailVerification
    , signOut
    , onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDIwWxMyqapxZIHqMAft4yOAIBOio_s4ts",
    authDomain: "bhaveshblog-3cf3f.firebaseapp.com",
    projectId: "bhaveshblog-3cf3f",
    storageBucket: "bhaveshblog-3cf3f.appspot.com",
    messagingSenderId: "520573981825",
    appId: "1:520573981825:web:815f44e2e2056c404f2980",
    measurementId: "G-WRCSHX6HQJ"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth()

// -------------------------------------------------------------------------------
let alert = document.getElementById('alert')

let email = document.getElementById('email')
let lastname = document.getElementById('lastname')
let firstname = document.getElementById('firstname')
let phone = document.getElementById('phone')
let message = document.getElementById('message')
let submit = document.getElementById('submit')

let emailValidate = false, phoneValidate = false;

email.addEventListener("blur", () => {
    let regrex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(str, regrex)
    if (regrex.test(str)) {
        email.classList.remove("is-invalid");
        emailValidate = true;
    } else {
        emailValidate = false;
        email.classList.add("is-invalid");
    }
});

phone.addEventListener("blur", () => {
    let regrex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regrex.test(str)) {
        phone.classList.remove("is-invalid");
        phoneValidate = true;
    } else {
        phoneValidate = false;
        phone.classList.add("is-invalid");
    }
});

submit.addEventListener('click', (e) => {
    if (emailValidate && phoneValidate) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                set(ref(database, 'contact_us/' + user.uid), {
                    firstname: firstname.value,
                    lastname: lastname.value,
                    phone: phone.value,
                    email: email.value,
                    message: message.value
                })
                alert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Success!</strong> Message send to the owner.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
                setTimeout(() => {
                    alert.innerHTML = ``
                }, 4000)
            } else {
                alert('Message not send some error occured.. Try again')
            }
            email.value = ""
            phone.value = ""
            firstname.value = ""
            lastname.value = ""
            message.value = ""
        });

    } else {
        email.value = ""
        phone.value = ""
        alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Incorrect!</strong> fill all the fields.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
        setTimeout(() => {
            alert.innerHTML = ``
        }, 4000)
    }
    e.preventDefault()
})