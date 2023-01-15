import React from 'react';
import ImageViewer from '../shared/ImageViewer';
import products from '../storage/products.json';

function Products() {
    return (
      <div className='row mt-2'>
        {products.map((product) => (
          <div key={product.id} className='col-sm-6 col-xs-12'>
            <div className='card shadow p-3 mb-5 bg-white rounded'>
              <h3>{product.name}</h3>
              <ImageViewer imagesNames={product.images}/>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;