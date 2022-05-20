// const element = document.querySelector("p");
// const myObj = {
//     register(){
//         element.addEventListener("click", function(evt){
//             this.printData();
//         })
//     },
//     printData(){
//         console.log("click!!");
//     }
// }

// myObj.register();

// arrow function을 사용해보자
// 클릭 이벤트가 발생했을 때 context가 유지되면서 함수호출이 가능해진다.
const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click", (e) => {
            this.printData();
        })
    },
    printData(){
        console.log("click!!");
    }
}

myObj.register();
