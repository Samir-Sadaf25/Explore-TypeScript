{

    const addCourseToStudent = <t extends { id: number; name: string; email: string }>(student: t) => {
        const course = "Dev Skill";
        return {
            ...student, course
        }
    }
    const student1 = addCourseToStudent({
        id:24231,
        name: "samir",
        email: "sfas@gmail.com",
        devType: "Frontend developer"
    });

    const student2 = addCourseToStudent({
        id:2452,
        name: "sdaf",
        email: "@gmail.com",
        devicetype: "laptop",
        courseFee: 2999,
        isMarried: true,
    })
}