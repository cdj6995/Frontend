// + 버튼 클릭시 적은 내용이 할 일으로 추가 되게 하기
let cnt = 0;
const clearbtn = document.getElementById("clear");

clearbtn.addEventListener("click", clearall);

document.querySelector(".addbtn").addEventListener("click", (e) => {


    const div = document.createElement("div");
    div.setAttribute("id","div"+cnt);
    const li = document.createElement("li");
    const todo = document.querySelector(".todo");
    const input=document.querySelector(".input");

    div.appendChild(li);
    li.innerHTML = input.value;
    div.innerHTML += `<button class="textbtn" onclick="deleteTodoList(` + cnt + `)"><i class="fa-solid fa-trash-can"></i></button>`;

    todo.appendChild(div);

    document.querySelector(".input").value="";
    document.querySelector(".input").focus();
    cnt++;
});

const ul = document.querySelector(".todo");

// 리스트에서 휴지통 버튼 누르면 하나씩 삭제하기
function deleteTodoList(cnt){
    const div = document.getElementById("div" + cnt);
    ul.removeChild(div);
    cnt--;
}


function clearall(){
    for(let i = 0; i < cnt ; i++){
        const div = document.getElementById("div" + i);
        ul.removeChild(div);
    }
    cnt = 0;
}