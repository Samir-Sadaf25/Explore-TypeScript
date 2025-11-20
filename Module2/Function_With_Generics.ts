{
    // function with generics

    const CreateArray = (param: string): string[] => {
        return [param];
    }

    const createArrayGenerics = <T>(param: T): T[] => {
        return [param];
    }

    const resGeneric = createArrayGenerics<string>("bangladesh");
    const resGenericBool = createArrayGenerics<boolean>(true);

    type User = { id: number; name: string };
    const resGenericObj = createArrayGenerics<User>({
        id: 2424,
        name: "samir sadaf",
    })



   
    const createArrayTuple = <T,T2>(param1: T,param2: T2): [T,T2] => {
        return [param1,param2];
    }

    const resTuple1 = createArrayTuple<string,number>("bangladesh",25425);
    const resTuple2 = createArrayTuple<string,User>("bd",{
        id: 2535,
        name: "sadaf"
    })
    

const addCourseToStudent = <T>(student: T) =>{
  const Course = "Learn with Sumit";
  return {
    ...student,Course
  }
};

const student1 = addCourseToStudent({
    name: "samir",
    email: "sfas@gmail.com",
    devType: "Frontend developer"
});

const student2 = addCourseToStudent({
    name:"sdaf",
    devicetype: "laptop",
    courseFee: 2999,
    isMarried: true,
})



}