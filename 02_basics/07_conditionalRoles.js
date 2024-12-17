var user = "testprep";

switch(user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete content");
        break;
    case "testprep":
        console.log("get access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
    default:
        console.log("trial user spotted");
        break;
}