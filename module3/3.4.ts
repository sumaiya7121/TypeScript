{
    //instance guard

    class Animal {
        name:string;
        species: string;
        constructor(name:string, species: string){
            this.name = name;
            this.species =species;
        }
        makeSound(){
            console.log('I am making sound');
        }
    }
 class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log('I am barking')
    }
 }

 class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeMeow(){
        console.log('I am Mewing')
    }
 }

 const getAnimal=(animal : Animal) =>{
    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if(animal instanceof Cat){
        animal.makeMeow()
    }
    else{
        animal.makeSound()
    }
 }

 const dog = new Dog('Dog', "Dog");
 const cat = new Cat('cat','cat')
   
    
















    //
}