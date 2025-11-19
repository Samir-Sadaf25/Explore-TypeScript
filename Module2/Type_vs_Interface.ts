{

type User = {
    name: string;
    age: number;
}
type User2 = {
    name: string;
    age: number;
}

interface Iuser{
    name: string;
    age: number;
}

type userWithRole = User2 & {role: string};
interface userWithRole2 extends User2{
    role: string
};

const user1 : userWithRole2 = {
    name: "samir",
    age:23,
    role: "manager"
}
// const user1 : userWithRole = {
//     name: "samir",
//     age:23,
//     role: "manager"
// }

// const user1 : Iuser = {
//     name: "samir",
//     age:23
// }


interface roll2 {
    [index: number] : number
}

const rollNumber1 : roll2 = [1,2,3];






}