// function add(a,b) {
//    // return a+b };
//     var result =0;
//     setTimeout(function() {
//         result = a+b}, 3000);
//         return result;
//     };
//     console.log((add(3,2)));
//     console.log((add(5,5)));

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
            //a=2
            //b=3
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