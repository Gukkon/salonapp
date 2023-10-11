
document.addEventListener("DOMContentLoaded", function () {
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
    document.getElementById("bkselect").appendChild(div);
}

    const bookingForm = document.getElementById("bkForm");
    bookingForm.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const formData = {
            day: bookingForm.querySelector('[name="day"]').value,
            timeFrame: bookingForm.querySelector('[name="timeFrame"]').value,
            time: bookingForm.querySelector('[name="time"]').value,
            massage: bookingForm.querySelector('[name="massage"]').value,
            facials: bookingForm.querySelector('[name="facials"]').value,
            handFoot: bookingForm.querySelector('[name="handFoot"]').value,
            waxing: bookingForm.querySelector('[name="waxing"]').value,
            terms: bookingForm.querySelector('[name="terms"]:checked') ? 'Yes' : 'No',
        };

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
        // const formData = {
        //     day: bookingForm.querySelector('.days').value,
        //     timeFrame: bookingForm.querySelector('.time-frame').value,
        //     time: bookingForm.querySelector('.time').value,
        //     massage: bookingForm.querySelector('.g1').value,
        //     facials: bookingForm.querySelector('.g1').value,
        //     handFoot: bookingForm.querySelector('.g2').value,
        //     waxing: bookingForm.querySelector('.g2').value,
        //     terms: bookingForm.querySelector('.tc input:checked') ? 'Yes' : 'No',
        // };

        console.log('Form Data:', formData);

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
            hideDiv();} 
        }
});


// // Dont know anymore!!!!

    
// document.addEventListener("DOMContentLoaded", function () {
//     const bookingForm = document.getElementById("bkForm");
//     const addAppointmentButton = document.getElementById("addAppointment");
//     const appointmentList = document.getElementById("bk-select");
//     const noBkDiv = document.getElementById("no-bk");
//     let appointmentCounter = 1;

//     addAppointmentButton.addEventListener("click", function () {
//         const dayInput = bookingForm.querySelector('.days input').value;
//         const timeFrameInput = bookingForm.querySelector('.time-frame input').value;
//         const timeInput = bookingForm.querySelector('.time input').value;
//         const massageInput = bookingForm.querySelector('.g1 input').value;
//         const facialsInput = bookingForm.querySelector('.g1 input').value;
//         const handFootInput = bookingForm.querySelector('.g2 input').value;
//         const waxingInput = bookingForm.querySelector('.g2 input').value;
//         const termsInput = bookingForm.querySelector('.tc input:checked') ? 'Yes' : 'No';

//         if (dayInput && timeFrameInput && timeInput) {
//             // Create a new div for the appointment
//             const appointmentDiv = document.createElement("div");
//             appointmentDiv.className = "appointment";

//             // Header for the appointment
//             const header = document.createElement("h3");
//             header.textContent = "Appointment " + appointmentCounter;
//             appointmentCounter++;

//             // Display treatment details
//             const treatmentData = [
//                 `Day: ${dayInput}`,
//                 `Time Frame: ${timeFrameInput}`,
//                 `Time: ${timeInput}`,
//                 `Massage: ${massageInput}`,
//                 `Facials: ${facialsInput}`,
//                 `Hand & Foot: ${handFootInput}`,
//                 `Waxing: ${waxingInput}`,
//                 `Terms: ${termsInput}`,
//             ];

//             // Create an unordered list for the treatment details
//             const ul = document.createElement("ul");
//             treatmentData.forEach((item) => {
//                 const li = document.createElement("li");
//                 li.textContent = item;
//                 ul.appendChild(li);
//             });

//             // Edit and Delete buttons
//             const editButton = document.createElement("button");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", function () {
//                 // Handle edit appointment here (You can open a form or perform edit-related actions)
//                 alert("Edit button clicked");
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", function () {
//                 // Handle delete appointment here (You can prompt the user for confirmation and delete the data if confirmed)
//                 appointmentList.removeChild(appointmentDiv); // Remove the current appointment
//             });

//             // Append elements to the appointment div
//             appointmentDiv.appendChild(header);
//             appointmentDiv.appendChild(ul);
//             appointmentDiv.appendChild(editButton);
//             appointmentDiv.appendChild(deleteButton);

//             // Add the new appointment to the list
//             appointmentList.appendChild(appointmentDiv);

//             // Clear the form inputs
//             bookingForm.reset();

//             // Show the appointment list and hide the "No appointments booked" message
//             noBkDiv.style.display = "none";
//         }
//     });
// });