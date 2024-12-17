var getUserRole = function (name, role) {
    switch(role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is user with access to consume content`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Shreya", "user"));