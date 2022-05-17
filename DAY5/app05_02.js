// var hoisting test(var 호이스팅) 
//  어디에 선언을 했던지 간에 최상위로 끌어 올려서 실행한다.
//  영역도 {}안에서만 사용되는데, 그것도 무시한다.

console.log(testVar);   // undefined, var 선언이 없을 경우(7은있고 8은 없을때) 에러 발생

testVar = 2;        // 밑에 즐 없이 혼자만 실행하면 앞에 var가 있는것처럼 동작된다 생각해도 무방하다
var testVar;        // var는 최우선으로 실행

console.log(testVar);   // 2, var 선언이 없어도(7은있고 8은 없을때) 같은 결과

// local variable, {}안에서만 사용 가능
{
    let age = 20;
    console.log("inner : " + age)
}
// console.log(age);    // 에러

{
    var aage = 22;
    console.log("inner : " + aage)
}
console.log("outer : " + aage)