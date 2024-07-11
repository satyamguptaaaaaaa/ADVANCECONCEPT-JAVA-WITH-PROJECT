//// New Object Properties :

const Name ="satyam";
const Age=30;



const Persone ={
    Name,
    Age
}


console.log(Persone);


//// Destructuring Ararys :

//// New Way To :


// const Number=[10,20,30];
// const[fist , second , third ]=Number;

// console.log(fist);

// console.log(second);


// const Number=[10,20,30];
// const[fist , second , third ]=Number;

// console.log(fist);

// console.log(second);


//// To Number Swipe Methode :
let a=20;
let b=30;

// let c=a;
// a=b;
// b=c;

/// New Methode :
/// Owesome Bro:
// [a,b]=[b,a];


// console.log(a +" ANd "+b);


/////  Destructuring Objects :

const user= {
    name : "Vinod ",
    age :20
};
//// Why is Provide The error I Don'T Anything About That :
// const {Myname, age}=user;
// console.log(Myname,age);
console.log("hello");



 const {name:fullname, age}=user;

 console.log(fullname,age);


 //// Copying an array:

 let fruits =["Apple ", "Orange ","Mango"];

 let newFruits = [...fruits];
 console.log(newFruits);

 //// conscatenatin arrays /// Combination :

//  let Num1=[1,2,3,4];
//  let Num2=[4,5,6,7];

//  let Num3=[...Num1,...Num2];

//  console.log(Num3);

///Output :
// [
//     1, 2, 3, 4,
//     4, 5, 6, 7
//   ]


 /// Adding Elements to existing array :

//  let fruits2 =["Apple ","Orange ","mango"];

//  fruits2.push("Guava ","Banana");

//  fruits2.push(...["papaya ","graps "]);

//  console.log(fruits2);




 //// Output :

//  [
//     'Apple ', 'Orange ',
//     'mango',  'Guava ',
//     'Banana', 'papaya ',
//     'graps '
//   ]


//// String Individual Characters.

//// Traditional Way :

const Country="India";
// console.log(Country.split(""));
/// convert Strint To array Value :

/// New way Doing this Work :

console.log([...Country]);


// /Rest parameters - Modern javascript :
//  const Sum=(a,b,c,d)=>{
//  return a+b+c+d;
//  };

//  console.log(Sum(10,20,30,40));

//  / new Way To Right The Programe :
//  / This Is Modern way :
console.log("Hello Bhai")
 const Sum=( ...Number )=>{

return Number.reduce((accu,curre)=>{
    return accu+=curre;

},0);

 };


 console.log(Sum(13,3,4));


 console.log("Kya hua bhai :");
//   const add=(...number )=>{
//    return number.filter((accr,curre)=>{
//         return accr<=10 ;
//     });
//  }
// console.log(add(12,13,10,9,8,13));

/// Output :20.


//// Todu Note ::: a Funacation 


//// Eacmascript  2016  :: 

//// Power funaction Javascript :

let base = 2;
let exponets=3;

console.log("Using math.pow()", Math.pow(base, exponets));
/// OutPut :Using math.pow() 8 :
console.log("Using The Exponentiation operator ", base ** exponets);
/// OutPut : Using The Exponentiation operator  8 :

//// Find The Area Of circle:

// let area = Math.PI*5 ** 2;
// console.log(area.toFixed(2));

/// Output :78.54:

////? using padStart() to pad from the beginning :

// const companyName ="Kodyfire ";
// const paddedName= companyName.padStart(10);
// console.log(paddedName);


//// ? using padEnd () to pad from the beginning :

const companyName ="Kodyfire ";
const paddedName= companyName.padEnd(20,"*");
console.log(paddedName);

////? Output : Kodyfire ***********






















