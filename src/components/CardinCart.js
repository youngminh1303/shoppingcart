const CardinCart = ({item}) => {
  return (
      <div className="cardInCart">
      <img alt="" src={item.src} />
      <div className="info">
          <p className="title">{item.title}</p>
        <input type="text" value={item.quantity}/>
        <p>${item.price}</p>
        </div>
    </div>
  )
}

export default CardinCart