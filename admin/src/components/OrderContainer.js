import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
import Order from './Order'
import './Dashboard.css'
import {loadOrders, setSendDate, deleteOrder} from '../actions/orders'


class OrderContainer extends PureComponent {
  componentDidMount() {
    this.props.loadOrders()
  }

  handleChange = (e) => {
    console.log(e.target)
    e.preventDefault()
    this.props.setSendDate(e.target.value, e.target.id)
  }

  handleDeleteOrder = (event) => {
    let answer = window.confirm("Are you sure you want to delete this order?")
    if (answer) {
      return this.props.deleteOrder(Number(event))
    } 
    else {
      return ;
    }
  }

  render() {
    if (!this.props.orders) return <h2>Loading...</h2>
    const {authenticated, orders} = this.props
    console.log(this.props)

    // if (!authenticated) return (
		// 	<Redirect to="/login" />
    // ) 
    //Straks weer aanzetten om achter inlogmuur te krijgen!

    return (
     <div>
       <Order orders={orders} handleChange={this.handleChange} handleDeleteOrder={this.handleDeleteOrder}/> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  orders: state.orders
})

export default connect(mapStateToProps, {loadOrders, setSendDate, deleteOrder})(OrderContainer)