import axios from "axios";
import React, { useEffect, useState } from "react";
import Imagen from "./Imagen.js";
import ResidentInfo from "./ResidentInfo.js";

const Content = (residents) => {
  const [dataCharacter, setDataCharacters] = useState([]);
  const [renderImage, setRenderImagen] = useState(undefined);
  console.log(residents);
  let newArray = [];

  useEffect(() => {
    let newArray = [];

    for (let i = 0; i < 10; i++) {
      axios.get("https://rickandmortyapi.com/api/character/10").then((res) => {
        console.log(res.data);
        newArray.push(res.data);
        setDataCharacters(newArray);
      });
    }
  }, [residents]);

  useEffect(() => {
    let render;
    if (dataCharacter !== undefined) {
      render = dataCharacter.map((value, index) => (
        <div className="containerMajor" key={index}>
          <div className="container col-lg-5 col-md-9">
            <Imagen url={value.image} />
            <div className="containerLocation col-sm-10 col-lg-6">
              {/* <LocationContainer location={dataLocation}/> */}
              <ResidentInfo name={value.name} origin={value.origin.name} />
            </div>
          </div>
        </div>
      ));
    }
    setRenderImagen(render);
  }, [residents, dataCharacter]);

  useEffect(() => {
    //console.log(renderImage);
  }, [renderImage]);

  return <div>{renderImage === undefined ? "Error" : renderImage}</div>;
};

export default Content;
