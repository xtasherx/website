import { useState } from "react";
import Button from "./components/Button";
import LandingCard from "./components/LandingCard";
import ContactCard from "./components/ContactCard";
import ProjectsCard from "./components/ProjectsCard";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  //when button is pressed display the correct card component
  const [state, setState] = useState(<LandingCard />);

  const handleClick = (text) => {
    setState(text);
  };

  return (
    <>
      <div className="header u-flex u-justify-flex-end">
        <Toggle />
      </div>
      <div className="u-flex u-flex-column u-justify-center h-90p-lg u-items-center">
        <div className="cardContainer w-90p w-70p-md p-2 p-10-md u-flex u-flex-column u-justify-center u-items-center">
          {state}
        </div>

        <div className="u-center m-2">
          <Button
            text="About Me"
            onClick={() => {
              handleClick(<LandingCard />);
            }}
          />
          <Button
            text="Contact"
            onClick={() => {
              handleClick(<ContactCard />);
            }}
          />
          <Button
            text="Experience"
            onClick={() => {
              handleClick(<ProjectsCard />);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
