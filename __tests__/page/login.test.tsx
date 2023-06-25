import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context"; // importa RouterContext
import LoginPage from "@/pages/login";
import { Provider } from "react-redux"; 
import {store} from '@/store/index';

test('see everything works correctly on the login page', () => {
     const router = {
          push: jest.fn(), // crea un mock de la función push
          replace: jest.fn(), // crea un mock de la función replace
          prefetch: jest.fn(), // crea un mock de la función prefetch
          pathname: "/login", // establece la ruta actual
          query: {}, // establece los parámetros de la ruta
          asPath: "/login", // establece la ruta actual
          events: {
               on: jest.fn(),
               off: jest.fn(),
               emit: jest.fn(),
          },
     };
     render(
          <RouterContext.Provider value={router}> {/* envuelve el componente LoginPage en RouterContext */}
               <Provider store={store}>
                    <LoginPage />
               </Provider>
          </RouterContext.Provider>
     )
     expect(screen.getByText('Back to store')).toBeInTheDocument();
     expect(screen.getByText('Log in')).toBeInTheDocument();
     expect(screen.getAllByPlaceholderText('email')).toHaveLength(1);
     expect(screen.getAllByPlaceholderText('Password')).toHaveLength(1);
     expect(screen.getAllByAltText('login img')).toHaveLength(1);
})