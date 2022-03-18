import { react } from 'react';
import { Link } from 'react-router-dom';
import '../Questionnaire/Questionnaire.css';

function Instructions() {

    return(
        <>
            <div>
                
                    <h2>Instructions:</h2>
                    <br />
                <p>
                    You will be filling out a form with several sections.
                    <br />
                    <br />
                    All form fields are required to be filled.
                    <br />
                    <br />
                    If you are unsure about an answer you can input something temporarily
                    <br />
                    <br />
                    You may return to any section to edit any answer at a later time.
                    <br />
                    <br />
                    You can schedule a meeting with Basil-Data if you require assistance in filling out the form.
                    <br />
                    <br />

                </p>

                <button className="btn calendarButton" href='https://calendly.com/basil-data/45min' target='_blank'>
                    Schedule a Meeting with Basil-Data 
                </button>
            </div>
        </>
    )
}

export default Instructions;