// part two of example.ts
//challenge with interface again
interface Person{
    name:string
}
interface DogOwner extends Person{
    dogName:string
}
interface ManagerP extends Person{
    managePeople():void
    delegateTask():void
}

function getEmployee():Person | DogOwner | ManagerP{
    let random = Math.random()
    console.log(random);
    let employee:Person|DogOwner|ManagerP
    // random = 0.33 
    if(random<0.33){
        // obj as Person
        // obj.name = "ian"
        const employee:Person={
            name:"Ian"
        }
        return employee
        //otra forma
        // return {
            //     name: 'john',
            //   };
    }else{
        if(random<0.66){
            const employee:DogOwner={
                name:"Alexis",
                dogName:"rex"
            }
            return employee
            // otra forma
                // return {
                //     name: 'sarah',
                //     dogName: 'Rex',
                //  };
        }else{
            const employee:ManagerP={
                name:"Tito",
                managePeople(){
                    console.log("this mf have 2 employee");
                },
                delegateTask() {
                    console.log("We delegeate this to ian")
                }
            }
            return employee
            //otra forma
            // return {
            //     name: 'bob',
            //     managePeople: () => console.log('Managing people...'),
            //     delegateTasks: () => console.log('Delegating tasks...'),
            //   };
        }
    }
}
const employee:Person|DogOwner|ManagerP=getEmployee()

console.log(
    
    employee
);

// Tuples and Enums

enum ServerResponse{
    Succes = 400,
    Error = 'Error'
}
console.log(ServerResponse);
interface getResponse{
    result: ServerResponse.Succes,
    number: number
}

const myRes:getResponse={
    result:400,
    number: 24,
}
console.log(myRes);
// Challenge Enunms

enum UserRole{
    Admin,
    Manager,
    Employee,
}
console.log(UserRole);
type User={
    id:number,
    name:String,
    role: UserRole
    contact: [email:string,phone:string]
}

function createUser(prop:User):User{

    return prop
    
}
const obj:User={
    id:21,
    name:"asd",
    role:UserRole.Admin,
    contact: ["alexs","122"]
}
console.log(createUser(obj));

let myArray:string [] = ["as","bc"]
console.log(myArray.fill('a'));