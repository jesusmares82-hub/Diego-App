import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./SearchBox";
import Imagen from "./Imagen.js";
import "./grid-portafolio.css";
import "./normalize.css";
import LocationInfo from "./LocationInfo.js";
import ResidentInfo from "./ResidentInfo.js";
import Content from "./content.js";
let arrCharacters = [];

function App() {
  let random = Math.floor(Math.random() * 108);
  const [query, setQuery] = useState(random);
  const [data, setData] = useState("");
  const [dataLocation, setDataLocation] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    setHasData(false);
    axios(`https://rickandmortyapi.com/api/location/1/`).then((dataApi) => {
      let arrResidents = dataApi.data.residents;

      let arrLocation = dataApi.data;
      for (let index = 0; index < 10; index++) {
        arrCharacters.push(arrResidents[index]);
      }
      //setData(arrCharacters);
      setHasData(true);
      setData(dataApi.data);
      setDataLocation(arrLocation);
    });
  }, [query]);

  const handleSearch = (value, setSearchTerm) => {
    setQuery(value);
    setSearchTerm("");
  };

  //console.log(arrCharacters);
  return (
    <div className="App">
      <SearchBox handleSearchTerm={handleSearch} />
      {hasData && (
        <>
          <LocationInfo
            name={data.name}
            type={data.type}
            dimension={data.dimension}
          />
          <Content residents={arrCharacters} />
        </>
      )}
    </div>
  );
}

export default App;
