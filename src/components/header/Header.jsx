import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // this useEffect will start page from top in new window 
    useEffect (() => {          
      window.scrollTo(0, 0);
    }, [location])

    // this method is used to chnage navbar funcionality based on scroll 
    const controlNavbar = () => {
      if (window.scrollY > 200){
        if(window.scrollY > lastScrollY && !mobileMenu){
          setShow("hide");
        }
        else{
          setShow("show");
        }
      }else{
        setShow("top");
      }
      setLastScrollY(window.scrollY)
    }

    // this method is adding scroll event and removing it after use 
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar)
      return () => {
      window.removeEventListener("scroll", controlNavbar)
      }
    }, [lastScrollY]);

    // this method is to open a search menu 
    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    };

    // this method is to open a mobile menu 
    const openMobileMenu = () => {
      setMobileMenu(true);
      setShowSearch(false);
    };

    // this method is to handle search query and hide search panel after 1 sec after pressing enter 
    const searchQueryHandler = (event) => {
      if(event.key=="Enter" && query.length > 0){
          navigate(`/search/${query}`);
        setTimeout(()=> {
          setShowSearch(false);
        }, 1000);
      }
  };

    // this method is to navigate through pages
  const navigationHandler = (type) => {
    if(type === "movie"){
      navigate("/explore/movie");
    }
    else{
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
            <div className="log">
              <img src={logo} alt="" />
            </div>
            <ul className="menuItems">
              <li className="menuItem" onClick={() => {navigationHandler("movie")}}>Movies</li>
              <li className="menuItem" onClick={() => {navigationHandler("tv")}}>TV shows</li>
              <li className="menuItem">
                <HiOutlineSearch onClick={openSearch} />
              </li>
            </ul>

            <div className="mobileMenuItems">
              <HiOutlineSearch onClick={openSearch} />
              {mobileMenu ? <VscChromeClose onClick={ () => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
            </div>
          </ContentWrapper>
          {showSearch && <div className="searchBar">
            <ContentWrapper>
            <div className="searchInput">
                    <input 
                    type="text"
                    placeholder='Movie or TV show...'
                    onKeyUp={searchQueryHandler}
                    onChange={(e)=> setQuery(e.target.value)} />
                </div>
                <VscChromeClose onClick={ () => setShowSearch(false)} />
            </ContentWrapper>
          </div>}
        </header>
    );
};

export default Header;