import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddRemoveButton from '../AddRemoveButton/AddRemoveButton';
import { addItemToCart, removeItemFromCart } from '../../redux/slices/cartSlice';

const ShoppingCart = ({title}) => {
    const items = useSelector(state => state.cart.items);
    const dispatch=useDispatch()
  return (
    <div>
        <ul className="border border-slate-600 rounded-lg p-2 min-w-[150px]">
          {items.filter((elem,index)=>(elem.title===title)).map(item => (
              <AddRemoveButton remove={() => dispatch(removeItemFromCart(item.id))} add={() => dispatch(addItemToCart(item))} quantity={item.quantity}/>
            
          ))}
        </ul>

    </div>
  )
}

export default ShoppingCart