const display=document.getElementById("screen");

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    let cr = display.value;
    display.value=cr.substring(0,(cr.length-1));
}
function clearAll(){
    display.value = "";
}
function equals(){
    let cr = display.value;
    if (cr=="") {
        display.value="";
    } else {
        display.value=eval(cr);
    }
    
    
}