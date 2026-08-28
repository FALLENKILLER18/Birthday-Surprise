function checkBirthday() {

    // CHANGE THIS LATER TO HER BIRTHDAY
    const correctBirthday = "2004-08-29";

    // Get the birthday entered by the user
    const enteredBirthday = document.getElementById("birthday").value;

    const result = document.getElementById("result");

    // Check if the birthday is correct
    if (enteredBirthday === correctBirthday) {

        result.innerHTML = `
            🎉 It's your birthday! 🎉
            <br><br>
            I have a little surprise waiting for you... ❤️
            <br><br>
            <button onclick="continueToSurprise()">
                CONTINUE ❤️
            </button>
        `;

    } else {

        result.innerHTML = `
            ❌ Hmm... that's not the date I'm looking for.
            <br>
            Try again ❤️
        `;

    }
}


function continueToSurprise() {

    alert("Our birthday surprise is coming soon! ❤️");

}
