                // Import the functions you need from the SDKs you need
                import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
                import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
                import { getAuth, signInUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

                // TODO: Add SDKs for Firebase products that you want to use
                // https://firebase.google.com/docs/web/setup#available-libraries
            
                // Your web app's Firebase configuration
                // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                const firebaseConfig = {
                apiKey: "AIzaSyB8YctrbNi5lFn0Mvv8VDYp8rEPabEs1Vw",
                authDomain: "cloud-based-hrms-system.firebaseapp.com",
                projectId: "cloud-based-hrms-system",
                storageBucket: "cloud-based-hrms-system.appspot.com",
                messagingSenderId: "596260893240",
                appId: "1:596260893240:web:01be54c76eac3613d42ccd",
                measurementId: "G-8R50BJCTE0"
                };
            
                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
                const analytics = getAnalytics(app);

                //console.log(app);
                const auth = getAuth();

                var email = document.getElementById("email");
                var password = document.getElementById("password");

                window.login=function(e){
                    e.preventDefault();
                    var obj = {
                        email:email.ariaValueMax,
                        password:password.value
                    };
                    signInUserWithEmailAndPassword(auth,obj.email,obj.password)
                    .then(function(success){
                        console.log(user.uid)
                            alert("login successfully")
                    })
                    .catch(function(err){
                        
                        alert("login error" + err)
                    })
                    console.log(obj)
                }