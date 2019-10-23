import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

 
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  state = {
      transactions: transactions, //should be getting from the transactionsData.js
      filter: ''
    }

  

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response=>response.json())
    .then(transactions=> this.setState({
      transactions: transactions //should now be fetching from the other data
    }))
  }

  handleChange = (e)=> {
    this.setState({
      filter: e.target.value
    })
  }

  

  // ()=> this.state.handleChange(event)
  render() {

    return (
      <div>
        <Search type={(e)=> this.handleChange(e)}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
