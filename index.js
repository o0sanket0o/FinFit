let ind = 0, total = 0;
let arr = [];
const list = document.getElementById("list");
function printNotes(text, amount, plus){
    if(plus > 0){
        list.innerHTML = list.innerHTML + `<li class="childList">
                    <button class="delete-btn">x</button>${text} <span class="money">$${amount}</span> 
                    <span class="plus-color"></span>
                </li>`;
    }else{
        list.innerHTML = list.innerHTML + `<li class="childList">
                    <button class="delete-btn">x</button>${text} <span class="money">${amount}$</span> 
                    <span class="minus-color"></span>
                </li>`;
    }
}

function editNote(id){

}

function delNode(id){

}

const textBox = document.getElementById("text");
const enter = document.getElementById("transaction-btn");
const amountBox = document.getElementById("amount");

enter.addEventListener("click", () => {
    let text = textBox.value;
    let amount = amountBox.value;
    let sign = 1;
    if(amount < 0) sign = -1;
    if(text && amount){
        let obj = {
            id : ind++,
            content : text,
            sign : sign,
        }
        ++total;
        arr.push(obj);
        printNotes(text, amount, sign);
    }else{
        console.log("Enter both the values correctly first.");
    }
})