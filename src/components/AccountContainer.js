import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactions => this.setState({transactions: transactions}))
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    //console.log("blah", this.state.transactions)
    let transactions = this.state.transactions.filter(transaction=> transaction.description.toUpperCase().includes(this.state.search.toUpperCase()) || transaction.category.toUpperCase().includes(this.state.search.toUpperCase()))
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transactions} />
      </div>
    )
  }
}

export default AccountContainer
