function Dollar(){
    
    a = Number(document.baba.input1.value);
    b = Number(document.baba.output1.value);
    
    if(document.getElementById("1").checked === true &&(document.getElementById("3").checked === false)){
        
         c = a * 0.0028;
   document.baba.output1.value = c;
    }
    else if(document.getElementById("1").checked === false && (document.getElementById("3").checked === true)){
         c = b * 395.71;
    document.baba.input1.value = c;
        
    }else{
        
        alert("Check a Currency!");
    }
}

function Euro(){
        
    a = Number(document.baba.input2.value);
    b = Number(document.baba.output2.value);
    
    if(document.getElementById("2").checked === true &&(document.getElementById("4").checked === false)){
        
         c = a * 0.0022;
   document.baba.output2.value = c;
    }
    else if(document.getElementById("2").checked === false && (document.getElementById("4").checked === true)){
         c = b * 448.29;
    document.baba.input2.value = c;
        
    }else{
        
        alert("Check a Currency!");
    }
    
}
function reset(){
    document.baba.input1.value = "";
    document.baba.input2.value = "";
    document.baba.output1.value = "";
    document.baba.output2.value = "";
    
}