import React from 'react'

function GoodsItem(props) {

    const {id, name, description, price, full_background} = props;

  return (
    <>
     <div class="card">

        <div class="card-image">
          <img src={full_background} />
          <span class="card-title">{name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>

        <div class="card-content">
          <p>{description}</p>
          <p>{price}</p>
        </div>

    </div>
    </>
  )
}

export default GoodsItem