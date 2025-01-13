


// let data=(a,b)=>
// {
//    return a+b;
// }
// console.log(data(5,6));


// let arr=[1,2,3,4,5];
// console.log(arr[0]);


//async javascript

// function dataload()
// {
//      return new Promise((resolve,reject)=>
//      {
//         setTimeout(()=>
//             {
//                 console.log("data load")
//                 resolve();
//             },3000)
//      } )
    
    
// }

// function datause()
// {
//     console.log("data use")
// }
// function datacollection()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>
//             {
//                 console.log("data collection")
//                 resolve();
//             },2000)
//     })
   
   
// }
// async function exam() 
// {
//    await dataload();
//    await datacollection();
//     await datause();
    
// }
// exam();


let arr=[
    {
        name:"om",
        age:20
    },
    {
        name:"raj",
        age:20
        username:"om"
    }
];
console.log(arr[1])