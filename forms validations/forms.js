	
	window.onload = function() {

		var messageBanner = document.getElementById("message");
			messageBanner.onblur = function(evnt){
				validateMessage(1,32,this,document.getElementById("message_help"));
			}

		var messageBanner = document.getElementById("zipcode");
			messageBanner.onblur = function(evnt){
				validateZipcode(this,document.getElementById("message_zipcode"));
			}
		var messageDate = document.getElementById("date");
			messageDate.onblur = function(evnt){
				validateDate(this,document.getElementById("message_date"));
			}

		var messageName = document.getElementById("name");
			messageName.onblur = function(evnt) {
			validateName(this,document.getElementById("message_name"));
		}

		var messagePhone = document.getElementById("phoneNumber");
			messagePhone.onblur = function(evnt) {
			validatePhone(this,document.getElementById("message_phone"));
		}
		var messageEmail = document.getElementById("email");
			messageEmail.onblur = function(evnt) {
			validateEmail(this,document.getElementById("message_email"));
		}
	}

	function validateMessage(minLength,maxLength,inputText,helpText){

		if(inputText.value.length < minLength || inputText.value.length > maxLength){

			if(helpText !=null) {
				helpText.innerHTML = "The message should be 1 to 32 charecters long";
			}
			return false;
		}
		else{
				if(helpText !=null) {
					helpText.innerHTML = "";
				}
				return true;
		}
	}

	function validateZipcode(inputText, helpText){
		if(!isNonEmpty(inputText)){
			if (helpText !=null) {
				helpText.innerHTML = "Please enter the zipcode";
			};
			return false;
		}
		else if(inputText.value.length!=5){
			if (helpText !=null) {
				helpText.innerHTML = "Please enter exactly 5 digits";
			};
			return false;
		}else if(isNaN(inputText.value)){
			if (helpText !=null) {
				helpText.innerHTML = "Please enter only numbers";
			};
			return false;
		}else{
			if (helpText !=null) {
				helpText.innerHTML = "";
			};
			return true;
		}
	}

function validateDate(inputText,helpText){

	if (!isNonEmpty(inputText)) {
		if (helpText !=null) {
				helpText.innerHTML = "Please enter the date";
			};
			return false;
	} else{

			if(isValidRegexDate(inputText)){
				if (helpText !=null) {
				helpText.innerHTML = "";
			};
			return true;

			}else {
				if (helpText !=null) {
				helpText.innerHTML = "Please enter the date MM/DD/YYYY";
			};
			return false;
			}

	};
}
function validateName(inputText,helpText){
	if(!isNonEmpty(inputText)){
			if (helpText !=null) {
				helpText.innerHTML = "Tell us your name dont be shy!";
			};
			return false;
	}else{
		if (helpText !=null) {
				helpText.innerHTML = "";
			};
			return true;
	}
}

function validatePhone(inputText,helpText) {
	if(!isNonEmpty(inputText)){
		if (helpText !=null) {
				helpText.innerHTML = "Please share your contact..";
			};
			return false;
		}else{
			if(isValidRegExPhone(inputText)){
				if (helpText !=null) {
				helpText.innerHTML = "";
			};
			return true;
			}else {
				if (helpText !=null) {
				helpText.innerHTML = "Enter the no. as 123-456-7891";
			};
			return false;

			}
		}
}
function validateEmail(inputText,helpText){
	var regex = /^[\w\-\+]+@[\w\-]+(\.\w{2,4})+$/;
	if(regex.test(inputText.value)){
		if (helpText !=null) {
				helpText.innerHTML = "";
			};
			return true;
		}else{
			if (helpText !=null) {
				helpText.innerHTML = "Enter the eamil. as xyz@watulike.domainName";
			};
			return false;
		}
}
function isValidRegexDate(inputText){

	var regex = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
	if(regex.test(inputText.value)){
		return true;
	}else{
		return false;
	}
}
function isValidRegExPhone(inputText){
	var regex = /^\d{3}-\d{3}-\d{4}$/;
	if (regex.test(inputText.value)) {
		return true;
	} else{
		return false;
	};
}
function isNonEmpty(inputText){
	if (inputText.value.length<1) {
		return false;
	} else{
		return true;
	};
}