import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import JoblyApi from "../Api.js";
import './CompanyList.css'
import Company from './Company.js'
import CompanyDetails from "./CompanyDetails.js";

const CompanyList = () => {
   const [companies, setCompanies] = useState(null);
   const { register, handleSubmit, reset } = useForm();
   const [data, setData] = useState("");

   useEffect(function getCompaniesOnMount() {
      // console.debug("CompanyList useEffect getCompaniesOnMount");
      search();
   }, []);

   useEffect(function getCompaniesOnSearch(){
      // console.debug("searching companies")
      search(data.searchTerm)
      reset()
   }, [data])

   //   /* Triggered by search form submit; reloads companies. /
   async function search(searchVal) {
         let companies = await JoblyApi.getCompanies(searchVal? searchVal : null);
         setCompanies(companies);
   }

   if (!companies) {
      return;
   }

   return (
      <div className="CompanyList">
         <h1 className="display-5 text-center font-weight-bold">Companies</h1>
         <form id="CompanyList-Search" onSubmit={handleSubmit(data => setData(data))}>
            <input {...register("searchTerm")} placeholder="search term" className="mb-3 mt-2"></input>
            <button className="btn btn-secondary ml-4">Search</button>
         </form>
         <Company companyArray={companies} />
      </div>
   )
}

export default CompanyList;