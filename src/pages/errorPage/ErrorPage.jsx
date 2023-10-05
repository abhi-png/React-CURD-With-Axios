import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
   const navigate = useNavigate();

   return (
      <div style={{paddingTop: "100px"}}>
         <div className="text-center">
            <h2 className="text-2xl text-sky-400/75 mt-60">Page Not Found!</h2>
            <button className="text-blue-600 mb-40" onClick={()=>navigate("/")}>Back To Home</button>
         </div>
      </div>
   )
}

export default ErrorPage