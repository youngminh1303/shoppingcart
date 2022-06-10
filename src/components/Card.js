const Card = ({ title, src, price, setCounter, setItems, setTotal }) => {
    const checkItem = (prev, itemTitle) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].title === itemTitle) return i
      }
      return -1;
    }
  
    const addToCart = () => {
    //Check if the item already exists or not


    //increase counter
   
      
    //add to items
    setItems(prev => {
      let copiedItems = [...prev]
      let itemIndex = checkItem(copiedItems, title)
      if (itemIndex === -1) {
        setItems(copiedItems.concat({
          title,
          src,
          price,
          quantity: 1
        }))
         setCounter((prev) => {
      setCounter(prev + 1)
    })
        return
      }

      copiedItems.splice(itemIndex, 1, { ...prev[itemIndex], quantity: prev[itemIndex].quantity++ })
      setItems([...copiedItems])
    })    
  }

  
  return (
      <div className="card">
          <img src={src} alt=''/>
        <p className="title">{title}</p>
        <p className="price">${price}</p>
          <button onClick={addToCart} className='addToCart'>Add To Cart</button>
    </div>
  )
}

export default Card