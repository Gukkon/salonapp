function hideDiv() {
    const divToHide = document.getElementById("no-bk");
    if (divToHide) {
        divToHide.style.display = "none";
    }
}

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

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bkForm");
    bookingForm.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // const dayInput = document.querySelector('[name="day"]');
        // const timeFrameInput = document.querySelector('[name="timeFrame"]');
        // const timeInput = document.querySelector('[name="time"]');
        // const massageInput = document.querySelector('[name="massage"]');
        // const facialsInput = document.querySelector('[name="facials"]');
        // const handFootInput = document.querySelector('[name="handFoot"]');
        // const waxingInput = document.querySelector('[name="waxing"]');
        // const termsInput = document.querySelector('[name="terms"]');

        // const formData = {
        //     day: dayInput.getAttribute('value'),
        //     timeFrame: timeFrameInput.getAttribute('value'),
        //     time: timeInput.getAttribute('value'), 
        //     massage: massageInput.getAttribute('value'),
        //     facials: facialsInput.getAttribute('value'),
        //     handFoot: handFootInput.getAttribute('value'),
        //     waxing: waxingInput.getAttribute('value'),
        //     terms: termsInput.getAttribute('value'),
        // };

        // Collect data from form fields by traversing the form's structure
        const formData = {
            day: bookingForm.querySelector('.days').value,
            timeFrame: bookingForm.querySelector('.time-frame').value,
            time: bookingForm.querySelector('.time').value,
            massage: bookingForm.querySelector('.g1').value,
            facials: bookingForm.querySelector('.g1').value,
            handFoot: bookingForm.querySelector('.g2').value,
            waxing: bookingForm.querySelector('.g2').value,
            terms: bookingForm.querySelector('.tc input:checked') ? 'Yes' : 'No',
        };

        console.log('Form Data:', formData);

        // Check if any of the input data is not empty (customize this check)
        // if (
        //     formData.day.trim() !== "" &&
        //     formData.timeFrame.trim() !== "" &&
        //     formData.time.trim() !== ""
        // ) {
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
);



