{

type student = {
    name : string,
    age : number,
    address: string,
    marks : number
}    

const student1 : student = {
    name : "samir",
    age : 22,
    address : "B-Baria",
    marks : 92
};
const student2 : student = {
    name : "samir",
    age : 22,
    address : "B-Baria",
    marks : 92
};

// Type alias in Function

type Add = (num1:number,num2: number) => number;
const add : Add = (num1,num2) => num1+num2;

}