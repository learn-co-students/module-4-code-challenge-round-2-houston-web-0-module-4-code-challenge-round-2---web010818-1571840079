import React from 'react'
// import AccountContainer from "./AccountContainer"

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At

            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {/* 
        <td>{ props.transactions[0].posted_at }</td>
        <td> {props.transactions[0].description}</td>
        <td> {props.transactions[0].category}</td>
        <td> {props.transactions[0].amount}</td> */}
        {props.transactions.map(transaction => {
          return (
            <tr>
              <td>{transaction.posted_at}</td>
              <td >{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
         )
        })}










      </tbody>
    </table>
  )
}

export default TransactionsList
