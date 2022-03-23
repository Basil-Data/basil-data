
# Basil Data

*Project Duration: 2 Week Sprint*

Basil Data is a web application that streamlines the process of generating a report based on form inputs.  Where Basil Data, the company, used to use Google Forms and Google Slides to take in information and generate reports, this app buys back valuable time by automating the process.  Basil Data's clients would register their enterprise to create an account.  Then they would be prompted through a series of forms that make up the questionnaire.  Upon completing the forms, a report is accessible that translates all of the data provided by the client into a report that can be viewed in the browser or saved / printed as a PDF.  There are also parts of the questionnaire that don't go into the report but allow Basil Data and their clients to share information that supports their relationship and leads to growth for the socially impactful enterprise.

<!-- Live Version deployed on Heroku at: [https://skillsense.herokuapp.com/](https://skillsense.herokuapp.com/) -->

## Screenshot

## Prerequisites

Before getting started working with this application, you should have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Database Setup

Make a new database called `basil_data` in PostgreSQL and use the **database.sql** file in the root of this project to set up all of your tables.

## Installation

1. Run `npm install`
2. Start Postgres using `brew services start postgresql`
    - only required if PG is not already running
3. Open a terminal and run `npm run server`
4. Open another terminal and run `npm run client`
5. This should open a new tab in your browser at `localhost:3000`

## How to Use Basil Data

- A new user to Basil Data will register an account for their enterprise.
<!--     - Subsequent logins will require email and password.
- After logging in, a user will be brought to their profile page where all of their personal information can be updated. Students/Mentors may also add skill tags to their profile to reflect their abilities. These will aid in the application process as well as for helping Students find Mentors with a particular specialization.
- **Students on SkillSense:**
    - Search for available Mentors by name or skill in **Mentor Search**. View a selected Mentor's public profile and send a request to connect to open the possibility of working on future projects together.
    - *Active* and *Invited* Mentors can be viewed in **My Mentorships**.
    - Freelance work can be found by searching project title or skills in **Job Search**. Selecting details for any job in the search results will open a page displaying important information such as: project title, position, client, location, duration, budget, a description for the job, and desired skills.
    - Apply for jobs by providing Clients with a cover letter, resume, and selected Mentor to work with.
    - Track *Active*, *Applied*, and *Completed* projects in **My Jobs**, with the ability to review job details.
- **Mentors on SkillSense:**
    - View active Mentorships and pending Invites to connect with Students in **My Mentorships*. Mentors can view details from a Student's public profile and monitor all jobs (active, applied, completed) that they are teamed up on. Access to view details for those jobs is available from this page.
- **Clients on SkillSense:**
    - Track *Active*, *Completed*, and projects *Pending Hire* in **My Jobs**. Details for all of a Client's posted jobs are available for review. In the details page for a selected job, a Client can view their current hire or their current applicants — and hire an applicant once they've made a decision. Applicant details will include information both from the Student's profile as well as the Mentor they've requested for that project.
    - In **Post New Job**, Clients can create a new project listing for work they're looking to have completed by Students on SkillSense. Clients will provide a project title, position, duration and budget, a description of what they're looking to have accomplished, and desired skills.
- **Messaging on SkillSense:**
    - All users have access to a **Messages** center where they can communicate with individuals they've connected with on the application, whether it be Student, Mentor, or Client. Users must be connected on a project or through a Mentorship before they can send messages back and forth.
    - Requesting a Mentor will automatically prompt Students to send a custom message with their invitation.
    - A *Send Message* option to start a conversation will be available on the public profile of all connected users and on the job details for an active assignment. -->

## Built With

This application uses the following technologies:

- [React](https://reactjs.org/)
- [Redux](https://maven.apache.org/)
- [Redux-Sagas](https://redux-saga.js.org/)
- [Express](https://expressjs.com/)
- [Passport](http://www.passportjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Material-UI](https://material-ui.com/)
- [Moment.js](https://momentjs.com/)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [Passport.js](https://www.passportjs.org/)

(a full list of dependencies can be found in `package.json`)

## Acknowledgements

- First and foremost, we would like to dedicate this project to Jeff Montanez Jones + Andy Jackson: the two individuals who are working to make the world a better place at Basil Data. They have ambitious goals for this application, and we're proud to have laid down the initial groundwork for them to build on in the future.
- We would like to thank [Prime Digital Academy](https://github.com/PrimeAcademy) for allowing us the opportunity to put our acquired skills into action by connecting us with a real-world client with an extraordinary vision.
- A very special thanks to our instructor, Edan Schwartz, for providing us with the tools and knowledge to build this application. His instruction has been invaluable in leading us down the road to successful careers as software developers.

## Support

For any questions, concerns, or suggestions feels free to contact any of the developers behind this project:
- [Aaron Rogers](https://github.com/dmheisel) -- rogers.aaron.r@gmail.com
- [Andre Manchanthasouk](https://github.com/dremanchan) -- dremanchan@gmail.com
- [Sabrina Ciaciura](https://github.com/ciaci0028) -- ciaci0028@gmail.com
- [Jeremy Cady](https://github.com/jeremy-cady) -- jcady90@icloud.com
