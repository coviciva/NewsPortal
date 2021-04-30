import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__elements">
        <div className="header__title">
          <span className="header__title1">Make MyNews your homepage</span>
          <span className="header__title2">
            Every day discover what's trending on the internet!
          </span>
        </div>
        <div className="header__button">
          <button className="rectangle">GET</button>
          <span className="no_thanks">No, thanks</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
