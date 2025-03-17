var x = 5;
var y = 7;
var z = x+y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A+B;
console.log(C);

function SumNPrint(x1,x2){
    let x3 = x1+x2;
    console.log(x3);
    return x3
}

SumNPrint(x,y);
SumNPrint(A,B);

if (C.length>z){
    console.log(C);
}else if(C.length==z){
    console.log("good job!");
}else{
    console.log(z);
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array){
    for(let i=0;i<array.length;i++){
        if(array[i]=="Banana"){
            alert("found the Banana in "+i);
        }
    }
}
findTheBanana(L1);
findTheBanana(L2);

function findTheBanana(value){
    if (value == "Banana"){
        alert("We found a banana in the first array")
    }
}
L1.forEach(findTheBanana);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greetingText")
    if (h<12){
        E.innerHTML = "Good morning, my name is Phasakorn Chivatxaranukul";
    }else if(12<h<8){
        E.innerHTML = "Good afternoon, my name is Phasakorn Chivatxaranukul";
    }else if(18<h<20){
        E.innerHTML = "Good evening, my name is Phasakorn Chivatxaranukul";
    }else if(20<h<20 || 0<h<5){
        E.innerHTML = "Good night, my name is Phasakorn Chivatxaranukul";
    }
}
greetingFunc()

