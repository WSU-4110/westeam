//Validation Code for Inputs
var SteamID = document.forms['form'][SteamID];

var ErrorMessage = document.getElementById('Steam ID error');

SteamID.addEventListener('textInput', SteamID_Verify)

// Function validates Steam ID to see if there are any errors
function validated() { // The ID must contain 17 numbers, no more/less and strings and chars canno't be used
    if (SteamID.value.length < 17) {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is less than 17, return false
    } else if(SteamID.value.length > 17) {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is greater than 17, return false
    } else if(SteamID.value.length != 17) {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is does not equal 17, return false
    } else if(SteamID.value.length == "") {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is blank, return false
    } else if(SteamID.value.length == char) {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is a character, return false
    } else if(SteamID.value.length == string) {
        SteamID.style.border = "1px solid red";
        SteamID_error.style.display = "block";
        SteamID.focus();
        return false; // If ID is a letter, return false
    }

}

// Function that checks if ID is correct
function SteamID_Verify() {
    if (SteamID.value.length == 17) {
        SteamID.style.border = "1px solid silver";
        SteamID_error.style.display = "none";
        return true; // If ID is correct, return true
    }
}