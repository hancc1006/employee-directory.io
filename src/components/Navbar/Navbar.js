import React from "react";
import "./navbar.css";
import Header from "../Header/Header";
import Sort from "../Sort/Sort";
//import search from "../SearchBar/SearchBar.js"

function Navbar(props) {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Header>Employee Directory</Header>
      {<form>
        <div className="input-group search-bar">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control coloring"
            placeholder="Search for an Employee"
            id="search"
          />   
        </div>
       
      </form> }
    </div>
  )
}

export default Navbar;