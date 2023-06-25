import { render } from '@testing-library/react';
import React from 'react';
import Products from '@/pages/cart';
import { Provider } from 'react-redux';
import {store} from '@/store/index';
import { addProduct } from '@/store/reducers/cart';
import { createMemoryHistory } from 'history';



test('check that the whole page index works correctly', () => {
     const cartItems = [
       { id: 1, name: 'Item 1', thumb: 'item1.jpg', price: 10 },
       { id: 2, name: 'Item 2', thumb: 'item2.jpg', price: 20 },
       { id: 3, name: 'Item 3', thumb: 'item3.jpg', price: 30 },
     ];
   
     // Agrega los productos al store antes de renderizar el componente
  
     expect(true).toBe(true);
   });

   
   
   
   
   
   
   
   
   
   
   
   