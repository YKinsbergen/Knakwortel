import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Admins from './Admins'
import './Dashboard.css'
import {getAdmins, signup, deleteAdmin} from '../actions/admins'


class AdminContainer extends PureComponent {
  state = {
    addMode: false
  }

  onAdd = () => {
    this.setState({
      addMode: true,
    })
  }

  handleChange = event => {
    this.setState({ 
      ...this.state, 
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password

    this.props.signup(email, password)
    this.setState({
      addMode: false
    })
  }

  deleteAdminFn = (admin) => {
    if (this.props.admins.length > 1) {
      this.props.deleteAdmin(admin.id)
    }
  }

  componentWillMount() {
      this.props.getAdmins()
  }
  

  render() {
    if (!this.props.admins) return <h2>Loading...</h2>
    const {authenticated, admins} = this.props

    // if (!authenticated) return (
		// 	<Redirect to="/login" />
    // ) 
    //Straks weer aanzetten om achter inlogmuur te krijgen!

    return (
     <div>
       <Admins 
        admins={admins} 
        addMode={this.state.addMode}
        onAdd={this.onAdd}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        deleteAdminFn={this.deleteAdminFn}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  admins: state.admins
})

export default connect(mapStateToProps, {getAdmins, signup, deleteAdmin})(AdminContainer)
