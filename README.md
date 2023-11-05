# The Personal Salon App

 This web application has been created so that clients can book their treatments on any particular day and time they want. 

 [View the live project here](https://)

 ## Contents
 
1. [User Experience](#user-experience)
2. [Design](#design)
3. [Features](#features)
4. [Accessibility](#accessibility)
5. [Technologies Used](#technologies-used)
6. [Deployment and Local Development](#deployment-and-local-development)
7. [Testing](#testing)
8. [Credits](#credits)

## User Experience

### The Idea
The objective of this app is to give the client an easy way to book treatments in the palm of their hands whilst they stay at the spa. 

#### Site details include
* Account registration page to sign up upon arrival
* Login page to log into the application
* Their own account page with personal details and information about their treatments
* Booking form where clients can book treatments at the spa
* Ability to edit and delete appointments on the account page with a click of a button
* Log out button to log out of current session within the application

#### Client Goals

* To be able to view the site on a range of device sizes
* To be able to log in anywhere within the spa and book appointments with their chosen day, time, time of day and treatment type
* To edit the appointment if needed
* To delete appointment if needed

#### First Time Visitor Goals

* Sign up
* Book treatments whilst at the spa

#### Returning Visitor Goals 

* Sign in
* Edit or delete treatments 

## Design

### Early Design Phases / Wireframes
The Wireframes were made via  [Paint.net]

(Add wireframes with explaination)

### Colour scheme

### Typography
I wanted a plain and simple font so it was easy to read. Google Fonts was used to import a couple of fonts that I used and they were:

* cormorant-garamond - Used for all main text
* Tangerine - Used on the home page for a fancier look to the heading

### Database Schema

ADD A DATABASE SCHEMA

## Features

The website is made up of 9 pages:

* Log In
* Registration
* Account Dashboard
* Booking Form Page
* Edit Booking Form (Change of Appointments)
* Error Pages


### The Log In page

The index page has the following features:

If the user is not signed in, they will see the following buttons:

   * Log in button, which takes the user to the log in page

   ![Add plant button]()

   * Register button, which takes the user to the registration page

   ![Add plant button]()

If the user is signed in, they will see the following buttons:

   * Add button, which takes the user to the "Add Plant" page.

   ![Add plant button]()

   * View your plants button, which takes the user to their plants page. 

   ![View your plants button]()

### Register

The registration page has the following features:

* A form that takes the users name, username, email address and password, and sends this to the database. 

   ![User form]()

* The password is hidden from view and confirmed using two password fields. 

   ![Password fields]()

* Form validation is set up for all fields. This appears if the user leaves any fields blank, or if their passwords do not match.

   ![Form validation]()

* Button to submit the form. When the form is submitted, this creates a user account, and takes the user to the login page.

   ![Submit button]()

* A flash message appears on the next page when the user has created a new account successfully. 

   ![Flash message]()

### Log in

The log in page has the following features:

* A form that takes the users username and password and compares these to those stored in the database to verify the users identify. 

   ![Login form]()

* Form validation is set up for all fields. This appears if the user leaves any fields blank. 

   ![Login form vaidation]()

* Button to submit the form. When the form is submitted, this authenticates the user, and takes them to their plants page.

   ![Submit button]()

* A flash message appears on the next page when the user has logged in successfully. 

   ![Flash message]()

### My plants 

This page has the following features:

* A button that takes you to the Add Plant page

   ![Add plant button]()

* Self populating plant divs that pull your saved plants data from the database and displays them. These are automatically ordered by the date the plants next need to be watered, so that the plants most in need of watering are at the top. Plants that need watering also have red text to alert the user. The tense of the text also changes depending on whether you needed to have watered the plants in the past, need to water them today, or if you need to water them in the future.

   ![Self populating plant divs]()

* Each plant has its own set of buttons which will perform actions on that particular plant:

   * The "see more" button takes the use to a page dedicated to that particular plant, where they will be able to see the plant's notes.

      ![See more button]()
   
   * The edit button takes the user to a page where they can edit the details of the plant.

      ![Edit plant button]()
   
   * The "delete" button displays a modal which confirms that the user would like to delete the plant in question.

      ![Delete plant button]()
      
* The delete modal confirms with the user that they would like to delete their plant

   ![Delete modal]()

   This modal has two buttons.

   * One button will hide the modal

      ![Close modal button]()

   * The other button will delete the plant and then hide the modal

      ![Delete button]()

### Add plant

This page has the following features:

* A form to add a new plant to the database. It asks the user for these details of the plant - Common Name / Latin Name / Watering Interval / Date Last Watered / Notes.

   ![Add plant form]()

   This form includes:

   * Validation warnings when required fields (Common Name, Latin Name, Watering Interval and Date Last Watered) are not completed. Form validation also alerts the user if they type in a watering interval that is less than 1, or type in a last watered date that is in the past. 

      ![Form validation]()

   * A notes section with a variety of different formatting abilities
   
      ![Notes formatting options]()

   * A back button that takes the user to their "My Plants" page

      ![Back button]()

   * A submit button that submits the form data to the database and redirects the user to their "My Plants" page. 

      ![Submit button]()
   
   * Tooltips that appear when the user hovers their mouse over each field label. (They do not appear all at the same time. The below is meant as a quick visual reference only.) 

      ![Tooltips]()

      ![Tooltips]()

   * A flash message that appear on the page after the user has successfully added a plant

      ![Flash message]()

### Plant profile

This page has the following features:

* A div that contains all the information of the plant that the user previously selected. This includes the watering text appearing red if the user needs to water their plant.

   ![Plant profile]() 

   * Edit button, which takes the user to the plant edit page.

      ![Edit button]()

   * Back button, which takes the user to my plants page. 

      ![Back button]()

   * Delete button, which triggers the delete modal.

      ![Delete button]()

   * Delete modal, which confirms that the user would like to delete the plant. 

      ![Delete modal]()

      * This modal has the following features:

         * Delete button, which will delete the plant and return the user to the My Plants page. 

            ![Delete button]()
         
         * Close button, which will close the delete modal without deleting the plant. 

            ![Close modal button]()

### Edit plants

This page has the following features:

* A pre-populated form containing all the details of the plant the user would like to edit. 

   ![Edit plant form]()

   This form includes:

   * The same validation that has been previously mentioned for the Add Plant page. 

      ![Form validation]()
   
   * Back button, which takes the user back to the My Plants page. 

      ![Back button]()

   * Save button, which saves the edited data to the database, and returns the user to the plant profile page. 

      ![Save button]()
   
   * Tooltips that appear when the user hovers their mouse over each field label. (They do not appear all at the same time. The below is meant as a quick visual reference only.) 

      ![Tooltips]()

      ![Tooltips]()

   * A flash message that appear on the page after the user has successfully added a plant

      ![Flash message]()

### Account dashboard

This page has the following features:

* The details that the user added during registration, apart from their password. 

   ![User details]()

* Edit button, which takes users to the edit account page. 

   ![Edit button]()

* Delete button, which opens a delete modal.

   ![Delete button]()

* Delete modal, which confirms with the user that they want to delete their account.

   ![Delete user modal]()

   This modal has the following features:

   * Delete button, which triggers the deleting of the user, and all the plants associated with them. Then redirects them to the registration page. 

      ![Delete button]()

   * Close button, which closes the modal without deleting the user account. 

      ![Close modal]()

### Edit account

This page has the following features:

* Pre-populated information about the user. 

   ![Edit user form](Salon_app/static/images/showcaseimg.jpg))

* Validation alerts that require the user to make sure all fields are filled in.

   ![Edit user form]()

* Save button, which saves the updated user information, and redirects the user to their account.

   ![Submit button]()

* Delete button, which triggers the delete modal.

   ![Delete button]()

* Delete modal, which confirms with the user that they want to delete their account.

   ![Delete user modal]()

   This modal has the following features:

   * Delete button, which triggers the deleting of the user, and all the plants associated with them. Then redirects them to the registration page. 

      ![Delete button]()

   * Close button, which closes the modal without deleting the user account. 

      ![Close modal]()

* Flash message on the next page to let the user know that they have successfully updated an account.

   ![Flash message]()

### 404 page

This page has the following features:

* Information to show the user that the page they were looking for was not found.

   ![404]()

### All pages have the following features

This page has the following features:

* Navigation bar, which turns into a hamburger menu on narrower screens. The links included go to the register, login, add a plant and my plants pages. Clicking on "Plant Planner" of the calendar plant icon will also take the user to the home page.

   ![Navbar]()

   ![Narrow Navbar]()

* Footer, which includes working buttons to the home pages of Instagram, twitter, and Facebook.

   ![Footer]()

* Page title and information section, which changes depending on which page the user is on. 

   ![Page title and information]()
