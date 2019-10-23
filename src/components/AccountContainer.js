import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      transactions: transactions,
      search: ''
    }
    

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(r=>r.json())
    .then(transactions=>this.setState({ transactions: transactions}))
  }

  handleChange = (value) => {
    // your code here
    this.setState({search: value })


  }

  render() {
    console.log(transactions)
    //filter goes here!{this.state.search}gives back what i typed in my search bar.

    return (
      <div>
        <Search  handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
