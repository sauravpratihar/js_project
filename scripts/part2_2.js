"use strict";
window.onload = init;
var msg=" ";
var card;
var regForm;
function init() {
    var msg=" ";
    // debugger;
    getData();
    document.getElementById("cancelButton").addEventListener("click", cancel);

    function cancel() {
        window.location = "index.html";
    }

    regForm = document.getElementById("payment");
    regForm.onsubmit = validate_payment;


}

function getData(){
    document.getElementById("fname").innerHTML = sessionStorage.fname;
    document.getElementById("lname").innerHTML = sessionStorage.lname;
    document.getElementById("mail").innerHTML = sessionStorage.mail;
    document.getElementById("phone").innerHTML = sessionStorage.phone;
    document.getElementById("street").innerHTML = sessionStorage.street;
    document.getElementById("town").innerHTML =  sessionStorage.town;
    document.getElementById("state").innerHTML = sessionStorage.state;
    document.getElementById("postcode").innerHTML =  sessionStorage.postcode;
    document.getElementById("contact").innerHTML = sessionStorage.contact;
    document.getElementById("gift").innerHTML = sessionStorage.gift;
    document.getElementById("quantity").innerHTML = sessionStorage.quantity;
    document.getElementById("service").innerHTML =  sessionStorage.service;
    document.getElementById("total").innerHTML =  parseInt(sessionStorage.total);
}

// payment
function validate_payment(event){
    // getData();

    event.preventDefault();
    if(validateCard() && card_name() && expire() &&check_card()){
        regForm.submit();
    }
    else{
        document.getElementById("error").innerHTML=msg;
    }
    
}


function card_name(){
    var cardname = document.getElementById("cardname");
    var name = /^[a-zA-Z ]*$/;

    if(!cardname.value.match(name) || cardname.value.length > 40){
        msg = "Enter valid card name<br>";
        return false;
    }  
    return true; 
}




function expire(){
    var date = /^(0[1-9]|10|11|12)-[0-9]{2}$/;
    var expdate = document.getElementById("expdate");



    if(!expdate.value.match(date)){
        msg = "Enter valid expire date<br>";
        return false;
    }

    else{
        var d = new Date();
        var currentYear = d.getFullYear().toString().slice(-2);
        currentYear = parseInt(currentYear);
        var currentMonth = d.getMonth()+1;
        var parts = expdate.value.split('-');
        var year = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        if (year < currentYear || (year == currentYear && month < currentMonth)) {
            msg = "The expiry date has passed<br>";
            return false;
        }
    }
    return true;

}

function check_card(){
    
    var cvv = document.getElementById("secure");


    if(document.getElementById('visa').checked){
        // test = document.getElementById('visa').value;
        var cardnumber = document.getElementById("cardnumber");
        var number = /^4[0-9]{15}$/;
        var numbers = /^[0-9]+$/;
        if(cardnumber.value.match(numbers)){

            if((cvv.value.length != 3) || (!cvv.value.match(numbers))){
                msg = "Enter valid cvv number<br>";
                return false;
            
            }

        }
        else{
            msg = "Enter valid visa card number<br>";
            return false;
            
        }

    }
    if(document.getElementById('amex').checked){
        var cardnumber = document.getElementById("cardnumber");
        var numbers = /^(34|37)[0-9]{13}$/;
        var number_old = /^[0-9]+$/;
        if(cardnumber.value.match(numbers)){
            if(cvv.value.length != 4 || !cvv.value.match(number_old)){
                msg = "Enter valid cvv number<br>";
                return false;
            }
        }else{
            msg = "Enter valid amex card number<br>";
            return false;
        }   
        
    }

    if(document.getElementById('mastercard').checked){
        var cardnumber = document.getElementById("cardnumber");
        var numbers = /^(51|52|53|54|55)[0-9]{14}$/;
        var number_old = /^[0-9]+$/;
        if(cardnumber.value.match(numbers)){
           if(cvv.value.length != 3 || !cvv.value.match(number_old)){
                msg = "Enter valid cvv number<br>";
                return false;
            }
        }else{
             msg = "Enter valid mastercard number<br>";
             return false;
        }
        
        
        
    }
    return true;

}

function validateCard(){
    if(document.getElementById('visa').checked || document.getElementById('amex').checked || document.getElementById('mastercard').checked){
        if(document.getElementById('visa').checked){

        card = document.getElementById('visa').value;
        
        }
        if(document.getElementById('amex').checked){
        card = document.getElementById('amex').value;
        
        }
        if(document.getElementById('mastercard').checked){
        card = document.getElementById('mastercard').value;     
        }
        return true;
    }else{
        msg = "Please Select Card<br>";
        return false;
    }
}

// function send_post(){
//     var url = "https://mercury.swin.edu.au/it000000/formtest.php";
//     var method = "POST";
//     var postData = "x=1";
//     var async = true;

// var request = new XMLHttpRequest();

// request.onload = function () {

//    var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
//    var data = request.responseText; // Returned data, e.g., an HTML document.
// }

// request.open(method, url, async);

// request.send(JSON.stringify({
//     "value": "value"
// }));
// window.location = "https://mercury.swin.edu.au/it000000/formtest.php";
// }

