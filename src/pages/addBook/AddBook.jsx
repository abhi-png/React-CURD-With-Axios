import React, { useState } from "react";
import axios from "axios";
import "./AddBook.css"

const AddBook = () => {
   const [formData, setFormData] = useState({
      author: "",
      country: "",
      language: "",
      link: "",
      pages: "",
      title: "",
      year: ""
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post(
            "http://68.178.162.203:8080/application-test-v1.1/books",
            formData
         );
         console.log("Response:", response.data);
      } catch (error) {
         console.error("Error:", error);
      }
   };
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   return (
      <>
         <h1 className="text-center text-teal-50 text-2xl" style={{ paddingTop: "100px" }}>ADD Book</h1>
         <div className="inputbox">
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                     type="text"
                     placeholder="Author"
                     name="author"
                     value={formData.author}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Country"
                     name="country"
                     value={formData.country}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Language"
                     name="language"
                     value={formData.language}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Link"
                     name="link"
                     value={formData.link}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Pages"
                     name="pages"
                     value={formData.pages}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Title"
                     name="title"
                     value={formData.title}
                     onChange={handleInputChange}
                  />
                  <input
                     type="text"
                     placeholder="Year"
                     name="year"
                     value={formData.year}
                     onChange={handleInputChange}
                  />
               </div>
               <button className="addbtn" type="submit">Submit</button>
            </form>
         </div>
      </>
   );
};

export default AddBook;
