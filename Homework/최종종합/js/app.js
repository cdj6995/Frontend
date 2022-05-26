const tranInsert = document.querySelector("#tranInsert");
const content = document.querySelector("#content")
const price = document.querySelector("#price");
const incom = document.querySelector("#in");
const outcom = document.querySelector("#out");
const choice = document.getElementsByName("choice");
const date = document.querySelector("#tranDate");
const openmodal = document.querySelector("#add");
const modal = document.querySelector("#inputList");
const modalexit = document.querySelector("#exit");

modal.style.display = 'none';

tranInsert.addEventListener("click",addList);

openmodal.addEventListener("click", showModal);
modalexit.addEventListener("click", closeModal);


function addList(){

    const div = document.createElement("div");
    const li = document.createElement("li");
    const span = document.cre


    div.appendChild(li);
    li.innerHTML = `${date.value}    `;
    li.innerHTML += content.value;
    
    if(choice[0].checked){
        li.innerHTML += `   +${price.value}`;
        incom.appendChild(div); 
        choice[0].checked = false;
    } else if(choice[1].checked){
        li.innerHTML += `   -${price.value}`;
        outcom.appendChild(div);
        choice[1].checked = false;
    } else{
        alert("수입, 지출을 입력해주세요")
    }

    content.value="";
    price.value="";
}

function showModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}