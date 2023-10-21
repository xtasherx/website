import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { useState } from "react";

function Toggle() {
  const [lightMode, setLightMode] = useState(false);

  const handleClick = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  return (
    <>
      <button
        className="btn--xs btn--pilled u-flex m-1 u-items-center"
        onClick={handleClick}
      >
        {lightMode ? (
          <img className="lightModeIcon" src={light}></img>
        ) : (
          <img className="lightModeIcon" src={dark}></img>
        )}

        {lightMode ? "light mode" : "dark mode"}
      </button>
    </>
  );
}

export default Toggle;
