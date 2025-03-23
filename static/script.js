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
// findTheBanana(L1);
// findTheBanana(L2);

function findTheBanana(value){
    if (value == "Banana"){
        alert("We found a banana in the first array")
    }
}
// L1.forEach(findTheBanana);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greetingText")
    console.log("hour = "+h)
    if((h>20 && h<24) || (h>0 && h<5)){
        E.innerHTML = "Good night, my name is Phasakorn Chivatxaranukul";
    }else if(h>12 && h<18){
        E.innerHTML = "Good afternoon, my name is Phasakorn Chivatxaranukul";
    }else if(h>18 && h<20){
        E.innerHTML = "Good evening, my name is Phasakorn Chivatxaranukul";
    }else if (h<12){
        E.innerHTML = "Good morning, my name is Phasakorn Chivatxaranukul";
    }
}
greetingFunc()

function addYear(){
    let d = new Date();
    let y = d.getFullYear();
    let E = document.getElementById("copyYear");
    E.innerHTML += y;
}

// function showList(){
//     var button = document.getElementById("hobbiesButton");
//     var list = document.getElementById("hiddenList");
//     list.style.display="block";
//     button.style.display="none";
// }

$(document).ready(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
});

$("#readMore").click(function(){
    $("#shortIntro").hide();
    $("#readMore").hide();
    $("#longIntro").show();
    $("#readLess").show();
});

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#shortIntro").show();
    $("#readMore").show();
});

function valid(){
    var valid = true;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var errorMessage = document.getElementById("validationMessage");
    if(!name.checkValidity()||!email.checkValidity()||!comment.checkValidity()){
        errorMessage.innerHTML="Please fill out all required fields in contact form, invalid responses.";
        errorMessage.style.color="red";
        errorMessage.style.textAlign="center";
        errorMessage.style.fontWeight ="bold";
    }
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => document.getElementById("adviceText").innerText = data.slip.advice)
        .catch(error=>{
            document.getElementById("adviceText").innerText = "failed to get advice, please try again.";
           console.error("Error getting advice",error); 
        });
}