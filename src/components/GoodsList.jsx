import React from 'react'
import GoodsItem from './GoodsItem';

function GoodsList(props) {

    const {goods = []} = props;

  return (
    goods.map((good) => <GoodsItem {...good}/>)
  )
}

export default GoodsList