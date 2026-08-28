function checkBirthday() {

    // Example birthday
    // Change this later to Raphea's actual birthday
    const correctBirthday = "2004-08-29";

    const enteredBirthday =
        document.getElementById("birthday").value;

    const result =
        document.getElementById("result");


    // Make sure a date was entered
    if (enteredBirthday === "") {

        result.innerHTML =
            "Please enter your birthday first. ❤️";

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
            ❌ DI MAO BUANG.
            <br>
            Try again, birthday BB girl. ❤️
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
