import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSectionOneStory () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Paper className="paper" elevation={3}>
            <div className="reportSectionOne">
                <div className="introParagraph">
                    <h1>01. STORY</h1>
                    <hr className="dotted"></hr>
                    <h4>Introduction:</h4>
                    <p>Basil Data began with a simple goal of helping social enterprises
                    meaningfully analyze and understand their impact. Initial workshops
                    and consulting services uncovered a fundamental problem: In the
                    ecosystem of social enterprises and their stakeholders, there is a
                    confounding lack of impact data. Effective impact measurement is rare
                    because entrepreneurs - despite their talent, ambition, and vision - too
                    often lack the skills, standards, and systems to capture the data needed
                    for understanding real impact.</p>
                    <p>The rise of the ESG and Impact Investing sectors has been incredible. At
                    Basil Data, we believe we can play an important role in furthering this
                    progress to make sure we create sustainable and lasting impact by
                    focusing on early-stage social enterprises. Diversity and Equity,
                    Authenticity, and Curiosity are some of the core values we hold dear
                    which can be seen in the makeup and drive of our closely knit team.</p>
                </div>
                <div className="introContainer">
                    <h2>MEET US</h2>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.enterpriseSize1}</h3>
                    <h5>size of enterprise (people)</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.yearsCollectiveExperience1}</h3>
                    <h5>Years of collective experience within the impact problem space</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.percentageBIPOC1}</h3>
                    <h5>Percent of founding team is BIPOC (Black, Indigenous, Person of Color)</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.percentageFemale1}</h3>
                    <h5>Percent of founding team is female</h5>
                </div>
                <div className="sectionColor sectionOneColor">
                    <div className="sectionOneText">
                        <h3>OUR MISSION:</h3>
                        <p>"{enterpriseAnswers.missionStatement1}"</p>
                    </div>
                    <div className="sectionOneText">
                        <h3>Competitive Advantages:</h3>
                        <ul  className="list">
                            {enterpriseAnswers.competitiveAdvantages ? 
                                enterpriseAnswers.competitiveAdvantages.map(advantage =>
                                <li key={advantage}>{advantage}</li>
                                )
                                :
                                <></>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default ReportSectionOneStory;