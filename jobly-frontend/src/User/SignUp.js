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
      const userData = JSON.stringify(data)
      console.log(userData)
      JoblyApi.register(userData)
   }
   return (
      <div className="SignUp">
         <Card className="col-md-4 text-center">
            <CardTitle> Sign Up </CardTitle>
            <CardBody>
               <form onSubmit={handleSubmit((data, e) => signUpUser(data, e))}>
                  <input {...register('username')} placeholder="username"></input>
                  <input {...register('password')} placeholder="password" type="password"></input>
                  <input {...register('first_name')} placeholder="first name"></input>
                  <input {...register('last_name')} placeholder="last name"></input>
                  <input {...register('email')} placeholder="email" type="email"></input>
                  <button className="btn btn-secondary">Sign Up</button>
               </form>
            </CardBody>
         </Card>
      </div>
   )
}

export default SignUp