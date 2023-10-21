import { useState } from "react";
import Button from "./components/Button";
import LandingCard from "./components/LandingCard";
import ContactCard from "./components/ContactCard";
import ProjectsCard from "./components/ProjectsCard";
import Toggle from "./components/Toggle";
import "cirrus-ui";
import "./App.scss";

function App() {
  const [state, setState] = useState(<LandingCard />);
  const currentClass =
    "btn--pilled font-alt text-gray-600 font-bold btn--sm m-1 hover-grow current";
  const offClass =
    "btn--pilled font-alt text-gray-600 font-bold btn--sm m-1 hover-grow";

  const handleClick = (card) => {
    setState(card);
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
            className={
              state.type.name === "LandingCard" ? currentClass : offClass
            }
            text="About Me"
            onClick={() => {
              handleClick(<LandingCard />);
            }}
          />
          <Button
            className={
              state.type.name === "ContactCard" ? currentClass : offClass
            }
            text="Contact"
            onClick={() => {
              handleClick(<ContactCard />);
            }}
          />
          <Button
            className={
              state.type.name === "ProjectsCard" ? currentClass : offClass
            }
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
