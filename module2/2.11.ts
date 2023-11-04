{

//utility types

//pick

type Person = {
    name: string;
    age: number;
    email?: string;
    contact: number;
}

type NameAge = Pick<Person,'contact'|'name'|'age' >

//Omit

type ContactInfo = Omit<Person,'name'|'age'>

//Required

type PersonRequired = Required<Person>

//Pertial


type PersonPertial = Partial<Person>


//ReadOnly
type PersonReadOnly = Readonly<Person>

const person1 : Person ={
    name:'saaki',
    age: 7,
    contact: 4358
}

//Record

type MyObj =Record<string,string>

const obj1:MyObj={
    a: 'aa',
    b:'bb',
    c:'cc',
    d:'dd'
}

















}