import { AppActions } from "./action";
const initialState = {
};
function reducer(state = initialState, action) {
	switch (action.type) {
		case AppActions.Login:
			return {
				...state,
				userLoggedIn: action.userLoggedIn,
			}
		case AppActions.Signout:
			return {
				...state,
				userLoggedIn: action.userLoggedIn
			}
		default:
			return {
				...state
			}
	}
}
export default reducer;
