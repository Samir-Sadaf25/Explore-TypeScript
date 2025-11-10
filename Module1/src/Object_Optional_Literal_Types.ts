const User : {
   companyName: "Programming Hero"; // Literal types
   firstName: string;
   middleName?:string; // optional type
   lastName: string;
   isMarried:boolean;
  readonly UserId: string; // readonly

}
= {
    companyName: "Programming Hero",
    firstName: "samir",
    lastName: "sadaf",
    isMarried:true
}

//User.UserId = "sdfdf"; // cannot write because its readonly
