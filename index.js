let ind = 0, total = 0, income = 0, expense = 0;
let arr = [];
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
if(localStorage.getItem("history")){
    arr = JSON.parse(localStorage.getItem("history"));
    if(arr.length > 0) ind = arr[arr.length - 1].id + 1;
}
let bankBalance = 0;
const list = document.getElementById("list");
const balance = document.getElementById("balance");
function printNotes(text, amount, plus){
    let add = parseFloat(amount);
    if(plus > 0){
        list.innerHTML = list.innerHTML + `<li class="childList">
                    <button class="delete-btn">x</button>${text} <span class="money">$${amount}</span> 
                    <span class="plus-color"></span>
                </li>`;
    }else{
        list.innerHTML = list.innerHTML + `<li class="childList">
                    <button class="delete-btn">x</button>${text} <span class="money">$${amount}</span> 
                    <span class="minus-color"></span>
                </li>`;
    }
    money_minus.innerHTML = `$${expense}`;
    money_plus.innerHTML = `$${income}`;
    balance.innerHTML = `$${bankBalance}`;
}
function delNode(id){
    let newArr = arr.filter(obj => obj.id != id);
    let cnt = 0;
    arr = [];
    for(let a = 0; a < newArr.length; ++a){
        arr[a] = newArr[a];
        arr[a].id = cnt++;
    }
    ind = newArr.length;
    localStorage.setItem("history", JSON.stringify(arr));
    displayAll();
}

const textBox = document.getElementById("text");
const enter = document.getElementById("transaction-btn");
const amountBox = document.getElementById("amount");

enter.addEventListener("click", () => {
    let text = textBox.value;
    let amount = amountBox.value;
    let sign = 1;
    if(amount < 0) sign = -1;
    if(!localStorage.getItem("email")){
        window.alert("Login first.");
    }else{
        let check = 1;
        for(let a = 0; a < text.length; ++a){
            if(!((text[a] >= 'a' && text[a] <= 'z') || (text[a] >= 'A' && text[a] <= 'Z') || (text[a] <= '9' && text[a] >= '0') || text[a] == ' ')){
                check = 0;
            }
        }
        let index = 0; 
        while(index < text.length && text[index] == ' ') ++index;
        if(index >= text.length) check = 0;
        if(text && amount && check){
            let obj = {
                id : ind++,
                content : text,
                sign : sign,
                amount : amount,
            }
            ++total;
            arr.push(obj);
            localStorage.setItem("history", JSON.stringify(arr));
            displayAll();
        }else{
            window.alert("Enter both the values correctly. No special characters are allowed.");
        }
    }
})

function displayAll(){
    list.innerHTML = ``;
    bankBalance = 0;
    income = 0;
    expense = 0;
    if(arr.length == 0){
        money_minus.innerHTML = `$${expense}`;
        money_plus.innerHTML = `$${income}`;
        balance.innerHTML = `$${bankBalance}`;
    }
    for(let a = 0; a < arr.length; a++){
        let amnt = parseFloat(arr[a].amount);
        bankBalance += amnt;
        if(amnt < 0){
            amnt *= -1;
            expense += amnt;
        }else {
            income += amnt;
        }
        printNotes(arr[a].content, amnt,arr[a].sign);
    }
}
displayAll();


const delete_btn = document.getElementsByClassName("delete-btn");


list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const index = Array.prototype.indexOf.call(delete_btn, event.target);
        delNode(index);
    }
  });