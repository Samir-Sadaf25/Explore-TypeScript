{

    type GenericArray<T> = Array<T>;

    const numArray: GenericArray<number> = [1, 2, 3];

    const strArray: GenericArray<string> = ["samir", "sadaf"];

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: "sadaf",
            age: 22,
        },
        {
            name: "fahim",
            age: 33,
        }


    ]

    type genericTuple<t1,t2> = [t1,t2];

    const people : genericTuple<string,string> = ["mr. x","mr. y"];
    const userWithId : genericTuple<number,{name:string,age:number}> = [2432,{name: "samir",age: 22}];
    



}