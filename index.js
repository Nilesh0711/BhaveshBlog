console.log('welcome to index js')

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
let contactDis = document.getElementById('contactDis')

let loginemail = document.getElementById('loginemail')
let loginpassword = document.getElementById('loginpassword')
let loginsubmit = document.getElementById('loginsubmit')


let signupemail = document.getElementById('signupemail')
let signuppassword = document.getElementById('signuppassword')
let signupconfirmpassword = document.getElementById('signupconfirmpassword')
let signupsubmit = document.getElementById('signupsubmit')

let logout = document.getElementById('logout')
let login = document.getElementById('login')
let signup = document.getElementById('signup')

let loginemailValidate = false, loginpasswordValidate = false;
let signuppasswordValidate = false, signupconfirmpasswordValidate = false, signupemailValidate = false;

logout.style.display = 'none'

loginemail.addEventListener("blur", () => {
    let regrex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = loginemail.value;
    console.log(str, regrex)
    if (regrex.test(str)) {
        loginemail.classList.remove("is-invalid");
        loginemailValidate = true;
    } else {
        loginemailValidate = false;
        loginemail.classList.add("is-invalid");
    }
});
loginpassword.addEventListener("blur", () => {
    let regrex = /(?=.{8,})/;
    let str = loginpassword.value;
    if (regrex.test(str)) {
        loginpassword.classList.remove("is-invalid");
        loginpasswordValidate = true;
    } else {
        loginpasswordValidate = false;
        loginpassword.classList.add("is-invalid");
    }
});
signupemail.addEventListener("blur", () => {
    let regrex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = signupemail.value;
    if (regrex.test(str)) {
        signupemail.classList.remove("is-invalid");
        signupemailValidate = true;
    } else {
        signupemailValidate = false;
        signupemail.classList.add("is-invalid");
    }
});
signuppassword.addEventListener("blur", () => {
    let regrex = /(?=.{8,})/;
    let str = signuppassword.value;
    if (regrex.test(str)) {
        signuppassword.classList.remove("is-invalid");
        signuppasswordValidate = true;
    } else {
        signuppasswordValidate = false;
        signuppassword.classList.add("is-invalid");
    }
});
signupconfirmpassword.addEventListener("blur", () => {
    let str = signupconfirmpassword.value;
    if (signuppassword.value == str) {
        signupconfirmpassword.classList.remove("is-invalid");
        signupconfirmpasswordValidate = true;
    } else {
        signupconfirmpasswordValidate = false;
        signupconfirmpassword.classList.add("is-invalid");
    }
});

loginsubmit.addEventListener('click', (e) => {
    if (loginpasswordValidate && loginemailValidate) {
        console.log('i am running')
        const auth = getAuth();
        signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    alert('welcome user')
                    let date = new Date()
                    update(ref(database, 'users/' + user.uid), {
                        last_login: date
                    })
                    loginemail.value = ""
                    loginpassword.value = ""
                } else {
                    alert('Verify your email address')
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('user does not exists')
            });

    } else {
        loginemail.value = ""
        loginpassword.value = ""
        alert("email pasword not validate")
    }
    e.preventDefault()
})

signupsubmit.addEventListener('click', (e) => {
    if (signuppasswordValidate && signupemailValidate && signupconfirmpasswordValidate) {
        const auth = getAuth();
        console.log('i am running')
        createUserWithEmailAndPassword(auth, signupemail.value, signuppassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('user created')
                console.log(user)
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Email verification send')
                    }).catch((error) => {
                        const errorMessage = error.message;
                        alert(errorMessage + 'Failed to send email verification')
                    })
                set(ref(database, 'users/' + user.uid), {
                    username: signupemail.value,
                })
                signupemail.value = ""
                signuppassword.value = ""
                signupconfirmpassword.value = ""
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    } else {
        signupemail.value = ""
        signuppassword.value = ""
        signupconfirmpassword.value = ""
        alert("email pasword not validate")
    }
    e.preventDefault()
})

logout.addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert('user logout')
    }).catch((error) => {
        alert(error.message)
    });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        login.style.display = 'none'
        signup.style.display = 'none'
        logout.style.display = 'inline'

        contactDis.classList.remove('disabled')
    } else {
        login.style.display = 'inline'
        signup.style.display = 'inline'
        logout.style.display = 'none'

        contactDis.classList.add('disabled')

    }

});
