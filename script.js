var ele=document.getElementById("countel");

function Increment(){
    // let currentValue=ele.textContent;
    // let updatedValue=parseInt(currentValue)+1;
    // ele.textContent=updatedValue;
    let currentValue=ele.textContent;
    let updatedValue=parseInt(currentValue)+1;
    ele.textContent=updatedValue;
}
function Decrement(){
let currentValue=ele.textContent;
let updatedValue=currentValue>0 ? parseInt(currentValue)-1:0;
// currentvalue >0 ? parseInt(currentvalue)-1: 0;
ele.textContent=updatedValue;
}

function reset(){
    ele.textContent=0;
}