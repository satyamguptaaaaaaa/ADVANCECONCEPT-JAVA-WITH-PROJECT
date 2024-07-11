//// EcamaScript 2018::



///// Rest Propetes Work In Objects :
 const Student ={
    age :10,
    name:"Satyam",
    isStudent :true 
 };

 const {age ,...other}=Student;
 console.log(other);


 /// OutPut : { name: 'Satyam', isStudent: true }

 //// Funaction rest :



const Arrays=[12,23,44,55];
const [fist, second , ...next]=Arrays;

console.log(next);


/// Output ::  [ 44, 55 ] :


/// ? Object and spread operatores :
const obj1 = {a: 10, b:20, c:50};
const obj2={c:30, d:40};
const newObj= { ...obj2, ...obj1};
console.log(newObj);

/// OutPut :: { c: 50, d: 40, a: 10, b: 20 }::

