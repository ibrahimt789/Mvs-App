import axios from "axios";
export const AppActions = {
    Login: "AppActions.Login",
    Signout: "AppActions.Signout",
}
export function doLoginClicked(username: string, password: string) {
    //need to call login api
    return {
        type: AppActions.Login,
        userLoggedIn: true,
    }
}

export function doSignOut() {
    return {
        type: AppActions.Signout,
        userLoggedIn: false,
    }
}