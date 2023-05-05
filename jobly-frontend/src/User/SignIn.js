import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Placeholder } from "reactstrap";
import "./SignIn.css"
import { Card, CardBody, CardTitle } from "reactstrap";

const SignIn = () => {
   const { register, handleSubmit, reset } = useForm();
   const [data, setData] = useState("");

   return (
      <div className="SignIn">
         <Card className="col-md-4 text-center">
            <CardTitle> Sign In </CardTitle>
            <CardBody>
         <form onSubmit={handleSubmit}>
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