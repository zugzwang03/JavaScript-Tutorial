// Allow the user to access the code if he is:
// 1) logged in from email
// 2) logged in from Google
// 3) logged in from Facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Success");
}