import React from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const TopBar = (props) => {
  const { user } = props
  console.log(props)
  return (
    <nav class="navbar" position="absolute" style={{zIndex:10}}>
         
        {!user &&
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link">Login</Link>
          </li>
          <li class="nav-item">
            <Link to="/signup" class="nav-link">Signup</Link>
          </li>
        </ul>
        }

        {user &&
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Hi there, { user.user.firstName }</a>
          </li>
          <li class="nav-item">
            <Link to="/logout" class="nav-link">Logout</Link>
          </li>
        </ul>
        
          }



      
    
 
</nav>  
  )
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
