import React from "react";
import HomeIcon from "../icons/home.svg";
import GeneralIcon from "../icons/news.svg";
import BusinessIcon from "../icons/business.svg";
import HealthIcon from "../icons/health.svg";
import ScienceIcon from "../icons/science.svg";
import SportIcon from "../icons/sports.svg";
import TechIcon from "../icons/tv-guide.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="icon1">
        <img src={HomeIcon} alt="home_icon" />
        <span>Home</span>
      </div>
      <div className="icon">
        <img src={GeneralIcon} alt="general_icon" />
        <span>General</span>
      </div>
      <div className="icon">
        <img src={BusinessIcon} alt="business_icon" />
        <span>Business</span>
      </div>
      <div className="icon">
        <img src={HealthIcon} alt="health_icon" />
        <span>Health</span>
      </div>
      <div className="icon">
        <img src={ScienceIcon} alt="science_icon" />
        <span>Science</span>
      </div>
      <div className="icon">
        <img src={SportIcon} alt="sport_icon" />
        <span>Sports</span>
      </div>
      <div className="icon">
        <img src={TechIcon} alt="tech_icon" />
        <span>Technology</span>
      </div>
    </div>
  );
};

export default Navigation;
