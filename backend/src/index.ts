type abc = {
    name: string,
    age: number
}

function sth({name, age} : abc) : any{
    console.log(`The age of ${name} is ${age}`)
}

sth({name: "ananya", age: 55});