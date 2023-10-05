import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header"
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Footer from "./component/footer/Footer";
import AddBook from "./pages/addBook/AddBook";
import SearchResults from "./pages/serchResults/SearchResults";
import UpdateBook from "./pages/updateBook/UpdateBook";

export default function App() {
   return (
      <div className="app">
         <Router>
            <Header />
            <Routes>
               <Route index element={<Home />} />
               <Route path="/addbook" element={<AddBook />} />
               <Route path="/search/:query" element={<SearchResults />} />
               <Route path="/edit/:id" element={<UpdateBook />} />
               <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   )
}