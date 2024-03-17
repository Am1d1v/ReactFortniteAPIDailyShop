import React from 'react'

function GoodsItem(props) {

    const {id, name, description, price, full_background} = props;

  return (
    <>
     <div className="card">

        <div className="card-image">
          <img src={full_background} alt={name}/> 
          <span className="card-title">{name}</span>
        </div>

        <div className="card-content">
          <p>{description}</p>
          <p>{price}</p>
        </div>

        <div className="card-action">
          <button className='btn'>Купить</button>
        </div>

    </div>
    </>
  )
}

export default GoodsItem