"use strict"; /*get variables from form and check rules*/


function validate(){
    quantity();
}

function quantity(){

    var product = document.getElementById("gift");
    // alert(product.value);
    
    if(product.value == "Choose"){
        alert("Please Choose the product.");
    }
    
    else{
        
    var quantity = document.getElementById("quantity");
    var numbers = /^[0-9]+$/;
    if(!quantity.value.match(numbers) || quantity.value == 0) {  
            alert('wrong quantity');  
    }

    else{

 
      }  

    
}
}