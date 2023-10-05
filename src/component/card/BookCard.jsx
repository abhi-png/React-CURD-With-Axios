import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./card.css"

const BookCard = ({ data }) => {
   const navigate = useNavigate();

   return (
      <div className="card">
         <p className="title">Title: <span>{data.title}</span></p>
         <p className="author">Author: <span>{data.author}</span></p>
         <p className="year">Year: <span>{data.year}</span></p>
         <p className="language">Language: <span>{data.language}</span></p>
         <p className="country">Country: <span>{data.country}</span></p>
         {/* <p className="link">Link: <span>{data.link ? `${data.link}` : "No Link Provided"}</span></p> */}
         <div className="edit">
            <FiEdit onClick={()=>navigate(`/edit/${data.id}`)} />
         </div>
      </div>
   )
}

export default BookCard