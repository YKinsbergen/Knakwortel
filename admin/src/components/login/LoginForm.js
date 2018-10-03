import React, {PureComponent} from 'react'
import './Login.css'

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<div class="text-center">
				<form class="form-signin" onSubmit={this.handleSubmit}>
					<img class="knakwortel-logo" src="https://knakwortel.nl/images/knakwortel-logo.svg" alt="knakwortel" />
					<h1 class="h3 mb-3 font-weight-normal">Knakwortel admin login</h1>
					<label for="inputEmail" class="sr-only">Gebruikersnaam</label>
						<input type="email" name="email" id="inputEmail" class="form-control" placeholder="Gebruikersnaam" required autofocus value={
								this.state.email || ''
							} onChange={ this.handleChange }/>
					<label for="inputPassword" class="sr-only">Wachtwoord</label>
						<input type="password" id="inputPassword" class="form-control" placeholder="Wachtwoord" required name="password" value={
								this.state.password || ''
							} onChange={ this.handleChange }/>
					<button class="btn btn-lg btn-primary btn-block" type="submit">Inloggen</button>
					<p class="mt-5 mb-3 text-muted">&copy; 2018</p>
				</form>
			</div>
     )
	}
}
