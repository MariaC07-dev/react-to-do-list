import React, { useState } from 'react'
import styled from "styled-components";

import ListItems from './listItems'
import AddItemForm from './addItemForm'


const AppContainer = styled.div`
  position: absolute;
  left: 50%;
  margin-top: 0px;
  margin-left: -480px;
  font-family: Verdana;
  width: 960px;
  font-size: 13px;
`;


const App = () =>  {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    item.id = items.length + 1
    console.log("item.id", items.length + 1 )
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
        <h2>Items added:</h2>
         <ListItems items={items} deleteItem={deleteItem} sortDates={sortDates}/>
      </div>
    </AppContainer>
  );
}

export default App;
