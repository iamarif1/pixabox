import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=12940047-1ea793bd8bbe28b6f25f581d5&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="container mx-auto">
        { isLoading ? <h1 className="text-6xl text-center text-yellow-200 mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.key} image={image} />
          ))}
        </div>}
      </div>
  );
}

export default App;
