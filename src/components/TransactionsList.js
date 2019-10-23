import React from 'react'
import Transaction from './Transaction'
import '../stylesheets/App.css';

const TransactionsList = (props) => {

  return (
    <table >
      <tbody>
      <tr>
          <th>
            
              Posted At
            
          </th>
          <th>
            
              Description
            
          </th>
          <th>
            
              Category
            
          </th>
          <th>
            
              Amount
            
          </th>
        </tr>

        {props.transactions.map(transaction => 
          <Transaction transaction={transaction}/>
        )}

      </tbody>
    </table>
  )
}

export default TransactionsList
