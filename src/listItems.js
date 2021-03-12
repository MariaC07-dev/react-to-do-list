import React from "react"


const ListItems = (props) => (
    <div>
    {props.sortDates.length > 0 ? (
      props.sortDates.map((item) => (
        <div key={item.id}>
          <p style={{marginBottom: "10px"}}>Item Name: {item.name}</p>
          <p>Date Added: {item.dateAdded}</p>
          <p>
            <button onClick={() => props.deleteItem(item.id)}>Delete</button>
          </p>
        </div>
      ))
    ) : (
      <div>
        <h4>No items added</h4>
      </div>
    )}
     </div>

)


export default ListItems
