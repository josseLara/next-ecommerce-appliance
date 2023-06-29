import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context"; // importa RouterContext
import Products from "@/pages/products";
import { Provider } from "react-redux"; 
import {store} from '@/store/index';

test('see everything works correctly on the login page', () => {
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
          <RouterContext.Provider value={router}> {/* envuelve el componente LoginPage en RouterContext */}
               <Provider store={store}>
                    <Products />
               </Provider>
          </RouterContext.Provider>
     )
     expect(screen.getByText('Add Filter')).toBeInTheDocument();
     expect(screen.getByText('Product type')).toBeInTheDocument();
     expect(screen.getByText('All Products')).toBeInTheDocument();
   
})