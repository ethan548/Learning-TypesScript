enum Status{
    Peding='pending',
    Declined='declined'
}

type Bird={
    name:string
    status:Status
}

const statusValues='pending'

const animal:Bird={
    name:'bigotes',
    status:statusValues as Status
}

console.log(animal);

let unknown:any;
unknown=2
unknown="string"

console.log(

    unknown.toUpperCase()
);
// Challenge check Truthy Falsy guard

function printLength(str:string|null|undefined){
    if(str){
        console.log(str.length);
    }
    else{
        console.log("No string provided");
    }
}

printLength(undefined)

type Student = {
    name: string;
    study: () => void;
  };
  
  type User = {
    name: string;
    login: () => void;
  };
  
  type Person = Student | User;


  // Usage
  const randomPerson = (): Person => {
    return Math.random() > 0.5
      ? { name: 'john', study: () => console.log('Studying') }
      : { name: 'mary', login: () => console.log('Logging in') };
  };
  

  const person = randomPerson();
  
  function isStudent(person: Person):person is User {
    // return 'study' in person;
    return (person as User).login !== undefined;
  }
  console.log(isStudent(person));

  if (isStudent(person)) {
    person.login(); // This is safe because TypeScript knows that 'person' is a Student.
  } else {
    person.study();
  }