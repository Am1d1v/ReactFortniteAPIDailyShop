import {API_KEY, API_URL} from '../config'
import { useState, useEffect } from 'react';
import Preloader from './Preloader'
import GoodsList from './GoodsList';
import Cart from './Cart';


function Shop() {


  // Initial Goods Array
  const [goods, setGoods] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Order List. List of ordered goods.
  const [order, setOrder] = useState([]);

  // Add to Cart
  const addToCart = (item) => {

    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    // Add the item to the cart for the first time
    if(itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return item;
        }
      })

      setOrder(newOrder)

    }

  }

  // Fetch goods data
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      data.featured && setGoods(data.featured)
      setLoading(false)
    })
  }, []);

  

  return (
    <main className="container content">
      <Cart quantity={order.length}/>
      { loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>}
    </main>
  )
}

export default Shop