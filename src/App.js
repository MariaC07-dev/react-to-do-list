import React, { useState } from 'react'

import ListItems from './listItems'
import AddItemForm from './addItemForm'

import { AppContainer } from "./shared/styledComponents"



const App = () =>  {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    item.id = items.length + 1
    setItems([...items, item])

  }

  const deleteItem = (id) => {
  setItems(items.filter((item) => item.id !== id))
}

  const sortDates = items.sort(
    (x, y) => new Date(x.dateAdded) - new Date(y.dateAdded)
  );


  return (
    <AppContainer>
      <div>
      <h2>Add Item:</h2>
        <AddItemForm addItem={addItem} sortDates={sortDates}/>
      </div>
      <div>
        <h2>View list of items added:</h2>
         <ListItems items={items} deleteItem={deleteItem} sortDates={sortDates}/>
      </div>
    </AppContainer>
  );
}

export default App;
