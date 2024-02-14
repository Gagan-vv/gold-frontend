import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const item = 1;
  const islogin = true;
  return (
    <>
      <div className="alert">Optimised only for laptop screen</div>
      <div className="header-main">
        <a href="/" className="imgg">
          <img className="imgg" src={"/asset/logo.jpg"} alt="logo" />
        </a>
        <div className="right-item">
          <ul>
            <li className="input-1">
              <IoSearch
                className="search-icon"
                size="26px"
                style={{ position: "relative", top: "4px" }}
              />
              <input
                type="search"
                placeholder="Search.."
                className="search"
                size="40px"
                style={{ position: "relative", bottom: "4px" }}
              />
            </li>
            <li>
              <Link to={`/category/bangle`} state={{ data: "bangle" }}>
                Bangles
              </Link>
            </li>
            <li>
              <a href="">Rings</a>
            </li>
            <li>
              <a href="">Necklace</a>
            </li>

            <li>
              <a href="">
                <span className="phone-icon">
                  <FaPhone
                    size="25px"
                    style={{ position: "relative", top: "3px" }}
                  />
                </span>
              </a>
            </li>
            <li>
              <div>
                <a href="/wish">
                  <FaRegHeart
                    size="26px"
                    style={{ position: "relative", top: "4px" }}
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="/bag">
                  <IoBagHandleOutline
                    size="26px"
                    style={{ position: "relative", top: "2px" }}
                  />
                  <span className="notify-badge-head">5</span>
                </a>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">
                  <CgProfile
                    size="26px"
                    style={{ position: "relative", top: "4px" }}
                  />
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  {!islogin&&<a href="">Login</a>}
                  {islogin&&<a href="">Profile</a>}
                  {islogin&&<a href="">My Orders</a>}
                  {islogin&&<a href="">Logout</a>}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
