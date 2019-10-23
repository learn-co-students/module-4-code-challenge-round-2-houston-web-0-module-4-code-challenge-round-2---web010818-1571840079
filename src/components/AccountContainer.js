import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import Transaction from './Transaction'


class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      search: '',
      transactions: []
    }
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => response.json())
      .then(transaction => this.setState({ transactions: transaction }))
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    event.preventDefault()
    this.setState({ search: event.target.value })
    
  }

  render() {
    let transactionArray = []
    transactionArray = this.state.transactions.filter(transaction => {
      return (transaction.description.startsWith(this.state.search)) 
    })
    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search} transactions={this.state.transactions}/>
        <TransactionsList transactions={transactionArray} />
      </div>
    )
  }
}

export default AccountContainer
