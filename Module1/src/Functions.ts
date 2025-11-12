function add(a : number,b : number) : number
{
  return a+b;
}

const sum = (a : number,b : number) : number => a + b;

const User = {
    name:"samir",
    balance: 0,
    addBalance(balance : number)
    {
        return `my balance is : ${this.balance + balance}`;
    }
}
const arr : number[] = [1,2,10];
const newArray : number[] = arr.map((a : number) => a * a );