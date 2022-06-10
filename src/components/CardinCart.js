const CardinCart = ({ setItems, item }) => {
  
  const checkItem = (prev, itemTitle) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].title === itemTitle) return i
      }
      return -1;
    }
  

  const onChange = (e) => {
    setItems(prev => {
      let index = checkItem(prev, item.title)
      let cloneArr = [...prev]
      cloneArr.splice(index, 1 , { ...prev[index], quantity: Number(e.target.value) })
      setItems(cloneArr)
    })
  }

  return (
      <div className="cardInCart">
      <img alt="" src={item.src} />
      <div className="info">
        <p className="title">{item.title}</p>
        <div className="quantitydiv">
          <input type="number" min={0} value={item.quantity} onChange={onChange}/>
        </div>
       
        <p>${item.price}</p>
        </div>
    </div>
  )
}

export default CardinCart