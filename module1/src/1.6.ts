//learning function
//normal function
//arrow function

function add(num1:number,num2:number):number{

    return num1+num2;
}

add(2,2)

//object--> function-->method

const poorUser = {

    name: 'sumaiya',
    balance: 0,
    addBalance(balance:number):number{
        return this.balance+ balance
    }
}


const arr:number[] =[2,4,5]

const newArray:number[] = arr.map((elem :number) => elem*elem)