//Promise//// Pending /// Settled /// Resolved /// Rejected :

// const pr = new Promise((resolve, reject)=>{


//     setTimeout(()=>{
//         resolve("Hello its resolve :")
//     },2000);
// });



// pr.then((res)=>{
//      console.log(res);
// }).catch((error)=>{

//     console.log(error);

// }).finally(()=>{
//     console.log("Don't Worry Bro:");
// });


//// Promises Use In Student EnrolleMent Process :

// let StudentName ="Satyam";
// const pr= new Promise((resolve, Reject )=>{

//     setTimeout(()=>{
//         IsEnrollement =0.4<Math.random();

//         if(IsEnrollement){
//             resolve(`Your Enrollement Sucessfully done ${StudentName}`);
//         }else{
//             Reject(`Your Enrollement Is Rejected ${StudentName}:`);
//         }
//     },2000);
// }).then((res)=>{
//     console.log(res);

// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log(" Enrollemet Process Is Complete :");
// });


//// Promise All In Javascript ::

//// It's Use When All The Promise Reject Ho Yaa Resolve Ho :


const Promise1= new Promise((Resolve , Reject )=>{
    setTimeout(()=>{
 Resolve("Promese 1 Are Resolve :")
    },5000);
});
const Promise2= new Promise((Resolve , Reject )=>{
    setTimeout(()=>{
 Reject("This Is rejected :");
    },8000);
});
const Promise3= new Promise((Resolve , Reject )=>{
    setTimeout(()=>{
 Resolve("Promese 3 Are Resolve :")
    },4000);
});


//// Promise All Methode is use .
// Promise.all([Promise1,Promise2,Promise3]).then((res)=>{
//  console.log(res);
// }).catch((error)=>{
//     console.log(error);
// });


//// Promise All Settle is return The Value Either Promise IS Resolve Or Reject :

// Promise.allSettled([Promise1, Promise2,Promise3])
// .then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// });



///ISme Vahi Resoleve Ya Reject Hogi Jo Sabse Kam Time Legi . The value Is Resolve Is Take a Some Time .

// Promise.race([Promise1, Promise2,Promise3])
// .then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// });













