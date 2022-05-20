// document.querySelector("div").addEventListener("click", function({target}){
//     // event -> e
//     // target - element(<div>)
//     // console.log(target.tagName); // <div>
//     console.log(target.innerText);  // innerText
// });

document.querySelector("div").addEventListener("click", (e)=>{
    console.log(e.target.innerText);
})

// document.querySelector("div").addEventListener("click", function({type}){
//     console.log(type);  // innerText
// });
/**
 * 타입을 확인해보고 싶으면 type이라는 이름을 주고 출력해야한다.
 * (event type)
 * target,type은 지정된 예약어라서 다른 이름으로 받아올 수 없다.
 */
//  document.querySelector("div").addEventListener("click", function({type,target}){
//     console.log(type, target.tagName);  // innerText
// });