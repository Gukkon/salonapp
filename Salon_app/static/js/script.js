function submitForm() {
    const bookingForm = document.getElementById("Form");
    const accountsDiv = document.getElementById("accounts");

    const formData = new FormData(bookingForm);
    const appointmentData = {
        day: formData.get("day"),
        timeFrame: formData.get("timeFrame"),
        time: formData.get("time"),
        massage: formData.get("massage"),
        facials: formData.get("facials"),
        handFoot: formData.get("handFoot"),
        waxing: formData.get("waxing"),
        terms: formData.get("terms") === "on" ? "Yes" : "No",
    };

    const appointmentDiv = document.createElement("div");
    appointmentDiv.classList.add("appointment-div");

    const appointmentHTML = `
        <h3>Appointment Request</h3>
        <p><strong>Day:</strong> ${appointmentData.day}</p>
        <p><strong>Time Frame:</strong> ${appointmentData.timeFrame}</p>
        <p><strong>Time:</strong> ${appointmentData.time}</p>
        <p><strong>Massage:</strong> ${appointmentData.massage}</p>
        <p><strong>Facials:</strong> ${appointmentData.facials}</p>
        <p><strong>Hand & Foot:</strong> ${appointmentData.handFoot}</p>
        <p><strong>Waxing:</strong> ${appointmentData.waxing}</p>
        <p><strong>Terms:</strong> ${appointmentData.terms}</p>
    `;

    appointmentDiv.innerHTML = appointmentHTML;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        // Implement edit functionality here
        alert("Edit button clicked");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        // Remove the appointment div
        accountsDiv.removeChild(appointmentDiv);
    });

    appointmentDiv.appendChild(editButton);
    appointmentDiv.appendChild(deleteButton);

    accountsDiv.appendChild(appointmentDiv);

    bookingForm.reset();
}






















// document.addEventListener("DOMContentLoaded", function () {
//     const bookingForm = document.getElementById("bkForm");
//     const accountsDiv = document.getElementById("accounts");

//     if (bookingForm && accountsDiv) {
//         bookingForm.addEventListener("submit", function (event) {
//             event.preventDefault();
            
//             const formData = new FormData(bookingForm);
//             const appointmentData = {
//                 day: formData.get("day"),
//                 timeFrame: formData.get("timeFrame"),
//                 time: formData.get("time"),
//                 massage: formData.get("massage"),
//                 facials: formData.get("facials"),
//                 handFoot: formData.get("handFoot"),
//                 waxing: formData.get("waxing"),
//                 terms: formData.get("terms") === "on" ? "Yes" : "No",
//             };

//             // Create a new div to display appointment data
//             const appointmentDiv = document.createElement("div");
//             appointmentDiv.classList.add("appointment-div");

//             // Display appointment data
//             const appointmentHTML = `
//                 <h3>Appointment Request</h3>
//                 <p><strong>Day:</strong> ${appointmentData.day}</p>
//                 <p><strong>Time Frame:</strong> ${appointmentData.timeFrame}</p>
//                 <p><strong>Time:</strong> ${appointmentData.time}</p>
//                 <p><strong>Massage:</strong> ${appointmentData.massage}</p>
//                 <p><strong>Facials:</strong> ${appointmentData.facials}</p>
//                 <p><strong>Hand & Foot:</strong> ${appointmentData.handFoot}</p>
//                 <p><strong>Waxing:</strong> ${appointmentData.waxing}</p>
//                 <p><strong>Terms:</strong> ${appointmentData.terms}</p>
//             `;

//             appointmentDiv.innerHTML = appointmentHTML;

//             // Create Edit and Delete buttons
//             const editButton = document.createElement("button");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", function () {
//                 // Implement edit functionality here
//                 alert("Edit button clicked");
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", function () {
//                 // Remove the appointment div
//                 accountsDiv.removeChild(appointmentDiv);
//             });

//             appointmentDiv.appendChild(editButton);
//             appointmentDiv.appendChild(deleteButton);

//             // Append the new appointment div to the accounts page
//             accountsDiv.appendChild(appointmentDiv);

//             // Clear the form for the next appointment
//             bookingForm.reset();
//         });
//     }
// });









// document.addEventListener("DOMContentLoaded", function () {
//     const bookingForm = document.getElementById("bkForm");
//     const bkSelect = document.getElementById("bk-select");
//     const noBkDiv = document.getElementById("no-bk");

//     if (bkSelect) {
//         bookingForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const formData = new FormData(bookingForm);
//             const appointment = {
//                 day: formData.get("day"),
//                 timeFrame: formData.get("timeFrame"),
//                 time: formData.get("time"),
//                 massage: formData.get("massage"),
//                 facials: formData.get("facials"),
//                 handFoot: formData.get("handFoot"),
//                 waxing: formData.get("waxing"),
//                 terms: formData.get("terms") === "on" ? "Yes" : "No",
//             };

//             // Create a new appointment div
//             const div = document.createElement("div");
//             div.classList.add("Appointment");

//             // Display appointment details
//             const header = document.createElement("h2");
//             header.textContent = "Appointment";
//             div.appendChild(header);

//             const ul = document.createElement("ul");
//             for (const key in appointment) {
//                 const li = document.createElement("li");
//                 li.textContent = `${key}: ${appointment[key]}`;
//                 ul.appendChild(li);
//             }
//             div.appendChild(ul);

//             // Create Edit and Delete buttons
//             const editButton = document.createElement("button");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", function () {
//                 // Handle edit button click event (e.g., open a form for editing)
//                 alert("Edit button clicked");
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", function () {
//                 // Handle delete button click event (e.g., remove the appointment)
//                 bkSelect.removeChild(div);
//                 // Check if there are no more appointments, then show the no-bk div
//                 if (bkSelect.childElementCount === 0) {
//                     noBkDiv.style.display = "block";
//                 }
//             });

//             div.appendChild(editButton);
//             div.appendChild(deleteButton);

//             // Add the new appointment to the "bk-select" div
//             bkSelect.appendChild(div);

//             // Clear the form for the next appointment
//             bookingForm.reset();

//             // Hide the no-bk div
//             noBkDiv.style.display = "none";
//         });
//     }
// });



