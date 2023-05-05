import React from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"




class JoblyApi {
   // stores bearer token for logged in user
   static token;

   static async request(endpoint, data = {}, method = 'get') {
      console.debug('API CALL:', endpoint, data, method);
      const url = `${BASE_URL}/${endpoint}`
      const headers = { Authorization: `Bearer ${JoblyApi.token}` };
      const params = (method === "get")
         ? data
         : {};
      try {
         return (await axios({
            url,
            method,
            data,
            params,
            headers
         })).data;
      } catch (err) {
         console.error("API Error:", err.response);
         let message = err.response.data.error.message;
         throw Array.isArray(message) ? message : [message];
      }
   }

   static async getCompanies(searchVal = '') {
      if (searchVal) {
         const results = await this.request(`companies?name=${searchVal}`)
         return results.companies
      }
      else {
         const result = await this.request('companies');
         return result.companies
      }
   }

   static async getJobs() {
      const result = await this.request(`jobs`)
      return result.jobs
   }

   static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
   }

   static async register(data) {
      let res = await this.request(`auth/register`, data, 'post')
      console.log(res)
   }
}

JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi