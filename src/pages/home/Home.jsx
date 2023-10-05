import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./home.css";
import BookCard from "../../component/card/BookCard";

const Home = () => {
   const [data, setData] = useState([]);
   const [sortedData, setSortedData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [sortCriteria, setSortCriteria] = useState('title');
   const [sortOrder, setSortOrder] = useState('asc');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?page=${currentPage}&sort=${sortCriteria}&order=${sortOrder}`);
            setData(response.data.data);
            setSortedData(response.data.data);
            setTotalPages(response.data.pagination.totalPages);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, [currentPage, sortCriteria, sortOrder]);

   useEffect(() => {
      const sorted = [...data];
      sorted.sort((a, b) => {
         if (sortOrder === 'asc') {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
         } else {
            return b[sortCriteria].localeCompare(a[sortCriteria]);
         }
      });
      setSortedData(sorted);
   }, [sortCriteria, sortOrder, data]);

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   const handleSortChange = (criteria) => {
      if (criteria === sortCriteria) {
         setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
         setSortCriteria(criteria);
         setSortOrder('asc');
      }
   };

   return (
      <>
         <div className="sorting text-right">
            <button onClick={() => handleSortChange('title')}>Sort by Title 👉 {sortCriteria === 'title' ? `(${sortOrder === 'asc' ? 'ASC' : 'DESC'})` : ''}</button>
         </div>

         <div className="bookcard">
            {sortedData.map((item, index) => (
               <BookCard data={item} key={index} />
            ))}
         </div>
         
         <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
         </div>
      </>
   );
};

export default Home;