{
//Generic constraints with keyof operator


type Vehicle = {
bike:string;
car:string;
ship:string

}

type Owner = "bike" | "car" | "ship"; //manually

type Owner2 = keyof Vehicle;

const getPropertyValue=<X,Y extends keyof X>(obj: X, key:Y)=>{
    return obj[key];

}

const user ={
    name: " Mr. touhid",
    age:26,
    address: 'rangpur'
};

const result1= getPropertyValue(user,'name')


const getValue = <X,Y extends keyof X >(obj: X , key: Y) =>{

return obj[key];


}

const user2={
    name:'saami',
    age:7,
    address:'Rangpur'
}


const result6 = getValue(user2,"name");























}