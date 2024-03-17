import React from 'react'
import GoodsItem from './GoodsItem';

function GoodsList(props) {

  const {goods = [], addToCart} = props;

  // If we didnt get goods data
  if (!goods.length){
    return <h3>Data not found</h3>
  }

  return (
    <div className="goods">
      {goods.map((good) => <GoodsItem key={good.id} {...good}  addToCart={addToCart}/>)}
    </div>
  )
}

export default GoodsList