{
const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "guest";
// console.log({result1}, {result2});

type User =
{
    name: string;
    address: {
        permanant?: string;
        present: string;
    }
}

const user : User = {
    name: "samir",
    address:{
        present: "dhaka",
    }
}

const permanantAddress = user.address.permanant ?? "no parmanent address";
console.log(permanantAddress);

}