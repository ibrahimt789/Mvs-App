import React from 'react';


class HomeWidget extends React.Component {


	render() {
		return <div className="container">
			<h1>Welcome!</h1>
			<button onClick={() => this.props.onSignOut()}>Logout</button>
		</div>;
	}
}

export default HomeWidget;


