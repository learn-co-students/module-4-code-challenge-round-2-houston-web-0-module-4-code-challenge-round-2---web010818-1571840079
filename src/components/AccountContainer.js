import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  state = {
    transactions: [],
    searchInput: null
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(response => {
      this.setState({
        transactions: response
      })
    })
  }

  

  handleChange(event) {
    this.setState({searchInput: event.target.value})
    this.search()

  }

  search() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(response => {
      this.setState({
        transactions: response.filter(transaction => transaction.description.includes(this.state.searchInput) || transaction.category.includes(this.state.searchInput))
      })
    })
  }

  render() {
    console.log('transactions:', this.state.transactions)
    console.log('searchInput:', this.state.searchInput)

    return (
      <div>
        <h2>AccountContainer</h2>
        <Search transactions={this.state.transactions} searchInput={this.state.searchInput} onChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} searchInput={this.state.searchInput} />
      </div>
    )
  }
}

export default AccountContainer
