{

    type Generic<T> = Array<T>

//generic tuple

type GenericTuple <X,Y> = [X, Y];

const topic : GenericTuple<string,string> = ['programming','hero'];
const topic2 : GenericTuple<number,{name:string, email:string}> =[12,{name:'saaki', email: 'saaki@gmail.com'}]


type Generic3<T> = Array<T>

const newArray : Generic3<number> = [2,5,5];

type Generic4<X,Y> = [X,Y];

const new2: Generic4 <string,string> = ['saaki','saami']
















}