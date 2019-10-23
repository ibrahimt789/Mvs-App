import React from 'react';
import "./styles/style.css";
import "./styles/Bootstrap.css";
// import "./LoinFormHandler";
// import { connect } from "react-redux";


class LoginWidget extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			forgotPassword: false,
			signup: false,
		}
	}
	handleForgotPassword(e) {
		e.preventDefault();

	}

	handleLogin() {

	}
	handleForgotPassword = () => {

	}
	setEmail = (e) => {
		const { value } = e.target;
		this.setState({ email: value });
	}
	setPassword = (e) => {
		const { value } = e.target;
		this.setState({ password: value });
	}
	onLogin = () => {
		if (this.state.email && this.state.password) {
			const loginBody = { username: this.state.email, password: this.state.password };
			//To-do: need to handle error case scenario
			this.props.onSignIn(loginBody);
		}
	}

	render() {
		return <div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Sign In</h5>
							<div className="form-label-group">
								<input type="email" id="inputEmail" className="form-control" onChange={e => this.setEmail(e)} placeholder="Email address" required autofocus />
								<label for="inputEmail">Email address</label>
							</div>

							<div className="form-label-group">
								<input type="password" id="inputPassword" className="form-control" onChange={e => this.setPassword(e)} placeholder="Password" required />
								<label for="inputPassword">Password</label>
							</div>

							<div className="custom-control custom-checkbox mb-3">
								<input type="checkbox" className="custom-control-input" id="customCheck1" />
								<label className="custom-control-label" for="customCheck1">Remember password</label>
							</div>
							<button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.onLogin} type="submit">Sign in</button>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onLoginClicked=({ username, password }) => dispatch(doLoginClicked(username, password))
// 	};
// };

// export default connect(undefined, mapDispatchToProps)(LoginWidget);
export default LoginWidget;


