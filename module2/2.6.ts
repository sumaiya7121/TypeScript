{
//constraints

const addcourseToStudent = <T extends{id:number;name:string;email:string}>(student: T) =>{
    const course='next level web development';

    return{
        ...student,
        course
    };
}

const student1= addcourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
id:22,
name:'saami',
email:'saami@gmail.com',
devType:'NLWD' 
})

const student2= addcourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
}>({
    id:44,
    name:'saaki',
    email:'saaki@gmail.com',
    hasWatch:'AppleWatch'
    })









}