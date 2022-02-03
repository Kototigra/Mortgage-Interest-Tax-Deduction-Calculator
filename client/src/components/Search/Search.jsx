import React from "react";

const users = [
  {id: '1', name: 'Александр'},
  {id: '2', name: 'Иван'},
  {id: '3', name: 'Дмитрий'},
]

function Search() {
  return (
  <div>
    <input type='text'/>
    <button type='button'>Search</button>
  </div>
  )
}

export default Search
