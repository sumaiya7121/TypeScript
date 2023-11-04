//Generic Function

{
    
    
const functionWithGeneric =<T>(params : T) : [T] =>{

return [params];
}  

const result1 = functionWithGeneric<string>('hello');

type Student ={name:string, id:number}

const result2 = functionWithGeneric<Student>({name: 'saaki', id:3})







}