
# Basil Data

*Project Duration: 2 Week Sprint*

Basil Data is a web application that streamlines the process of generating a report based on form inputs.  Where Basil Data, the company, used to use Google Forms and Google Slides to take in information and generate reports, this app buys back valuable time by automating the process.  Basil Data's clients would register their enterprise to create an account.  Then they would be prompted through a series of forms that make up the questionnaire.  Upon completing the forms, a report is accessible that translates all of the data provided by the client into a report that can be viewed in the browser or saved / printed as a PDF.  There are also parts of the questionnaire that don't go into the report but allow Basil Data and their clients to share information that supports their relationship and leads to growth for the socially impactful enterprise.

<!-- Live Version deployed on Heroku at: [https://skillsense.herokuapp.com/](https://skillsense.herokuapp.com/) -->

## Screenshots

![2022-03-24 15 21 24](https://user-images.githubusercontent.com/87159469/160003399-b4fe6373-884c-40b2-8601-f4e41a091b2d.gif)
![2022-03-24 15 22 04](https://user-images.githubusercontent.com/87159469/160003423-1bdce19e-99b8-4981-9cc1-e75a280e54c9.gif)

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

## Technical Details

### Report PDF
- In the report page, the report can be printed as a PDF, which is accomplished in the code by having separate CSS styling.
- To find this code, view PRINT VIEW code starting on line 717 of src/components/Report/Report.css.
- The limitations to this at the current moment are the fact that there are some margin issues, causing extraneous pages to exist. This could be fixed by adjusting page margin and padding.

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
