

// Function to create a new div with the submitted data
function createNewDiv(data) {
    const div = document.createElement("div");
    div.textContent = data;
    return div;
}

function hideDiv() {
    const div = document.getElementById('no-bk');
    if (div) {
        div.style.display = "none";
    }
}


// Function to handle form submission
document.getElementById("bkForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input data from the form
    const formData = new FormData(event.target);
    const inputData = formData.get("inputData");

    if (inputData) {

        hideDiv('no-bk')
        // Create a new div with the submitted data
        const newDiv = createNewDiv(inputData);

        // Append the new div to the container
        document.getElementById("divContainer").appendChild(newDiv);

        // Clear the form input
        event.target.reset();
    }
});


