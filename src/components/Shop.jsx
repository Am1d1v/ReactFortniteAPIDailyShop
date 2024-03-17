import {API_KEY, API_URL} from '../config'
import { useState, useEffect } from 'react';


function Shop() {

  // Initial Goods Array
  const [goods, setGoods] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

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
    <main className="container content">{goods.map((good) => <h1>{good.name}</h1>)}</main>
  )
}

export default Shop