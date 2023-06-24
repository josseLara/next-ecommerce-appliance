import { render } from '@testing-library/react';
import CheckoutItems from '@/components/checkout/items/index';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/index';
import { addProduct } from '@/store/reducers/cart';

test('renders checkout items', () => {
     const cartItems = [
          { id: 1, name: 'Item 1', thumb: 'item1.jpg', price: 10 },
          { id: 2, name: 'Item 2', thumb: 'item2.jpg', price: 20 },
          { id: 3, name: 'Item 3', thumb: 'item3.jpg', price: 30 },
     ]

       // Agrega los productos al store antes de renderizar el componente
       cartItems.forEach(item => {
          store.dispatch(addProduct({ product: item, count: 1 }));
     });

     const { getByText } = render(
          <Provider store={store}>
               <CheckoutItems/>
          </Provider>
     );

     cartItems.forEach(item => {
          expect(getByText(`$${item.price}`)).toBeInTheDocument();
          expect(getByText(`#${item.id}`)).toBeInTheDocument();
     });
    
     
});