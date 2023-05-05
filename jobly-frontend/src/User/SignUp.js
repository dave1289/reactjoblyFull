import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Placeholder } from "reactstrap";
import "./SignUp.css"
import { Card, CardBody, CardTitle } from "reactstrap";
import JoblyApi from "../Api";

const SignUp = () => {
   const { register, handleSubmit, reset } = useForm();
   const [data, setData] = useState("");

   const signUpUser = (data, evt) => {
      evt.preventDefault();
      // console.log('PASSED DATA', data)
      JoblyApi.register(data)
   }
   return (
      <div className="SignUp">
         <Card className="col-sm-3 text-center" id="signupcard" style={{ width: '15rem'}}>
            <CardTitle className="display-5"> Sign Up </CardTitle>
            <CardBody>
               <form onSubmit={handleSubmit((data, e) => signUpUser(data, e))}>
                  <label>Username:
                     <input {...register('username')} placeholder="username"></input>
                  </label>
                  <label>Password:
                     <input {...register('password')} placeholder="password" type="password"></input>
                  </label>
                  <label>First name:
                     <input {...register('first_name')} placeholder="first name"></input>
                  </label>Last name:
                  <input {...register('last_name')} placeholder="last name"></input>
                  <label>Email:
                     <input {...register('email')} placeholder="email" type="email"></input>
                  </label>
                  <button className="btn btn-secondary">Sign Up</button>
               </form>
            </CardBody>
         </Card>
      </div>
   )
}

export default SignUp