/**
 * arrow function을 확인해 본다
 * arrow function으로 사용할 API가 setTimeout이라
 * web browser 띄우거 javascript를 실행한다.
 */

// setTimeout(function(){
//     console.log("하하하하하이");
// }, 2000);

// setTimeout(() => {
//     console.log("하하하하하이");
// }, 2000);

// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//            console.log(this === window); 
//         });
//     }
// }
// myObj.runTimeout();


// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window를 가리키고있기 때문에
//             // window.printData()라는 function은 존재하지 않기 때문이다.
//            this.printData();
//         },1000);
//     },
//     printData(){
//         console.log("print data 출력!!");
//     }
// }
// myObj.runTimeout();

// // bind()함수를 적용해보자
// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window를 가리키고있기 때문에
//             // window.printData()라는 function은 존재하지 않기 때문이다.
//            this.printData();
//         }.bind(this),1000);
//     },
//     printData(){
//         console.log("print data 출력!!");
//     }
// }
// myObj.runTimeout();



// bind()를 생략한 상태에서도 this 가 context를 유지하고 있다고 생각하면 된다
// arrow function은 context를 유지해 주기 때문이다
const myObj = {
    runTimeout(){
        // arrow function 적용해 보자.
        setTimeout(() => {
            
           this.printData();
        },1000);
    },
    printData(){
        console.log("print data 출력!! arrow function");
    }
}
myObj.runTimeout();