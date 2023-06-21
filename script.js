function insert(){
    let userInput=document.querySelector("input").value;
let ul=document.querySelector("ul");

let newList=document.createElement("li");
let newListName=document.createTextNode(userInput);
newList.appendChild(newListName);

ul.appendChild(newList);
}