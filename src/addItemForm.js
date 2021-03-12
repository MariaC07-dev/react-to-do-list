import React, { useState } from "react"


const  AddItemForm = (props) =>  {
  const initialFormState = {id: null, name: "", dateAdded: ""}
  const [item, setItem] = useState(initialFormState);

const handleInputChange = (event) => {
  const {name, value} = event.target
  setItem({...item, [name] : value})
}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if(!item.name || !item.dateAdded) return
        props.addItem(item)
        setItem(initialFormState)
      }}
    >
      <label>Add Item: </label>
        <input
        type="text"
        name={"name"}
        value={item.name}
        onChange={handleInputChange}
        />
        <br/>
        <br/>
        <label>Date added: </label>
        <input
        type="date"
        name={"dateAdded"}
        value={item.dateAdded}
        onChange={handleInputChange}
        />
        <br/>
        <br/>
        <button style={{marginLeft:"100px"}}>Add item</button>
     </form>
  )
}


export default AddItemForm
