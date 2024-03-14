import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, Typography } from "@mui/material"
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Layer from "./Layer"

export default function SignUp() {
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();

        const checkEmail = document.getElementById('validateEmail');
        const checkName = document.getElementById('validateName');
        const checkPassword = document.getElementById('validatePassword');

        checkEmail.textContent = "";
        checkName.textContent = "";
        checkPassword.textContent = "";


        const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data === "not exist") {
                        checkEmail.textContent = "";
                        checkPassword.textContent = "Success";
                        checkPassword.style.color = "green";
                        checkName.textContent = "";
                        history('/home', { state: { id: name } })
                    }
                    if (!regEmail.test(email)) {
                        checkEmail.textContent = "* Enter a valid Email";
                    }
                    if (email.length === 0) {
                        checkEmail.textContent = "* Enter your Email";
                    }

                    if (!regPassword.test(password)) {
                        checkPassword.textContent = "* Enter a valid Password";
                    }

                    if (password.length === 0) {
                        checkPassword.textContent = "* Enter your Password";
                    }
                    if (name.length===0) {
                        checkName.textContent = "* Enter your Name";
                    }
                    if (name.length < 3) {
                        checkName.textContent = "*Enter a valid Name";
                    }
                    if (res.data === "exist") {
                        checkEmail.textContent = "* Email already exists";
                        checkPassword.textContent = "";
                        checkName.textContent = "";
                    }
                    console.log(res.data);
                    console.log(email,password,name)
                })
                .catch(e => {
                    // alert("Wrong Details")
                    console.log(e)
                })
        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div className='signup'>
            <Navbar />
            <div className="b-example-divider"></div>
            <div className="container col-xl-10 col-xxl-8 px-4">
                <div className="row align-items-center g-lg-5 py-4">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-5 fw-bold lh-1 text-warning mb-3">Welcome to SPLASH</h1>
                        <p className="col-lg-10 text-light fs-5">Splash is a dynamic and innovative video-sharing platform designedhtmlFor users to express themselves, share their creativity, and connect with a global audience. With a user-friendly interface and cutting-edge features, Splash empowers content creators to make a splash in the digital world. Dive into the exciting world of Splash, where creativity knows no bounds!</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 ">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="floatingInput" placeholder="Surya Teja" required />
                                <label htmlFor="floatingInput">User name</label>
                                <span id='validateName' style={{ color: "red" }}></span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="floatingEmail" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                                <span id='validateEmail' style={{ color: "red" }}></span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                                <span id='validatePassword' style={{ color: "red" }}></span>
                            </div>
                            <button className="w-100 btn btn-lg btn-success" onClick={submit} type="submit">Sign Up</button>
                            <hr className="my-4" style={{ color: "white" }} />
                            <Box className="text-body-secondary" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={1} >
                                <Typography sx={{ color: "yellow" }}>Already have an account ....!</Typography>
                                <Link to='/' className='btn btn-primary'>Login</Link>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
            <div className="b-example-divider"></div>
            <Layer />
        </div>

    );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//     const history = useNavigate()
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isChecked, setIsChecked] = useState(false);
//     const [isFormValid, setIsFormValid] = useState(true);

//     const validatePassword = (password) => {
//         const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//         return passwordRegex.test(password);
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@(rguktrkv)?(gmail)\.(com)?(in)$/;
//         return emailRegex.test(email);
//     };

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };

//     const submit = (e) => {
//         e.preventDefault();

//         const isPasswordValid = validatePassword(password);
//         const isEmailValid = validateEmail(email);
//         const isCheckboxChecked = isChecked;
//         const isFormValid = isPasswordValid && isEmailValid && isCheckboxChecked;
//         setIsFormValid(isFormValid);

//         if (isFormValid) {

//                 try {
//                         axios.post("http://localhost:8000/signup", {
//                         email, password, name
//                     })
//                         .then(res => {
//                             if (res.data === "exist") {
//                                 alert("User already exists")
//                             }
//                             else if (res.data === "not exist") {

//                                 history('/home', { state: { id: name } })
//                             }
//                         })
//                         .catch(e => {

//                             alert("Wrong Details")
//                             console.log(e)
//                         })
//                 } catch (e) {
//                     console.log(e);
//                 }
//         }

//     }

//     return (
//         <>
//             <Navbar />
//             <div className="container-fluid bg">
//                 <div className="container col-xl-10 col-xxl-8 px-4 py-3 bg-transparent">
//                     <div className="row align-items-center g-lg-5 py-3">
//                         <div className="col-lg-7 text-center text-lg-start">
//                             <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">Welcome to SPLASH</h1>
//                             <p className="col-lg-10 fs-4">
//                                 Splash is a dynamic and innovative video-sharing platform designedhtmlFor users to express
//                                 themselves, share their creativity, and connect with a global audience. With a
//                                 user-friendly interface and cutting-edge features, Splash empowers content creators to
//                                 make a splash in the digital world. Dive into the exciting world of Splash, where
//                                 creativity knows no bounds!
//                             </p>
//                         </div>
//                         <div className="col-md-10 mx-auto col-lg-5">
//                             <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" noValidate>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         onChange={(e) => setName(e.target.value)}
//                                         id="floatingInput"
//                                         placeholder="Surya Teja"
//                                         required
//                                     />
//                                     <label htmlFor="floatingInput">User name</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="email"
//                                         className={`form-control ${isEmailValid ? '' : 'is-invalid'}`}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         id="floatingInput"
//                                         placeholder="name@example.com"
//                                         required
//                                     />
//                                     <label htmlFor="floatingInput">Email address</label>
//                                     <div className="invalid-feedback">Please enter a valid email address</div>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="password"
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className={`form-control ${isPasswordValid ? '' : 'is-invalid'}`}
//                                         id="floatingPassword"
//                                         placeholder="Password"
//                                         required
//                                     />
//                                     <label htmlFor="floatingPassword">Password</label>
//                                     <div className="invalid-feedback">
//                                         Password must contain at least 8 characters, 1 capital letter, and 1 number
//                                     </div>
//                                 </div>
//                                 <div className="form-check mb-3">
//                                     <input
//                                         type="checkbox"
//                                         className={`form-check-input ${isChecked ? '' : 'is-invalid'}`}
//                                         id="validationFormCheck1"
//                                         checked={isChecked}
//                                         onChange={handleCheckboxChange}
//                                         required
//                                     />
//                                     <label className="form-check-label" htmlFor="validationFormCheck1">
//                                         Check this checkbox
//                                     </label>
//                                     <div className="invalid-feedback">Please check the checkbox</div>
//                                 </div>
//                                 <button className="w-100 btn btn-lg btn-success" onClick={submit} type="submit">
//                                     Sign Up
//                                 </button>
//                                 <hr className="my-4" />
//                                 <small className="text-body-secondary m-1">Already have an account ....! </small>
//                                 <Link to="/" className="btn btn-primary">
//                                     Login
//                                 </Link>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Layer />
//         </>
//     );
// };

// export default SignUp;
