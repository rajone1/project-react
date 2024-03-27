import { useState } from "react";
import "./showcontainer.css";

const Showcountry = ({ dataview, mycounrtyvisite, addflagevent }) => {
  // console.log(dataview);

  const { name, flags, population, area, cca3 } = dataview;

  const [visite, setvisite] = useState(false);

  const showvisite = () => {
    // setvisite(true);
    setvisite(!visite);
  };
  //
  // const setprops = () => mycounrtyvisite(dataview);
  return (
    <div className={`showcontainer ${visite ? "visitedcss" : "nonvisited"}`}>
      <h1 style={{ color: visite ? "green" : "red" }}>name:{name?.common}</h1>
      <img src={flags?.png} alt="" />
      <p>population{population}</p>
      <p>area{area}</p>
      <p>code: {cca3}</p>
      <button style={{ background: "orange" }} onClick={showvisite}>
        {visite ? "tavel-finish" : "lets travel"}
      </button>

      {visite ? "  i have visited this" : " i want to visite"}
      <br />
      <button onClick={() => mycounrtyvisite(dataview)}>shaon visite</button>
      <br />
      <br />
      <button onClick={addflagevent}>show flag</button>
    </div>
  );
};

export default Showcountry;
