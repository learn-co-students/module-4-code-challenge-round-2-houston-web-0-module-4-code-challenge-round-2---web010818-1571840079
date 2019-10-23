import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions: []
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }



  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(transactions => this.setState({
      transactions: transactions,
    }))
  }

  handleChange(event) {
    
  }

  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    })
  }

  render() {
const searchTransactions = this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchTerm))
    return (
      <div>
        <Search />
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
