
//  function submitForm() {
//         const bookingForm = document.getElementById("Form");
//         const accountsDiv = document.getElementById("accounts");

//         const formData = new FormData(bookingForm);
//         const appointmentData = {
//             day: formData.get("day"),
//             timeFrame: formData.get("timeFrame"),
//             time: formData.get("time"),
//             massage: formData.get("massage"),
//             facials: formData.get("facials"),
//             handFoot: formData.get("handFoot"),
//             waxing: formData.get("waxing"),
//             terms: formData.get("terms") === "on" ? "Yes" : "No",
//         };

//         const appointmentDiv = document.createElement("div");
//         appointmentDiv.classList.add("appointment-div");

//         const appointmentHTML = `
//             <h3>Appointment Request</h3>
//             <p><strong>Day:</strong> ${appointmentData.day}</p>
//             <p><strong>Time Frame:</strong> ${appointmentData.timeFrame}</p>
//             <p><strong>Time:</strong> ${appointmentData.time}</p>
//             <p><strong>Massage:</strong> ${appointmentData.massage}</p>
//             <p><strong>Facials:</strong> ${appointmentData.facials}</p>
//             <p><strong>Hand & Foot:</strong> ${appointmentData.handFoot}</p>
//             <p><strong>Waxing:</strong> ${appointmentData.waxing}</p>
//             <p><strong>Terms:</strong> ${appointmentData.terms}</p>
//         `;

//         appointmentDiv.innerHTML = appointmentHTML;

//         const editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click", function () {
//             // Implement edit functionality here
//             alert("Edit button clicked");
//         });

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function () {
//             // Remove the appointment div
//             accountsDiv.removeChild(appointmentDiv);
//         });

//         appointmentDiv.appendChild(editButton);
//         appointmentDiv.appendChild(deleteButton);

//         accountsDiv.appendChild(appointmentDiv);

//         bookingForm.reset();
//     }





















// document.addEventListener("DOMContentLoaded", function () {
//     const bookingForm = document.getElementById("Form");
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









