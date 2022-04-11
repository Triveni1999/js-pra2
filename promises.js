
// Q1.Write callback function to print numbers from 1 to 7,
// in which 1 should be printed after 1 sec , 2 should be printed after 2 sec,
// 3 should be printed after 3 sec and so on.
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
//Ans:-
function printNum() {
  setTimeout(() => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
        setTimeout(() => {
          console.log("4");
          setTimeout(() => {
            console.log("5");
            setTimeout(() => {
              console.log("6");
              setTimeout(() => {
                console.log("7");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
printNum();
//Q2."Write promise function to print numbers from 1 to 7,
// in which 1 should be printed after 1 sec , 2 should be printed after 2 sec,
// 3 should be printed after 3 sec and so on.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
//8
function CallPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      resolve("promise resolve");
    }, 1000);
  });
}
CallPromise("1")
  .then(() => CallPromise("2"))
  .then(() => CallPromise("3"))
  .then(() => CallPromise("4"))
  .then(() => CallPromise("5"))
  .then(() => CallPromise("6"))
  .then(() => CallPromise("7"));


// Q3.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state
// and print Promise Resolved,and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected

function PrintNum(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      console.log("Promise Resolved");
    } else {
      console.log("Promise Rejected");
    }
  });
}
PrintNum(24)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
PrintNum(29)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });




//Q.4 Create examples to explain async await function

function PrintLetter(alphabet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(alphabet);
      resolve(alphabet);
    }, 1000);
  });
}
async function PrintAlphabets() {
  await PrintLetter("A");
  await PrintLetter("B");
  await PrintLetter("C");
}
PrintAlphabets();
