// let requestStatus: 'pending' | 'failure' | 'error' = 'pending';
const books = [1,2,3];
let finded: string | number | null = null;
for (const iterator of books) {
    if (iterator === 12) {
        finded = iterator;
        // console.log(iterator);
    }
}
// finded = [];
// finded = 1212421;
console.log(finded);
// console.log(finded?.length);
let book = {title: 'TypeScript', author: 123, id: 12};
console.log(book);
let bike:{brand:string,year:number|string} = {brand: 'Yamaha', year: 2021};
bike.year = "202121";
console.log(bike);
// Optional parameter
let latop:{brand:string,year?:number} = {brand: 'Dell'};
let latop2 = latop;
latop2.brand = 'HP';
latop2.year = 2021;
console.log(latop2);
// Optional parameter with array
let items:{brand:string,year?:number}[] = [{brand: 'Dell'}, {brand: 'HP', year: 2021}];
console.log(items);
//Functions

let arrayName:string[] = ["Ian","Alexis"]
function checkName(name:string):boolean{
    //return arrayName.includes(name);
    return arrayName.find(item => item == name) ? true : false;
}
console.log(checkName("Alexis"));
function processInput(input: string | number): string|number|undefined{
    console.log(typeof input);
    if(typeof(input) === 'number'){
        return input+=2
    }
    if(typeof(input) === 'string'){
        return input.toUpperCase()
    }
}
console.log(processInput(2));
//Object and Functions
function createEmployed({id}:{id:number}){
    console.log(id);
}

createEmployed({id:2})

function createStudent(student:{name:string,phone:number}){
    console.log(student);
}

const student = {
    name:"ian",
    phone: 23123,
    email: "asts",
    as:124
}
createStudent(student)
// createStudent({name:"ian",phone:21242})

function processData(input: string|number, config:{reverse:boolean}= {reverse:false}){
    //config = config || {reverse:false} //default value sin parametro en la funcion que inicializa el objeto
    // let config2 = {reverse:true}
    // console.log(config2.reverse);
    // let {reverse} = config;
    // console.log(reverse);
    // console.log(config?.reverse);
    if(typeof input == 'number'){
        return input**input
    }
    if(typeof input == 'string'){
        if(config?.reverse){
            return input.split("").reverse().join("")
        }
        return input.toUpperCase()
    }
}

console.log( processData("asdwq",{reverse:true}))
//type alias
//opcion 1
// type Employed = {id:number,name:string,deparment?:string} 
// type Manager = {id:number,name:string,employee:Employed[]}
// type Staff = Employed | Manager

// function printStaffDetails(par:Staff={id:2,name:"gues"}){
//     let {employee} = par as Manager // as Manager para que sepa que es un manager y no un employed 
//     console.log(employee && employee.length>0 ? true:false);
//     if(employee && employee.length>0){ // si existe employee y tiene mas de 0 elementos
//         console.log("this person is a manager and had "+employee.length+" of employeds")
//     }
//     else{
//         let {deparment} = par as Employed // as Employed para que sepa que es un employed y no un manager
//         console.log("this persin is a employed and his deparment is: "+deparment);
//     }
    
// }
type Employed = {id:number,name:string,deparment:string}
type Manager = {id:number,name:string,employee:Employed[]}
type Staff = Employed | Manager
function printStaffDetails(par:Staff){ // sin valor por defecto
    if('employee' in par){
        console.log("this person is a manager and had "+par.employee.length+" of employeds")
    }
    else{
        console.log("this persin is a employed and his deparment is: "+par.deparment);
    }
}
// let newStaff:Staff;
// newStaff = {id:21,name:"ian aleus",deparment:"2asd"}
let newStaff:Staff = {
    id: 21,
    name: "ian aleus",
    //deparment:"asdwa"
     employee:[{id:22,name:"tito",deparment:"242"}]
};
printStaffDetails(newStaff)

const propName = 'asd';

type Animal = {
    [propName]: number,
    sayhello (e:string): string;
    //sayHello: (e:string)=>string  otra forma
};

let tiger: Animal = { [propName]: 5 , sayhello: (e)=>{
    return "asd "+e;
}};
console.log(tiger.sayhello("ef"));
//challenge with interface

interface Computer{
    readonly id:number
    brand:string
    ram: number
    storage?:string
    upGradeRam(number:number):number
}

const hpLaptop:Computer={
    id:21,
    brand:"2alsda",
    ram:2,
    upGradeRam(base) {
       return this.ram+=base
    },
}
hpLaptop.storage = "asd"
console.log(hpLaptop.upGradeRam(5) + " "+ hpLaptop.ram + " "+ (hpLaptop.storage && hpLaptop.ram && "."));

