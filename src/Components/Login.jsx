import React, { useState } from 'react'
import './Login.css'
import { useNavigate} from "react-router-dom"
import StoreIcon from '@mui/icons-material/Store';
import {auth} from "./firebase";
import {createUserWithEmailAndPassword}  from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signIn =async (e)=>{
        e.preventDefault();
        const userCredentials=await signInWithEmailAndPassword(auth, email,password);
        console.log( userCredentials)
        navigate('/');


    }
    const register =async (e) =>{
        e.preventDefault();
        const userCredentials=await createUserWithEmailAndPassword(auth ,email,password);
        console.log( userCredentials);
        const user = userCredentials.user;
        localStorage.setItem("token",user.accessToken);
        localStorage.setItem("user",JSON.stringify(user));
        navigate('/');
     
    }
   
  return (
    <div className="login">
        <div className="login__logo"  onClick={() => navigate("/")}>
            < StoreIcon className="login__logoImage" fontSize="large"/>
            <h2 className="login__logoTitle"> EShopping</h2>
        </div>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" className="login__signInButton"  onClick={signIn}> Sign In </button>
            </form>
            <p>
                By signing-in you agree to the EShopping website conditions of use & Sale.Please see our Privacy Notice ,our Cookies Notice and our Interest-Based Ads Notice
            </p>
            <button type="submit" className='login__registerButton' onClick={register}>Create your eshop Account</button>
        </div>
    </div>
  )
}

export default Login