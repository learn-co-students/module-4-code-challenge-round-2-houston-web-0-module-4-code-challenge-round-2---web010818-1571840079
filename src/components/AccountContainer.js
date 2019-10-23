import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import Transaction from './Transaction'
//import { transactions } from '../transactionsData'

class AccountContainer extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     query: '',
  //     data: [],
  //   }
  // }

  state = {
    query: '',
    data: [],
  }

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  handleChange = (whateverTheUserTypedIn) => {
    this.setState({
      query: whateverTheUserTypedIn
    })
  }

  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        this.setState({
          data: responseData
        })
      })
  }

  render() {
    let results = this.state.data.filter(transaction => transaction.description.startsWith(this.state.query))


    return (
      <div>
        <Search searchBar={this.handleChange} />
        <TransactionsList transactions={results} />
      </div>
    )
  }
}



export default AccountContainer
