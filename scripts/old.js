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
	/*
	var postcode = document.getElementsByName("postcode");
	
	var state = document.getElementById("state");
	var stateValue = state.options[state.selectedIndex].value;
	*/
	if (stateValue == "Choose")
	{
		errMsg = errMsg + "Please choose one of the states.\n";
		return false;
	}
	
	var namecard = document.getElementById("cardname").value;
	
	if (!namecard.match(/^[a-zA-Z_ ]*$/))
	{
		errMsg = errMsg + "Maximum of 40 characters, alphabetical and spaces are allowed as Name.\n";
		return false;
	}
	
	
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
	
	var payment = document.getElementById("payment");
	payment.onsubmit = validate;

	var clickme = document.getElementById("cancelButton");
	clickme.onclick = submitpayment;
}

window.onload = init;