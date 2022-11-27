import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";


const navItem = (item, i, window) => {
  return (
    <div className="navbar__li-box" key={i} onClick={item[2]}>
    <div className="navItem_icon">{item[1]}</div>
    <li
      className="navbar__li"
      style={{
        display: window === false ? "inline-block" : "none",
      }}
    >
      {item[0]}
    </li>
  </div>
  )
}

const CustomNav = ({ li, isStudent }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 170 : 90 }}>
      {!window ? (
        <CloseIcon
          style={{
            height: "30px",
            width: "30px",
            color: "#354259",
            marginLeft: "auto",
            right: "1",
          }}
          onClick={() => openClose()}
        />
      ) : (
        <MenuIcon
          style={{
            height: "30px",
            width: "30px",
            color: "#354259",
            marginLeft: "1.25rem",
          }}
          onClick={() => openClose()}
        />
      )}
      <ul>
        {li.map((item, i) => {
          if (item[3] == "student") {
            if (!isStudent) {
              return null;
            }
          } else if (item[3] == "instructor") {
            if (isStudent) {
              return null;
            }
          }
          return (navItem(item, i, window));
        })}
      </ul>
    </nav>
  );
};

export default CustomNav;
