import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import '../Styles/Signin.css';

const Signup = () => {



  const [data, setData] = useState({
    fullName: "",
    image: "",
    emailid: "",
    mobileNumber: "",
    about: "",
    dateOfBirth: "",
    gender: "",
    role: "",
    password: "",
    /*Addresses: {
      houseNumber: "",
      streetName: "",
      colonyName: "",
      city: "",
      State: "",
      pincode: ""
    }*/
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  const handleSignIn = (event) => {
    event.preventDefault();

    const userProfile = {
      fullName: data.fullName,
      image: data.image,
      emailid: data.emailid,
      mobileNumber: data.mobileNumber,
      about: data.about,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      role: data.role,
      password: data.password,
      /*Addresses: {
        houseNumber: data.Addresses,
        streetName: data.Addresses,
        colonyName:data.Addresses,
        city:data.Addresses,
        State:data.Addresses,
        pincode:data.Addresses }*/
    }
    console.log(userProfile);

    axios.post("http://localhost:8081/profileservice/add", userProfile)
  }

  return (
    <div className='container2'>
      <header className='h001'>
        <h1>Create a new account</h1>
      </header>
      <form className='modal-content' method='post' onSubmit={handleSignIn}>
        <div className='input-field'>
          <input onChange={handleChange} className='fullName' placeholder='Full name' name='fullName' value={data.fullName} required />

          <br></br>

          <label for="image"><b>Image</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Image URL" name="image" value={data.image} required />

          <label for="mobileNumber"><b>Mobile Number</b></label>
          <input onChange={handleChange} className='mbN' type='number' placeholder="Enter Mobile Number" name="mobileNumber" value={data.mobileNumber} required />

          <br></br>
          <br></br>

          <label for="email"><b>Email</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Email" name="emailid" value={data.emailid} required />

          <label for="psw"><b>Password</b></label>
          <input onChange={handleChange} type="password" placeholder="Enter Password" name="psw" required />

          <label for="password"><b>Confirm Password</b></label>
          <input onChange={handleChange} type="password" placeholder="Confirm Password" name="password" value={data.password} required />

          <label for="DoB"><b>Date of birth</b></label>
          <input onChange={handleChange} className='Dob' type='date' placeholder="Date of birth" name="dateOfBirth" value={data.dateOfBirth} required />

          <br></br>

          <label for="gender"><b>Gender</b></label>
          <span className='gender'>
            <span className='sex'>
              <label className='s001'>Male</label>
              <input onChange={handleChange} className='g001' type="radio" name="gender" value="Male" />
            </span>
            <span className='sex'>
              <label className='s001'>Female</label>
              <input onChange={handleChange} className='g001' type="radio" name="gender" value="Female" />
            </span>
            <span className='sex'>
              <label className='s001'>Others</label>
              <input onChange={handleChange} className='g001' type="radio" name="gender" value="Others" />
            </span>
          </span>

          <br></br>
          <br></br>

          <label for="about"><b>About</b></label>
          <input onChange={handleChange} type="text" placeholder="Write about Yourself" name="about" value={data.about} required />

          <label for="role"><b>Role</b></label>
          <span className='r001'>
            <label className='r002'>User</label>
            <input onChange={handleChange} type="radio" name="role" value="user" />
          </span>


          {/*<label for="houseNumber"><b>House Number</b></label>
          <input onChange={handleChange} type="number" placeholder="Enter House Number" name="Addresses" value={data.Addresses.houseNumber} required />

          <label for="streetName"><b>Street Name</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Street name" name="Addresses.streetName" value={data.Addresses.streetName} required />

          <label for="colonyName"><b>Colony Name</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter colony name" name="Addresses.colonyName" value={data.Addresses.colonyName} required />

          <label for="city"><b>City</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter city" name="Addresses.city" value={data.Addresses.city} required />

          <label for="state"><b>State</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter state" name="Addresses.state" value={data.Addresses.State} required />

          <label for="pincode"><b>Pincode</b></label>
  <input onChange={handleChange} type="number" placeholder="Enter pincode" name="Addresses.pincode" value={data.Addresses.pincode} required />*/}
        </div>
        <div className='Regbutton'>

          <Link to={"/home"}>
            <button type='submit' className="Signup">Sign In</button>
          </Link>
        </div>
      </form>
      <div className='olduser'>
        <button type="submit" onClick={() => { window.location.replace('/login') }} className='a001'>
          Already have an Account?
        </button>
      </div>
    </div>
  );
};

export default Signup;