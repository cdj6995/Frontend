// 이벤트 처리 순서
// 1) 객체를 찾고(element, object)
// 2) 이벤트를 생성하고 
// 3) 객체를 붙인다.(AddEventListener)

// 이벤트 처리 방법
// 1) 이벤트 처리기를 등록하는 방법
// <input type="button" onclick="changeColor()"/>

// 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
// const btn = document.getElementById("btn");     //id
// const btn = document.querySelector("#btn");     //id
// const btn = document.querySelector(".colorBox");     //class
// btn.onclick = changeColor();

// 3) addEventListener 메소드 사용하는 방법
// const btn1 = document.getElementById("btn");     //id
// const btn1 = document.querySelector("#btn");     //id
// const btn1 = document.querySelector(".colorBox");     //class
// btn1.addEventListener("click", ()=>{
//     do something...
// });


document.addEventListener("DOMContentLoaded", ()=>{
    // alert("잘 들어오나?");
    const boxEle = document.querySelector("#box");
    const colorBtnEle = document.querySelector(".colorBtn");
    const btnEle = document.querySelector("button");
    
    // 각각의 element에 이벤트를 연결시켜준다.
    boxEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor = "red";
    });
    colorBtnEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor = "blue";
    });
    btnEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor = "gray";
        e.currentTarget.style.padding = "10px 20px";
    });

});
