import React, { useState } from "react";
import { CardBody, Card, CardTitle, CardHeader } from "reactstrap";

const Job = ({ JobArray }) => {
   const [applied, setApplied] = useState(false)
   const toggleApplied = () => {
      setApplied(applied => !applied)
   }
   return (
      <div>
         {JobArray.map(job =>
            <Card className=".col .col-auto" key={job.id}>
               <CardHeader>
                  <CardTitle>
                     <p>{job.title}</p>
                  </CardTitle>
               </CardHeader>
               <CardBody>
                  <ul>
                     <li>Company: {job.companyName}</li>
                     <li>Title: {job.title}</li>
                     <li>Salary: ${job.salary}</li>
                  </ul>
               </CardBody>
            </Card>)}
      </div>
   )
}

export default Job;