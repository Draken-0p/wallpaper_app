import React, { useState } from 'react'

const Search = props => {

  return (
    <div>
      <input type="text" onChange={ e => props.onChange(e.target.value) }  />
      <button onClick={()=>{
          console.log(char(srch))
          char(srch)}}>search</button>
    </div>
  )
}

export default Search