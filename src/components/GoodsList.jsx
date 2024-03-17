import React from 'react'
import GoodsItem from './GoodsItem';

function GoodsList(props) {

  const {goods = []} = props;

  // If we didnt get goods data
  if (!goods.length){
    return <h3>Data not found</h3>
  }

  return (
    <div className="goods">
      {goods.map((good) => <GoodsItem {...good}/>)}
    </div>
  )
}

export default GoodsList