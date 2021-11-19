const form = document.getElementById('form');
const SteamID = document.getElementById('Steam ID');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get value from the object
    const SteamID_Value = SteamID.value.trim();

    if(SteamID_Value === '') {
        // Show error message
        // Add error class
        setErrorFor(SteamID, 'Steam ID cannot be blank'); // Blank ID
    } else if(!SteamID(SteamID_Value)) {
        setErrorFor(SteamID, 'Steam ID is invalid') // Incorrect ID
    }
    else if(SteamID_Value != 17) {
        setErrorFor(SteamID, 'Steam ID is invalid') // Incorrect digits
    }
    else {
        // Add success class
        setSuccessFor(SteamID);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Add error message inside small
    small.innerText = message;

    // Add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}