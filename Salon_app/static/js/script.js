

function createNewDiv(title, data) {
    const div = document.createElement("div");

    // Create a header for the title
    const header = document.createElement("h2");
    header.textContent = title;
    div.appendChild(header);

    // Create an unordered list
    const ul = document.createElement("ul");

    // Iterate through the data and create list items
    for (const item of data) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    }

    // Append the unordered list to the div
    div.appendChild(ul);

    // Create Edit and Delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        // Handle the edit button click event here
        // You can open a form or perform any edit-related action
        alert("Edit button clicked");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        // Handle the delete button click event here
        // You can prompt the user for confirmation and delete the data if confirmed
        alert("Delete button clicked");
    });

    // Append the buttons to the div
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    // Append the new div to the 'bk-select' parent div
    document.getElementById("bk-select").appendChild(div);
}
// document.addEventListener("DOMContentLoaded", function () {

//     // Add a form submission event listener
//     const bookingForm = document.getElementById("bkForm");
//     bookingForm.addEventListener("submit", handleSubmit);

//     // Function to handle form submission
//     function handleSubmit(event) {
//         event.preventDefault(); // Prevent the form from submitting traditionally

//         // Get the input data from the form inputs (replace 'inputFieldId' with actual IDs)
//         const day = document.getElementById("day").value;
//         const timeFrame = document.getElementById("timeFrame").value;
//         const time = document.getElementById("time").value;
//         const massage = document.getElementById("massage").value;
//         const facials = document.getElementById("facials").value;
//         const handFoot = document.getElementById("handFoot").value;
//         const waxing = document.getElementById("waxing").value;
//         const terms = document.getElementById("terms").value;

//         // Check if any of the input data is not empty (you can customize this check)
//         if (day.trim() !== "" && timeFrame.trim() !== "" /* add more conditions as needed */) {
//             // Create an array with the data you want to display
//             const formData = [
//                 `Day: ${day}`,
//                 `Time Frame: ${timeFrame}`,
//                 `Time: ${time}`,
//                 `Massage: ${massage}`,
//                 `Facials: ${facials}`,
//                 `Manicure/Pedicure: ${handFoot}`,
//                 `Waxing: ${waxing}`,
//                 `Terms: ${terms}`,
//             ];

//             // Call the functions to create a new div and hide the 'no-bk' div
//             createNewDiv("Treatment Details", formData);
//             hideDiv();
//         }
//     }
    
// });

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bkForm");
    bookingForm.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Collect data from form fields by traversing the form's structure
        const formData = {
            day: bookingForm.querySelector('.days input').value,
            timeFrame: bookingForm.querySelector('.time-frame input').value,
            time: bookingForm.querySelector('.time input').value,
            massage: bookingForm.querySelector('.g1 input').value,
            facials: bookingForm.querySelector('.g1 input').value,
            handFoot: bookingForm.querySelector('.g2 input').value,
            waxing: bookingForm.querySelector('.g2 input').value,
            terms: bookingForm.querySelector('.tc input:checked') ? 'Yes' : 'No',
        };

        // Check if any of the input data is not empty (customize this check)
        if (
            formData.day.trim() !== "" &&
            formData.timeFrame.trim() !== "" &&
            formData.time.trim() !== ""
        ) {
            // Create an array with the data you want to display
            const treatmentData = [
                `Day: ${formData.day}`,
                `Time Frame: ${formData.timeFrame}`,
                `Time: ${formData.time}`,
                `Massage: ${formData.massage}`,
                `Facials: ${formData.facials}`,
                `Hand & Foot: ${formData.handFoot}`,
                `Waxing: ${formData.waxing}`,
                `Terms: ${formData.terms}`,
            ];

            // Call the functions to create a new div and hide the 'no-bk' div
            createNewDiv("Treatment Details", treatmentData);
            hideDiv();
        }
    }
});



