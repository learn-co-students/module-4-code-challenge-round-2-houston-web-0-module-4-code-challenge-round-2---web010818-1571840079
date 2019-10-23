import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={Search}
        onChange={(e) => props.onSearchChange(event.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
