import { useState } from "react";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <header className="wrap">
      <h5>Website Title / Logo</h5>
      <ul className="menu">
        <li>
          <a href="#item1">Item 1</a>
        </li>
        <li>
          <a href="#item2">Item 2</a>
        </li>
        <li>
          <a href="#item3">Item 3</a>
        </li>
        <li>
          <a href="#item4">Item 4</a>
        </li>
      </ul>
      {showSideMenu ? (
        <div className="menu-sidebar">
          <ul>
            <li>
              <a href="#item1">Item 1</a>
            </li>
            <li>
              <a href="#item2">Item 2</a>
            </li>
            <li>
              <a href="#item3">Item 3</a>
            </li>
            <li>
              <a href="#item4">Item 4</a>
            </li>
          </ul>
          <button
            id="close-btn"
            onClick={() => setShowSideMenu((prevState) => !prevState)}
          >
            X
          </button>
        </div>
      ) : (
        <div
          className="menu-btn"
          onClick={() => setShowSideMenu((prevState) => !prevState)}
        >
          <a href="#menu">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      )}
    </header>
  );
}
