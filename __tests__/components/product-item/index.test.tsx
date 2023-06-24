import React from 'react';
import ProductItem from '@/components/product-item/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '@/store/index';

const products = [
     {
          id: "1",
          name: "Product 1",
          price: "10",
          color: "Red",
          images: ["image1.jpg", "image2.jpg"],
          colors: ["Red", "Blue", "Green"],
          discount: "5",
          currentPrice: 9.5,
     },
     {
          id: "2",
          name: "Product 2",
          price: "20",
          color: "Blue",
          images: ["image3.jpg", "image4.jpg"],
          colors: ["Blue", "Black", "White"],
          discount: "10",
          currentPrice: 18,
     },
     {
          id: "3",
          name: "Product 3",
          price: "30",
          color: "Green",
          images: ["image5.jpg", "image6.jpg"],
          colors: ["Green", "Yellow", "Orange"],
          discount: "15",
          currentPrice: 25.5,
     },
];

describe('product-item', () => {
     it('test if it works items products', () => {

          render(
               <Provider store={store}>
                    <ProductItem {...products[0]} />
               </Provider>
          )
          expect(screen.getByAltText('product')).toBeInTheDocument()
          expect(screen.getByText(products[0].name)).toBeInTheDocument()
          expect(screen.getByText(`$${products[0].price}`)).toBeInTheDocument()
     })
})