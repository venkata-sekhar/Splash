import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar'
import Layer from "./Layer"

export default function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        const pwdSpan = document.getElementById('validatePassword');
        const emailSpan = document.getElementById('validateEmail');
        pwdSpan.textContent = "";
        emailSpan.textContent = "";
        
    

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history('/home', { state: { id: email } })
                    }
                    else if (res.data === "not exist") {
                        pwdSpan.textContent = "* User must Sign Up";
                    }
                    if (email === "") {
                        emailSpan.textContent = "* Enter your email";
                    }
                    if(password === ""){
                        pwdSpan.textContent = "* Enter your Password";
                    }
                    else {
                        pwdSpan.textContent = "Wrong Password..Try Again....!";
                    }
                    console.log(email, password)
                })
                .catch(e => {
                    alert("Wrong Details")
                    console.log(e)
                })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='login'>
            <Navbar />
            <div className="container col-xl-10 col-xxl-8 px-4" style={{ display: "flex" }}>
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-warning">Welcome back to Splash</h1>
                        <p className="col-lg-10 text-light fs-4">Welcome back to Splash, where your digital journey continues! Rediscover the thrill of seamless video sharing and connection. We've fine-tuned your experience for even more creativity and engagement. Dive in and let Splash elevate your satisfaction to new heights!</p>
                    </div>
                    <div className="col-md-10 col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="floatingInput" placeholder="name@example.com" required />
                                <label htmlFor="floatingInput">Email address</label>
                                <span id='validateEmail' style={{ color: 'red', fontVariant: 'h5' }}></span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="floatingPassword" placeholder="Password" required />
                                <label htmlFor="floatingPassword">Password</label>
                                <span id='validatePassword' style={{ color: "red", fontVariant: "h5" }}></span>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" onClick={submit} type="submit">Login</button>
                            <hr className="my-3" style={{color:"white"}} />
                            <Box gap={1} sx={{ display: "flex", alignContent: "center", justifyContent: "center", color: "yellow"}}>
                                <Typography sx={{mt:"5px"}}>Don't you have an account ..?</Typography> 
                                <Link to="/signup" className='btn btn-success'>SignUp</Link>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
            <Layer />
        </div>
    )
}
