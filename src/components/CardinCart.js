const CardinCart = (item) => {
  return (
      <div className="cardInCart">
          <img alt="" src={item.src} />
          <p className="title">{item.title}</p>
        <input type="text" value={item.quantity}/>
          <p>${item.price}</p>
    </div>
  )
}

export default CardinCart