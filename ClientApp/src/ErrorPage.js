const SteamID = document.getElementById('Steam ID')
const form = document.getElementById('form')
const ErrorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    // ErrorMessage allows to push comments for errors
    let ErrorMessage = []
    
    // If user does not enter anything, an error will generate
    if (SteamID.value === "" || SteamID.value == null) {
        ErrorMessage.push('Steam ID is required')
    }

    // If length of Steam ID is not long enough
    if (SteamID.value.length != 17) {
        ErrorMessage.push('Invalid Steam ID!: Please try again')
    }
    // If Steam ID is a character
    if (SteamID.value.char) {
        ErrorMessage.push('Invalid Steam ID!: Please try again')
    }

    // Detects any errors with Steam ID that is entered
    if (ErrorMessage.length > 0) {
        e.preventDefault()
        ErrorElement.innerText = ErrorMessage.join(',')
    }
})