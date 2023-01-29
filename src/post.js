import React from 'react'
function post({data}) {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img className="card-img-top  h-75"  src={data.img} alt="Card image cap" />
    <div className="card-body">
      <p className="card-text">{data.prompt}</p>
    </div>
  </div>
  )
}

export default post