{
  //polymorphism
  class Person {
    getSleep() {
      console.log(`I am doing Programming `);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I will attend coneptual session after sometime");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I will become a successful developer oneday!");
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  
  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)

  //
}
