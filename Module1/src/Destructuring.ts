const user = {
    address : "Bangladesh",
    name : {
        firstName: "sadaf",
        middleName: "Hossain",
        lastName: "samir",
    },
    contactNo: "0199929292",
}

const {address : location,name:{firstName}} = user;

// array Destructuring

const myFriends = ["joy","sadaf","fahim","ikram","khan"];
const [bestfriend,,bro,...rest] = myFriends;

