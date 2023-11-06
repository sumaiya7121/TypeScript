{
//type guards

//typeof --> type guard

type Alphaneumeric = string | number

const add = (param1 : Alphaneumeric, param2 : Alphaneumeric) : Alphaneumeric =>
{

if(param1 === 'number' && param2 === 'number'){

   return param1+param2 
}

else{
    return param1.toString() +param2.toString();
}


}


const result = add("2", "2");
console.log(result)

//in guard

type NormalUser = {
    name: string
}

type AdminUser = {
    name:string;
    role: 'admin'
}

const getUser = (user:NormalUser | AdminUser) =>{
   if('role' in user){
console.log(`My name is ${user.name} and my role is ${user.role}`)
   }
   else{
    console.log(`my name is ${user.name}`)
   }
}
const normaluser : NormalUser = {
    name:'Saaki'
}

const adminuser : AdminUser ={
    name:'saami',
    role:'admin'
}

const getUser1 = getUser(normaluser);
console.log(getUser1)

const getUser2 = getUser(adminuser);
console.log(getUser2)







}