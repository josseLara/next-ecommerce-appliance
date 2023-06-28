import React from 'react';
import { render,screen } from '@testing-library/react';
import ErrorPage from '@/pages/404';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { RouterContext } from 'next/dist/shared/lib/router-context';

test('test that everything works correctly on the register page',()=>{

      
        const router = {
          push: jest.fn(), // crea un mock de la función push
          replace: jest.fn(), // crea un mock de la función replace
          prefetch: jest.fn(), // crea un mock de la función prefetch
          pathname: "/404", // establece la ruta actual
          query: {}, // establece los parámetros de la ruta
          asPath: "/404", // establece la ruta actual
          events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
          },
        };
      
        render(
          <RouterContext.Provider value={router}>
            <Provider store={store}>
              <ErrorPage />
            </Provider>
          </RouterContext.Provider>
        );
      
        expect(screen.getByText('Error 404')).toBeInTheDocument;
        expect(screen.getByText("Woops. Looks like this page doesn't exist")).toBeInTheDocument();
      
})