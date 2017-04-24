/**
* Author: Pratyush Sharma
* Target: enquire.html, payment.html
* Purpose: Assignment 2
* Created: 15 April 2017
* Last updated:  
*/
"use strict"; /*get variables from form and check rules*/

function validate()
{
	var errMsg = ""; //stores the error message
	var result = true; //assumes no errors
	
	//var gift = document.getElementById("gift").value == "none";
	//var giftValue = gift.options[gift.selectedIndex].value;
    	/*
	if (document.getElementById("gift").value == "Choose") 
    {
        errMsg = errMsg + "You have to select atleast one Gift Card in the Finish it up section.\n";
		result = false;
    }
	
	var quantity = document.getElementById("quantity").value;
	
	if (quantity <= 0 || quantity > 15)
	{
		errMsg += "Quantity should be between 1 and 15.\n";
		result = false;
	}
*/
	
	/*if (document.getElementById("state").value == "none") 
    {
        errMsg = errMsg + "You have to select your state to proceed further.\n";
		result = false;
    }
	*/
	//var postcode = document.getElementsById("postcode").value;
	if (document.getElementsById("postcode").value == "1234"){errMsg = errMsg + "Victoria postcodes starts with 3.\n";
				result = false;
			}
	//if
	//{
		//if (document.getElementById("state").value == "VIC") 
	//	{
			//if (postcode.charAt(0) !== "3")
			//{
				//errMsg = errMsg + "Victoria postcodes starts with 3.\n";
				//result = false;
			//}
		//}
		
	//}*/

	
	if (errMsg != "")
	{	//only display message box if there is something to show
		alert(errMsg);
	}
	
	return result;
}

function submitpayment()
{
	window.location = "index.html";
}

function init () 
{
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;

	//var clickme = document.getElementById("cancelButton");
	//clickme.onclick = submitpayment;
}

window.onload = init;