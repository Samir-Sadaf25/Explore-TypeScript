type newDeveloper = "Frontend" | "Backend";

//const frontendDeveloper : newDeveloper = "Frontend";

type user = {
    name: string;
    email: string;
    gender: "male" | "female";

}

const user1 : user = {
    name: "samir",
    gender: "male",
    email : "samir@gmail.com",
    
}

type frontendDeveloper = {
    skills: string[];
    designation1: 'frontend developer';
}
type backendDeveloper = {
    skills: string[];
    designation2: 'backend developer';
}

type fullstackDeveloper  = frontendDeveloper & backendDeveloper;
const fullstack : fullstackDeveloper = {
 skills: ['html','css','javascript'],
 designation1: 'frontend developer',
 designation2: 'backend developer'
}