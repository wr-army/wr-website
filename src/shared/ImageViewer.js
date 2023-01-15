import '../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ImageViewer({imagesNames}) {
  return (
    <Carousel slide={false} variant="dark">
        {imagesNames.map((name) => (
            <Carousel.Item  key={name}>
                <img 
                    src={require(`../storage/images/${name}.jpeg`)} 
                    alt={name} 
                    className="App-image"
                />
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ImageViewer;