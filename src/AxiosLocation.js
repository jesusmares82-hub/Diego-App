import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./content.js";

const AxiosLocation = (url) => {
  const [data, setData] = useState("");
  const [dataLocation, setDataLocation] = useState([]);

  useEffect(() => {
    axios(url).then((dataApi) => {
      let arrResidents = dataApi.data.results[0].residents;
      let arrCharacters = [];
      let arrLocation = dataApi.data.results[0];

      for (let index = 0; index < 10; index++) {
        arrCharacters.push(arrResidents[index]);
      }
      setData(arrCharacters);
      setDataLocation(arrLocation);
    });
  }, []);

  //Content(data);

  useEffect(() => {
    // console.log(data) urls para buscar los personajes
    // console.log(dataLocation) Localizacion
  }, [data, dataLocation]);

  return (
    <>
      <Content data={data} />
    </>
  );
};

export default AxiosLocation;
