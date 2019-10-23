import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      results: [],
      value: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => response.json())
      .then(transactions => this.setState({
        transactions: transactions,
        results: transactions
      }))
  }

  handleChange = value => {
    // your code here
    this.setState({
      value: value 
    })
    this.setState({
      results: this.state.transactions.filter( transaction => transaction.description.includes(value) || transaction.category.includes(value))
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} value={this.state.value}/>
        <TransactionsList transactions={this.state.results}/>
      </div>
    )
  }
}

export default AccountContainer
