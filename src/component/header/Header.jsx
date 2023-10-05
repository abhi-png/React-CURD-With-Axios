import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
   const [show, setShow] = useState("top");
   const [lastScrollY, setLastScrollY] = useState(0);
   const [mobileMenu, setMobileMenu] = useState(false);
   const [query, setQuery] = useState("");
   const [showSearch, setShowSearch] = useState("");
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   const controlNavbar = () => {
      // console.log(window.scrollY);
      if (window.scrollY > 200) {
         if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("hide");
         } else {
            setShow("show");
         }
      } else {
         setShow("top");
      }
      setLastScrollY(window.scrollY);
   }

   useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
         window.removeEventListener("scroll", controlNavbar);
      }
   }, [lastScrollY]);

   const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
         navigate(`/search/${query}`);
         setTimeout(() => {
            setShowSearch(false);
         }, 1000);
      }
   }

   const openSearch = () => {
      setMobileMenu(false);
      setShowSearch(true);
   }

   const openMobileMenu = () => {
      setMobileMenu(true);
      setShowSearch(false);
   }

   const navigationHandler = (type) => {
      navigate("/addbook");
      setMobileMenu(false);
   }

   return (
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
         <div className="contentWrapper">
            <div className="logo" onClick={() => navigate("/")}>
               <p>LOGO</p>
            </div>

            <ul className="menuItems">
               <li className="menuItem" onClick={() => navigationHandler("addbook")}>Add Books</li>
               <li className="menuItem">
                  <HiOutlineSearch onClick={openSearch} />
               </li>
            </ul>

            <div className="mobileMenuItems">
               <HiOutlineSearch onClick={openSearch} />
               {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}
            </div>
         </div>

         {showSearch && <div className="searchBar">
            <div className="contentWrapper">
               <div className="searchInput">
                  <input
                     type='text'
                     placeholder='Search for a book title....'
                     onChange={(e) => setQuery(e.target.value)}
                     onKeyUp={searchQueryHandler}
                  />
                  <VscChromeClose onClick={() => setShowSearch(false)} />
               </div>
            </div>
         </div>}
      </header >
   )
}