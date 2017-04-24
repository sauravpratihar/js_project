"use strict";

//enquiry
var msg = "";
var enquire = true;
var payment = true;

function init () 
{   

    if(!document.getElementById("regform")){
        var payment = document.getElementById("payment");
	    payment.submit = validate_payment();
	    payment.submit = printdata();

        	    
    }
    if(!document.getElementById("payment")){	
	    var regForm = document.getElementById("regform");
	    regForm.onsubmit = validate;

        // if(enquire == true)
        //     window.location = "payment.html";

    }
    
}

// if(document.getElementById("payment")){
//     window.onload = function() {
//      validate_payment();
// };
// }




function validate(){
    
    // document.getElementById("error").innerHTML = "New text!";

    var total = 0;
    sessionStorage.fname = document.getElementById('fname').value;
    sessionStorage.lname = document.getElementById('lname').value;
    sessionStorage.mail = document.getElementById('mail').value;
    sessionStorage.phone = document.getElementById('phone').value;
    sessionStorage.street = document.getElementById('street').value;
    sessionStorage.town = document.getElementById('town').value;
    sessionStorage.state = document.getElementById('state').value;
    sessionStorage.postcode = document.getElementById('postcode').value;
    
    if(document.getElementById('email').checked){

        sessionStorage.contact = document.getElementById('email').value;
        
    }
    if(document.getElementById('post').checked){
        sessionStorage.contact = document.getElementById('post').value;
        
    }
    if(document.getElementById('cnt').checked){
        sessionStorage.contact = document.getElementById('cnt').value;     
    }
    var product = document.getElementById("gift");
    
    //alert(product.value);

    sessionStorage.gift = document.getElementById('gift').value;
    
    sessionStorage.quantity = document.getElementById('quantity').value;
    var m = sessionStorage.gift.split("$");
        // msg += sessionStorage.gift);
        // msg += m[1]);

    total = total + parseInt(parseInt(m[1])*parseInt(sessionStorage.quantity));

     if(document.getElementById('3b').checked){
        sessionStorage.b3 = document.getElementById('3b').value;
        var n = sessionStorage.b3.split("$");
        // msg += n);
        total = total + parseInt(n[1]);      
    }
    
    if(document.getElementById('2b').checked){
        sessionStorage.b2 = document.getElementById('2b').value;
        var m = sessionStorage.b2.split("$");
        // msg += m[1]);
        total = total + parseInt(m[1]);     
    }

    sessionStorage.total = total;

// msg += sessionStorage.fname);
    // quantity();
    var product = document.getElementById("gift");
    // msg += product.value);
    
    if(product.value == "Choose"){
        msg += "Please Choose the product.<br>";
        enquire = false;
    }
    
    else{
        var quantity = document.getElementById("quantity");
        var numbers = /^[0-9]+$/;
        if(!quantity.value.match(numbers) || quantity.value == 0) {  
                msg += 'wrong quantity.<br>';  
                enquire = false;
                
        }
    }
    // if (postcode() == false)
    //     msg += "Postcode invalid<br>";

      var state = document.getElementById("state");
    if(state.value == "none"){
        msg += "Please choose the state.<br>";
        enquire = false;
        
    }
    
    var postcode = document.getElementById("postcode");
    var first = postcode.value.charAt(0);
    var x = false;
    var numbers = /^[0-9]+$/;

    if(postcode.value.match(numbers) && postcode.value.length == 4){
        switch (state.value) {
            case "VIC":
                if(first==3 || first ==8)
                    x=true;
                break;
            case "NSW":
                if(first==1 || first ==2)
                    x=true;
                break;
            
            case "QLD":
                if(first==4 || first ==9)
                    x=true;
                break;
            case "NT":
                if(first==0)
                    x=true;
                break;
            case "WA":
                if(first==6)
                    x=true;
                break;

            case "SA":
                if(first==5)
                    x=true;
                break;
            case "TAS":
                if(first==7)
                    x=true;
                break;
            case "ACT":
                if(first==0)
                    x=true;
                break;
            default:
                x = false;

        } 
    }

    if(x == false){
        enquire=false;  
        msg += "Postcode invalid<br>";
    }

    // alert(msg);
    document.getElementById("error").innerHTML = msg;


    if(enquire == true)
        window.location = "payment.html";
    
}

function quantity(){

    var product = document.getElementById("gift");
    // msg += product.value);
    
    if(product.value == "Choose"){
        msg += "Please Choose the product.<br>";
        enquire = false;
    }
    
    else{
        var quantity = document.getElementById("quantity");
        var numbers = /^[0-9]+$/;
        if(!quantity.value.match(numbers) || quantity.value == 0) {  
                msg += 'wrong quantity.<br>';  
                enquire = false;
                
        }
    }
}

function postcode(){
    var state = document.getElementById("state");
    if(state.value == "none"){
        msg += "Please choose the state.<br>";
        enquire = false;
        
    }
    
    var postcode = document.getElementById("postcode");
    var first = postcode.value.charAt(0);
    var x = false;
    var numbers = /^[0-9]+$/;

    if(postcode.value.match(numbers) && postcode.value.length == 4){
        switch (state.value) {
            case "VIC":
                if(first==3 || first ==8)
                    x=true;
                break;
            case "NSW":
                if(first==1 || first ==2)
                    x=true;
                break;
            
            case "QLD":
                if(first==4 || first ==9)
                    x=true;
                break;
            case "NT":
                if(first==0)
                    x=true;
                break;
            case "WA":
                if(first==6)
                    x=true;
                break;

            case "SA":
                if(first==5)
                    x=true;
                break;
            case "TAS":
                if(first==7)
                    x=true;
                break;
            case "ACT":
                if(first==0)
                    x=true;
                break;
            default:
                x = false;

        } 
    }

    if(x == false)
        enquire=false;  

    
}




// payment
function validate_payment(){
    
    card_name();
    expire();
    check_card();

    // alert(msg);
    
    document.getElementById("cancelButton").addEventListener("click", myFunction);

    function myFunction() {
	    window.location = "index.html";
    }
  
    

    
}


function card_name(){
    var cardname = document.getElementById("cardname");
    var name = /^[a-zA-Z ]*$/;

    if(!cardname.value.match(name) || cardname.value.length > 40){
        msg += "Enter valid card name<br>";
        return false;
    }   
}



// function card_number(){
//     var cardnumber = document.getElementById("cardnumber");
//     var numbers = /^[0-9]+$/;
//     var cardname = document.getElementById("cardname");
    
//     if(!cardnumber.value.match(numbers) || !(cardnumber.value.length ==15 || cardnumber.value.length ==16) ){
//         msg += "Enter valid number<br>";
//         return false;
//     }   
// }

function expire(){
    var date = /^(0[1-9]|10|11|12)-[0-9]{2}$/;
    var expdate = document.getElementById("expdate");



    if(!expdate.value.match(date)){
        msg += "Enter valid expire date<br>";
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
            msg += "The expiry date has passed<br>";
            return false;
        }
    }

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
                msg += "Enter valid cvv number<br>";
                return false;
            
            }

        }
        else{
            msg += "Enter valid visa card number<br>";
            return false;
            
        }

    }
    if(document.getElementById('amex').checked){
        var cardnumber = document.getElementById("cardnumber");
        var numbers = /^(34|37)[0-9]{13}$/;
        var number_old = /^[0-9]+$/;
        if(cardnumber.value.match(numbers)){
            if(cvv.value.length != 4 || !cvv.value.match(number_old)){
                msg += "Enter valid cvv number<br>";
                return false;
            }
        }else{
            msg += "Enter valid amex card number<br>";
            return false;
        }   
        
    }

    if(document.getElementById('mastercard').checked){
        var cardnumber = document.getElementById("cardnumber");
        var numbers = /^(51|52|53|54|55)[0-9]{14}$/;
        var number_old = /^[0-9]+$/;
        if(cardnumber.value.match(numbers)){
           if(cvv.value.length != 3 || !cvv.value.match(number_old)){
                msg += "Enter valid cvv number<br>";
                return false;
            }
        }else{
             msg += "Enter valid mastercard number<br>";
             return false;
        }
        
        
        
    }

}


function printdata(){
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
    if(document.getElementById("2b").checked){
        document.getElementById("2b").innerHTML = sessionStorage.b2;
        
    }

    // if(document.getElementById("3b").checked){
    //     document.getElementById("3b").innerHTML = sessionStorage.quantity;
        
    // }
    document.getElementById("total").innerHTML =  parseInt(sessionStorage.total);
}

function logout(){
    localStorage.clear();
    window.location.href = "enquire.html";
}



// window.onload = printdata;

window.onload = init;

// var clickme = document.getElementById("cancelButton");
// clickme.onclick = function(){
    
// 	window.location = "index.html";
// }

    