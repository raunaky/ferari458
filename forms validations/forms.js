	
	window.onload = function() {

		var messageBanner = document.getElementById("message");
			messageBanner.onblur = function(evnt){
				validateMessage(1,32,this,document.getElementById("message_help"));
			}

		var messageBanner = document.getElementById("zipcode");
			messageBanner.onblur = function(evnt){
				validateZipcode(this,document.getElementById("message_zipcode"));
			}
		
		var messageBanner = document.getElementById("date");
			messageBanner.onblur = function(evnt){
				validateDate(this,document.getElementById("message_date"));
			}
		
		var messageBanner = document.getElementById("name");
			messageBanner.onblur = function(evnt){
				validateMessage(1,32,this,document.getElementById("message_name"));
			}
		
		var messageBanner = document.getElementById("phoneNumber");
			messageBanner.onblur = function(evnt){
				validateMessage(1,32,this,document.getElementById("message_phone"));
			}
		
		var messageBanner = document.getElementById("email");
			messageBanner.onblur = function(evnt){
				validateMessage(1,32,this,document.getElementById("message_email"));
			}
		
	}

	function validateMessage(minLength,maxLength,inputText,helpText){

		if(inputText.value.length< minLength || inputText.value.length>maxLength){

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

		if(inputText.value.length!=5){
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

	function validateDate(inputText,helpText) {
		
	}