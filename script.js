function checkBirthday() {

    // Example birthday
    // Change this later to Raphea's actual birthday
    const correctBirthday = "2005-08-29";

    const enteredBirthday =
        document.getElementById("birthday").value;

    const result =
        document.getElementById("result");


    // Make sure a date was entered
    if (enteredBirthday === "") {

        result.innerHTML =
            "Enter your birthday first bebe girl. ❤️";

        return;
    }


    // Check the birthday
    if (enteredBirthday === correctBirthday) {

        result.innerHTML =
            "🎉 Correct! 🎉";

        // Wait a moment before showing celebration
        setTimeout(function () {

            document
                .getElementById("birthdayScreen")
                .classList.add("hidden");

            document
                .getElementById("celebrationScreen")
                .classList.remove("hidden");

        }, 1000);


    } else {

        result.innerHTML = `
            ❌ PATAY WRONG KA MA BENJOTAN GYUD KA.
            <br>
            Try again, BB girl. ❤️
        `;

    }
}


/* Continue to the letter */

function continueToLetter() {

    document
        .getElementById("celebrationScreen")
        .classList.add("hidden");

    document
        .getElementById("letterScreen")
        .classList.remove("hidden");

}


/* Open the letter */

function openLetter() {

    const letter =
        document.getElementById("letterContent");

    letter.classList.remove("hidden");

}
