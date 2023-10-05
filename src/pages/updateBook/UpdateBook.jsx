import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    title: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url = `http://68.178.162.203:8080/application-test-v1.1/books/${id}`;

    axios
      .put(url, formData)
      .then((response) => {
        console.log("Book updated successfully:", response.data);
        alert("Data Update Sucessfully");
        navigate("/")
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  return (
    <>
      <h1 className="text-center text-teal-50 text-2xl" style={{paddingTop: "100px"}}>Update Book ID - {id}</h1>
      <div className="inputbox">
        <form onSubmit={handleFormSubmit}>
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
          <button className="addbtn" type="submit">
            Update
          </button>
        </form>
      </div>
    </>

  );
};

export default UpdateBook;
