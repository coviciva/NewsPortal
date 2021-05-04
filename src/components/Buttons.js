import React from "react";

const Buttons = ({
  showMenu,
  clickedFeatured,
  clickedLatest,
  setClickedFeatured,
  setClickedLatest,
}) => {
  const handleFeatured = () => {
    setClickedFeatured(true);
    setClickedLatest(false);
  };

  const handleLatest = () => {
    setClickedLatest(true);
    setClickedFeatured(false);
  };
  return (
    <div className="buttons" style={showMenu ? { display: "none" } : {}}>
      <button
        className="featuredBtn"
        onClick={handleFeatured}
        style={
          clickedFeatured
            ? {
                backgroundColor: "rgba(187, 30, 30, 0.1)",
                color: "#bb1e1e",
              }
            : {}
        }
      >
        Featured
      </button>
      <button
        className="latestBtn"
        onClick={handleLatest}
        style={
          clickedLatest
            ? {
                backgroundColor: "rgba(187, 30, 30, 0.1)",
                color: "#bb1e1e",
              }
            : {}
        }
      >
        Latest
      </button>
    </div>
  );
};

export default Buttons;
