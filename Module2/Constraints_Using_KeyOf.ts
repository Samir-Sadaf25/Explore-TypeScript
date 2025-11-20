{

type vehicle = {
    bike: string;
    car: string;
    ship: string;
};

type owner = "bike" | "car" | "ship";

type owner2 = keyof vehicle;


const getPropertyValue = <x,y extends keyof x>(obj:x,key:y) =>{
    return obj[key]
}

const user1 = {
    name: "samir",
    age: 22,
    address: "mirpur"
};

const user2 = {
    name: "sadaf",
    isMarried: false,
    hasBike:false,
    email:"janina@gmail.com"
}

const result1 = getPropertyValue(user1,"name");
const result2 = getPropertyValue(user2,"isMarried");

}