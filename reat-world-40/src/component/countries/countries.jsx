import { useEffect, useState } from "react";
import Showcountry from "../showcountry/showcountry";
import "./counties.css";

const Countriesall = () => {
  const [countries, setcountries] = useState([]);

  const [visitedcountryadd, setvisitedcountry] = useState([]);

  const [showflag, setflag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);

  const handelvisitedcountry = (data) => {
    // console.log("add22222222222");
    const newadd = [...visitedcountryadd, data];
    setvisitedcountry(newadd);
  };
  // show flag

  const addflagevent = (flags) => {
    // console.log("jjjjjjjjjjj");\

    const newadd = [...showflag, flags];
    setflag(newadd);
  };

  return (
    <div>
      <h2>countries: {countries.length}</h2>
      <div>
        <h2>my visited list:{visitedcountryadd.length}</h2>
        <ul>
          {visitedcountryadd.map((inputdata) => (
            <li key={inputdata.cca3}>{inputdata.name.common}</li>
          ))}
        </ul>
      </div>

      {/* 
      show flag */}

      <div>
        {showflag.map((flags, idx) => (
          <img key={idx} src={flags}></img>
        ))}
      </div>

      <div className="countrt-container">
        {countries.map((data) => (
          <Showcountry
            key={data.cca3}
            dataview={data}
            mycounrtyvisite={handelvisitedcountry}
            addflagevent={addflagevent}
          ></Showcountry>
        ))}
      </div>
    </div>
  );
};

export default Countriesall;
