import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ShowMeme.css";
const ShowMeme = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/memes`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);
  return (
    <>
      <div className="mt-5 gallery">
        {gallery.map((m, index) => (
          <div className="pics " key={index}>
           
        
            <img style={{ width: "100%" }} src={m.imageURL} alt="" />
            
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowMeme;
