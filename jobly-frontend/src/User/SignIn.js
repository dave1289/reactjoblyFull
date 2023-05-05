import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Placeholder } from "reactstrap";
import "./SignIn.css"
import { Card, CardBody, CardTitle } from "reactstrap";
import JoblyApi from "../Api";

const SignIn = () => {
   const { register, handleSubmit, reset } = useForm();
   const [data, setData] = useState("");

   const onSubmit = (data, e) => {
      e.preventDefault();
      // console.log('PASSED DATA', data)
      JoblyApi.login(data)
   }

   return (
      <div className="SignIn">
         <Card className="text-center col-sm-3" style={{width: '15rem'}}>
            <CardTitle className="display-5"> Sign In </CardTitle>
            <CardBody>
         <form onSubmit={handleSubmit((data, e) => onSubmit(data, e))}>
            <input {...register('username')} placeholder="username"></input>
            <input {...register('password')} placeholder="password" type="password"></input>
            <button className="btn btn-secondary">Sign In</button>
         </form>
         </CardBody>
         </Card>
      </div>
   )
}

export default SignIn