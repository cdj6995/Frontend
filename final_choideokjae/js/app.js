
const coffeemenu = document.querySelector(".coffee");
const coffeeList = document.querySelector("#coffee");
const drinkmenu = document.querySelector(".drink");
const drinkList = document.querySelector("#drink");
const content = document.querySelector(".content");
const removeBtn = document.querySelector(".btn-remove");

// 삭제 버튼 클릭시 동작
removeBtn.addEventListener("click", removelist);
function removelist(){
    
}


// 처음에 커피 및 음료 메뉴 안보이게하기
coffeeList.style.display = "none";
drinkList.style.display = "none";

// 처음에 커피메뉴에 불 들어오게 하기
coffeemenu.classList.add("active");

// 커피메뉴 클릭할시
coffeemenu.addEventListener("click", clickCoffList);
// 음료메뉴 클릭할시
drinkmenu.addEventListener("click", clickdrinkList);

// 커피메뉴를 클릭할 시 동작하는 함수
function clickCoffList(){
    // 음료메뉴가 불이 들어와있는 상태에서 커피메뉴를 누르면
    // 음료상태와 커피상태를 바꾸고
    // 리스트도 음료리스트에서 커피 리스트로 바꾼다
    if(drinkmenu.classList.contains("active")){
        if(!coffeemenu.classList.contains("active")){
            coffeemenu.classList.add("active");
            coffeeList.style.display = "block";
            drinkmenu.classList.remove("active");
            drinkList.style.display = "none";
        }

    }else{
        // 클래스에 active 가 들어있을시 active를 없애고 list도 안보이게 처리
        // active가 없다면 active를 넣고 list 도 나오게 처리
        if(coffeemenu.classList.contains("active")){
            coffeemenu.classList.remove("active");
            coffeeList.style.display = "none";
        }else{
            coffeemenu.classList.add("active");
            coffeeList.style.display = "block";
        }
    }

}
// 음료메뉴를 클릭할 시 동작하는 함수
function clickdrinkList(){
    // 커피메뉴가 불이 들어와있는 상태에서 음료메뉴를 누르면
    // 커피상태와 음료 상태를 바꾸고
    // 리스트도 커피리스트에서 음료 리스트로 바꾼다
    if(coffeemenu.classList.contains("active")){
        if(!drinkmenu.classList.contains("active")){
            
            drinkmenu.classList.add("active");
            drinkList.style.display = "block";
            coffeemenu.classList.remove("active");
            coffeeList.style.display = "none";
        }
    }else{
        // 클래스에 active 가 들어있을시 active를 없애고 list도 안보이게 처리
        // active가 없다면 active를 넣고 list 도 나오게 처리
        if(drinkmenu.classList.contains("active")){
            drinkmenu.classList.remove("active");
            drinkList.style.display = "none";
        }else{
            drinkmenu.classList.add("active");
            drinkList.style.display = "block";
        }
    }
}


