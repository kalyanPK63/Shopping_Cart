import React from 'react'
import '../Styles/Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogIn = () => {
    console.log("Youre logged in");
  }

  return (
    <div className='container'>
    <h1 className="H1">Login</h1>
    <div className='loginBox'>
    <input className='emailInput' placeholder='Email'/>
      <input className='passInput' placeholder='Password'/>
      <Link to={"/home"}>
        <button type='button' onClick={handleLogIn} className="loginPageBtn">Log In</button>
			</Link>
      <div className='forgPass'>
        <a href="./ForgotPassword">Forgotten password?</a>
      </div>
      <div>
        <Link to={"/signin"}>
          <button onClick={handleLogIn} className="RegisterB"> Create New Account </button>
				</Link>
      </div>
    </div>
  </div>
  )
}

export default Login;
  