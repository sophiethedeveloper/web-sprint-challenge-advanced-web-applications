import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        console.log(res)
        setColorList(res.data)
      })
      .catch((err) => console.log("cannot display colors", err.response));
  }, [editing]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList}  setEditing={setEditing} editing={editing}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
