import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "portfolio", "experience", "contact"].map(
      (item, index) => (
        <a
          aria-label={item}
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >
          <i className={item} aria-hidden="true"/>
        </a>
      )
    )}
  </div>
);

export default NavigationDots;
