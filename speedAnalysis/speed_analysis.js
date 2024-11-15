let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
let button = document.getElementById("btn");
let resetButton = document.getElementById("reset");

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;
    var userTypedTextLen = userTypedText.length

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Total Length: " + userTypedTextLen + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button

    button.innerHTML = "Start Test";
    button.onclick = startTest;
    button.disabled = true;
    resetButton.disabled = false;
}

function reset() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    document.getElementById("inputText").value = "";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    // Enable reset button
    resetButton.disabled = true;
    button.disabled = false;

}