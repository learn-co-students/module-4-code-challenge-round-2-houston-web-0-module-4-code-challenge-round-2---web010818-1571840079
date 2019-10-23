import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <h3>Search</h3>
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.onChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
