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
                    style={{width: "30rem", height: "20rem"}} 
                />
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ImageViewer;