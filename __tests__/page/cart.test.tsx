import React from 'react';
import { render,screen } from '@testing-library/react';
import Products from '@/pages/cart';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { RouterContext } from 'next/dist/shared/lib/router-context';

test('check that the whole page index works correctly', () => {
  const cartItems = [
    { id: 1, name: 'Item 1', thumb: 'item1.jpg', price: 10 },
    { id: 2, name: 'Item 2', thumb: 'item2.jpg', price: 20 },
    { id: 3, name: 'Item 3', thumb: 'item3.jpg', price: 30 },
  ];

  const router = {
    push: jest.fn(), // crea un mock de la función push
    replace: jest.fn(), // crea un mock de la función replace
    prefetch: jest.fn(), // crea un mock de la función prefetch
    pathname: "/products", // establece la ruta actual
    query: {}, // establece los parámetros de la ruta
    asPath: "/products", // establece la ruta actual
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  };

  render(
    <RouterContext.Provider value={router}>
      <Provider store={store}>
        <Products />
      </Provider>
    </RouterContext.Provider>
  );

  expect(screen.getByText('Checkout')).toBeInTheDocument;
  expect(screen.getByText('Continue Shopping')).toBeInTheDocument;
  expect(screen.getByText('Nothing in the cart')).toBeInTheDocument;

});












