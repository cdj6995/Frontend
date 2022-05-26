window.onload = function(){
    const income = document.querySelector("#income");
    const expense = document.querySelector("#expense");
    const tranDate = document.querySelector("#tranDate");
    const content = document.querySelector("#content");
    const price = document.querySelector("#price");
    const tranInsert = document.querySelector("#tranInsert");
    const exit = document.querySelector("#exit");

    const inList = document.querySelector("#inList");
    const outList = document.querySelector("#outList");

    const totalCom = document.querySelector("#totalCom");

    const incom = document.querySelector("#in");
    const outcom = document.querySelector("#out");
    const choice = document.getElementsByName("choice");
    const date = document.querySelector("#tranDate");
    
    const totalIncome = document.querySelector("#totalIncome");
    const totalExpense = document.querySelector("#totalExpense");

    const add = document.querySelector("#add");
    const modal = document.getElementById('modal')

    //Show modal
    add.addEventListener('click', () => {
        modal.classList.add('show-modal')
    })

    //Hide modal
    exit.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })

    // 총자산
    let acc = 0;
    let incomeAcc = 0;
    let expenseAcc = 0;

    tranInsert.addEventListener("click",addList);

    function addList(){

        // const div = document.createElement("div");
        const li = document.createElement("li");
        // const span = document.cre
        
        let flag = 0;

    
        // div.appendChild(li);
        li.innerHTML = `${date.value}    `;
        li.innerHTML += content.value;
        
        if(choice[0].checked){
            li.innerHTML += `  +${price.value}`;
            li.setAttribute("style", "color: green");
            incom.appendChild(li); 
            choice[0].checked = false;
            flag = 0;
        } else if(choice[1].checked){
            li.innerHTML += `  -${price.value}`;
            li.setAttribute("style", "color: red");
            outcom.appendChild(li);
            choice[1].checked = false;
            flag = 1;
        } else{
            alert("수입, 지출을 입력해주세요")
        }

        totalAsset(flag, price.value);

        content.value="";
        price.value="";

    }
        

    function totalAsset(flag, cost) {
        if(flag === 0){
            acc = acc+ parseInt(cost);
            incomeAcc += parseInt(cost);
            totalIncome.innerHTML = '+' + incomeAcc;

        } else {
            acc = acc-parseInt(cost);
            expenseAcc += parseInt(cost);
            totalExpense.innerHTML = '-' + expenseAcc;
        }
        
        totalCom.innerHTML = '￦' + acc;
    }


    
}

window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
})