// function add(a,b) {
//    // return a+b };
//     var result =0;
//     setTimeout(function() {
//         result = a+b}, 3000);
//         return result;
//     };
//     console.log((add(3,2)));
//     console.log((add(5,5)));

// function mainFunc() {
//     theCall();
    
//     console.log('print hello world');

// }

// theCall = () => {
//     console.log('hello karthik');
// }

// mainFunc();


// const st= (a,b) => {
//     setTimeout((a,b) => {
// let result = a+b;
// return result;        
//     }, 3000);
// }

// let result;

// const st=(a,b) => {
//     result = a+b;
//     return result;
// };

// setTimeout(st,3000);

// console.log((st(3,2)));


// const myFun =(a,b) => {
//     let res = Number(a) + Number(b);
//     return res;
// };

// let result = setTimeout(myFun(5,8), 2000)

// console.log(

//     let result =0;
//     const my

// ------

// let result = 0;

// const myFn = (a, b) => {
//   result = Number(a) + Number(b);
// };

// const returnResult = () => {
//   return setTimeout(myFn, 3000, 2, 3);
// };

// result = returnResult();

// setTimeout(() => {
//   console.log(result);
// }, 5000);

// ------

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise Resolved");
//     }, 3000);
//   });
  
//   promise.then((data) => {
//     console.log(data);
//   });

// var result =0;
// let a;
// let b;

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => { 
//         result=a+b;
//         resolve(result)
//         }, 3000);
//     });
        
//         promise.then((data) => {
//             console.log(data);
//           });


function add(a,b) {
    var result =0;
  
    var promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            result=a+b
            resolve(result)
        }, 3000);
    });
    promise.then(function(result) {
        console.log(result)
      })
}
add(5,5)    