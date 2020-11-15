import React from 'react';
import "./header.css"

function Header(props) {
  return (
    <>
        <header className="header">
          {props.children}
        </header>
    </>
  );
}
export default Header;