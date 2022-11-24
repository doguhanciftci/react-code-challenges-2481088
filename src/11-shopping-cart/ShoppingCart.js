import { useEffect, useState } from 'react';

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {

  const [cart, setCart] = useState([{ name: 'apple', quantity: 3, price: 0.39 }])

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((sum, c) => sum + (c.price * c.quantity), 0));
  }, [cart]);

  const alterCart = (item, offset) => {
    const existingItem = cart.find(c => c.name === item.name);

    if (!existingItem) {
      offset > 0 && setCart([...cart, { ...item, quantity: offset }]);
      return;
    }

    const newQuantity = existingItem.quantity + offset;
    if (newQuantity === 0)
      setCart(cart.filter(c => c.name !== item.name));
    else
      setCart(cart.map(c => c.name === item.name ? { ...c, quantity: newQuantity } : c))
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => alterCart(item, 1)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => alterCart(item, -1)}>-</button>
                {item.quantity}
                <button onClick={() => alterCart(item, 1)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
