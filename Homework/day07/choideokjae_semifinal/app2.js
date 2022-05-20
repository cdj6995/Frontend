// 할 일 목록
let doList = [];

// + 버튼 클릭시 addList 실행되도록 하자
let addBtn = document.querySelector(".addbtn");
addBtn.addEventListener("click", addList);

// 할 일 추가하는 함수
function addList() {
    // input에 들어가 있는 문자를 list로 지정
    let list = document.querySelector(".input").value;
    // list가 공백이 아니면 실행
    if(list != null){
        // 실행 목록에 추가
        doList.push(item);
        // 추가한 후 다시 공백으로 만들어 준다
        document.querySelector(".input").value="";
        document.querySelector(".input").focus();
    }

    showList();
}


function showList(){
    let ul =`<ul class="todo">`;
    for(let i = 0; i < doList.length; i++){
        ul += `<div class="list"> <li class="listin" id = ` + i + `>` + doList[i] + `</li><button class="textbtn"><i class="fa-solid fa-trash-can"></i></button></div>`
    }
    ul += "<ul>";
    document.querySelector(".do_list").innerHTML = ul;

    let deletebtn = document.querySelectorAll(".list");
    for(let i = 0; i < deletebtn.length; i++){
        deletebtn[i].addEventListener("click", deletedo);
    }
}

function deletedo(){
    let id = this.getAttribute("id");
    doList.splice(id, 1);
    showList();
}