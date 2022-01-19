const constant = {
  chatServerUrl: 'https://deer-portfolio-chatserver.herokuapp.com/',
  serverURL: 'http://localhost:5000',
};
export default constant;

// ????_____________________AUTO REFRESS & Local Storage
// userRoute gives response as username & token to login slice
// on successful login, it will update the state of login slice
// and the login.tsx page will take the updated state and saves the token in local storage

// user route login slice login.tsx store
