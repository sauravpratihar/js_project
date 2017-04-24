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
	debugger;
	var errMsg = ""; //stores the error message
	var result = true; //assumes no errors

	var namecard = document.getElementById("cardname").value;
	
	if (!namecard.match(/^[a-zA-Z_ ]*$/))
	{
		errMsg = errMsg + "Maximum of 40 characters, alphabetical and spaces are allowed as Name.\n";
		result false;
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