import React from 'react';
import { render,screen } from '@testing-library/react';
import RegisterPage from '@/pages/register';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { RouterContext } from 'next/dist/shared/lib/router-context';

test('test that everything works correctly on the register page',()=>{

     const cartItems = [
          { id: 1, name: 'Item 1', thumb: 'item1.jpg', price: 10 },
          { id: 2, name: 'Item 2', thumb: 'item2.jpg', price: 20 },
          { id: 3, name: 'Item 3', thumb: 'item3.jpg', price: 30 },
        ];
      
        const router = {
          push: jest.fn(), // crea un mock de la función push
          replace: jest.fn(), // crea un mock de la función replace
          prefetch: jest.fn(), // crea un mock de la función prefetch
          pathname: "/register", // establece la ruta actual
          query: {}, // establece los parámetros de la ruta
          asPath: "/register", // establece la ruta actual
          events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
          },
        };
      
        render(
          <RouterContext.Provider value={router}>
            <Provider store={store}>
              <RegisterPage />
            </Provider>
          </RouterContext.Provider>
        );
      
        expect(screen.getByText('Back to store')).toBeInTheDocument;
        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument;
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument;
        expect(screen.getByText('Are you already a member?')).toBeInTheDocument;
        expect(screen.getAllByAltText('login img')).toHaveLength(1);
      
})