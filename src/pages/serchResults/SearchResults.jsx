import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../../component/card/BookCard";

const SearchResults = () => {
   const { query } = useParams();
   const [books, setBooks] = useState([]);

   useEffect(() => {
      const fetchBooks = async () => {
         try {
            const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?title=${query}`);
            setBooks(response.data.data);
         } catch (error) {
            console.error("Error fetching data: ", error);
         }
      };
      fetchBooks();
   }, [query]);

   return (
      <>
         <p className="text-center mb-8" style={{ paddingTop: "100px" }}>Search Results 👇</p>
         {books.length > 0 ? (
            <div className="bookcard" style={{ paddingTop: "10px" }}>
               {books.map((book) => (
                  <BookCard key={book.id} data={book} />
               ))}
            </div>
         ) : (
            <p className="text-center mb-96 mt-20">Sorry, Results not found!</p>
         )}
      </>
   )
}

export default SearchResults