// arrow function(화살표 함수)
// 브라우저에서 테스트 할 수 있는 API이다.
setTimeout(function(){
    console.log("화살표 함수입니다.");
},1000);    // 1000 => 1초


// 이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 해보자.
setTimeout(() => {
    console.log("화살표 함수입니다.");
}, 2000);


const simpleFunc = function(){
    console.log("simple function")
}
simpleFunc();

// 화살표 함수는 anoymous 함수이다.
// 인자가 없는 화살표 함수
const simpleFunc2 = () => console.log("simple2")
simpleFunc2();

// 인자가 있는 화살표함수
const add = (a,b) => a+b;
console.log(add(1,2));
// const add1 = function(a,b){
//     return a + b;
// }

// default parameter
// es6 추가
function showMessage(message, from="IU"){
    console.log(`${message} by ${from} `);
}
console.log(showMessage('안녕','정우성'));

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest Parameter는 배열 형태로 값을 전달한다.
 * 
 */
function printArr(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
};
printArr('javascript','java','spring');


function printArr(...args){
    for (const arg of args) {
        console.log(arg);
    }
};
printArr('javascript','java','spring');
