import React, { useState } from "react"
import { Button, CointainerStyle, FixedWidthLabel, FixedWidthInput } from "./shared/styledComponents"



const  AddItemForm = (props) =>  {
  const initialFormState = {id: null, name: "", dateAdded: ""}
  const [item, setItem] = useState(initialFormState);

const handleInputChange = (event) => {
  const {name, value} = event.target
  setItem({...item, [name] : value})
}

  return (
    <CointainerStyle>
      <form
        onSubmit={event => {
          event.preventDefault()
          if(!item.name || !item.dateAdded) return
          props.addItem(item)
          setItem(initialFormState)
        }}
      >
        <FixedWidthLabel>Add Item: </FixedWidthLabel>
          <FixedWidthInput
          type="text"
          name={"name"}
          value={item.name}
          onChange={handleInputChange}
          />
          <FixedWidthLabel>Add Date: </FixedWidthLabel>
          <FixedWidthInput
          type="date"
          name={"dateAdded"}
          value={item.dateAdded}
          onChange={handleInputChange}
          />
          <Button>Add item</Button>
       </form>
     </CointainerStyle>
  )
}


export default AddItemForm
