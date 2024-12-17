// show the user the signout button if he is authenticated
// otherwise show him to login/signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show signout button");
// } else {
//     console.log("Show login/signup option");
// }

authenticated ? console.log("Signout button") : console.log("login button");