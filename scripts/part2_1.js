var msg = "";
var total = 0;
var payment = true;
var contactType = "";
var product;
var quantity;
var service = "" ;



function validateProduct(){
    product = document.getElementById("gift").value;
    if(product == "Choose"){
        msg = "Please Choose the product.<br>";
        return false;
    }else{
        return true;
    }
    return true;
}



function validateQuantity(){
    quantity = document.getElementById("quantity").value;
    var numbers = /^[0-9]+$/;
    if(!quantity.match(numbers) || quantity == 0) {  
             msg = 'wrong quantity.<br>';  
             return false;   
    }else{
        return true;
    }
    return true;
}


function storeData() {
    sessionStorage.fname = document.getElementById('fname').value;
    sessionStorage.lname = document.getElementById('lname').value;
    sessionStorage.mail = document.getElementById('mail').value;
    sessionStorage.phone = document.getElementById('phone').value;
    sessionStorage.street = document.getElementById('street').value;
    sessionStorage.town = document.getElementById('town').value;
    sessionStorage.state = document.getElementById('state').value;
    sessionStorage.postcode = document.getElementById('postcode').value;
    sessionStorage.contact = contactType;
    sessionStorage.gift = document.getElementById('gift').value; 
    sessionStorage.quantity = document.getElementById('quantity').value;
    sessionStorage.service = service;
    sessionStorage.total = total;
}



function validateContactType(){
    if(document.getElementById('email').checked || document.getElementById('post').checked || document.getElementById('cnt').checked){
        if(document.getElementById('email').checked){

        contactType = document.getElementById('email').value;
        
        }
        if(document.getElementById('post').checked){
        contactType = document.getElementById('post').value;
        
        }
        if(document.getElementById('cnt').checked){
        contactType = document.getElementById('cnt').value;     
        }
        return true;
    }else{
        msg = "Please Select Contact Type<br>";
        return false;
    }

    return true;
}


function countTotal(){

    var m = product.split("$");
    total = parseInt(total) + parseInt(parseInt(m[1])*parseInt(quantity));
    if(document.getElementById('2b').checked){
        alert(service);
        service += document.getElementById('2b').value + " ";
        alert(service);
        var m = document.getElementById('2b').value.split("$");
        // msg += m[1]);
        total = total + parseInt(m[1]); 
    }

    if(document.getElementById('3b').checked){
        service += document.getElementById('3b').value;
        alert(service);
        var n = document.getElementById('3b').value.split("$");
        // msg += n);
        total = total + parseInt(n[1]);
    } 
    
    return true;
}

function validatePostcode(){
    var state = document.getElementById("state");
    var postcode = document.getElementById("postcode");
    // console.log(postcode);
    var first = postcode.value.charAt(0);
    console.log(document.getElementById("postcode").value);
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
        msg = "Please Enter Valid Postcode<br>";
        return false;
    }else{
        return true;
    }

}

function validateState(){

    if(document.getElementById('state').value == "Choose"){
        msg = "Please Choose the State<br>";
        return false;
    }else{
        return true;
    }
}




function init() {
	var msg=" ";
	// debugger;
    var regForm = document.getElementById("myform");
    regForm.onsubmit = validate;


}

window.onload = init;


function validate(event){
	// debugger;
	event.preventDefault();
	// var msg = 0;

		// document.getElementById("error").innerHTML == "msg";

    if(validateState() && validatePostcode() && validateContactType() && validateProduct() && validateQuantity()){
        countTotal();
        storeData();
        window.location = "payment.html";
    }else{

		document.getElementById("error").innerHTML=msg;


    }

}

