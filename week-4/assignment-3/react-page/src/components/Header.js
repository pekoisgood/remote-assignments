import { useState } from "react";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const items = [
    {
      title: "Item 1",
      href: "#item1",
    },
    {
      title: "Item 2",
      href: "#item2",
    },
    {
      title: "Item 3",
      href: "#item3",
    },
    {
      title: "Item 4",
      href: "#item4",
    },
  ];

  return (
    <header className="wrap">
      <h5>Website Title / Logo</h5>
      <ul className="menu">
        {items.map((item) => (
          <li>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
      {showSideMenu ? (
        <div className="menu-sidebar">
          <ul>
            {items.map((item) => (
              <li>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
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
