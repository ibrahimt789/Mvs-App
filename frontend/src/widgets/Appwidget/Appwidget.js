import React from 'react';
import { connect } from "react-redux";
import LoginWidget from "../login/Login";
import { doLoginClicked, doSignOut } from "./action";
import HomeWidget from "../home/Home";

class App extends React.Component {

	// App "actions" (functions that modify state)
	signIn = (credentials) => {
		// This is where you would call Firebase, an API etc...
		this.props.onLoginClicked(credentials);
	}

	signOut = () => {
		this.props.onSignOut();
		// clear out user from state
		this.props.onSignOut();
	}

	render() {
		// Here we pass relevant state to our child components
		// as props. Note that functions are passed using `bind` to
		// make sure we keep our scope to App
		return (
			<div>
				{
					(this.props.userLoggedIn) ?
						<HomeWidget
							onSignOut={this.signOut}
						/>
						:
						<LoginWidget
							onSignIn={this.signIn}
						/>
				}
			</div>
		)

	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		onLoginClicked: (username, password) => dispatch(doLoginClicked(username, password)),
		onSignOut: () => dispatch(doSignOut())
	};
};

const mapStateToProps = (state) => {
	return {
		userLoggedIn: state.userLoggedIn,

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

