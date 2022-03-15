import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// MUI
import Paper from '@mui/material/Paper';

function ReportSection2ImpactOpportunity () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Paper className="paper" elevation={3}>
            <div className="reportSectionTwo">
                <div className="solutionParagraph">
                    <h1>02. IMPACT OPPORTUNITY</h1>
                    <hr className="dotted"></hr>
                    <h3>Proposed Solution:</h3>
                    <div className="solutionText">
                        <p className="solution">{enterpriseAnswers.howTheySolve2}</p>
                    </div>
                </div>
                <div className="sectionColor sectionTwoColor">
                    <div className="targetLocations">
                        <h3><b>Our Target Location(s):</b></h3>
                        <h5>{enterpriseAnswers.focusedEfforts2}</h5>
                    </div>
                </div>
                <div className="outcomesSection">
                    <div className="outcomes">
                        <h3><b>OUTCOMES:</b></h3>
                        <p>{enterpriseAnswers.specificChanges2}</p>
                    </div>
                    <div className="efficacy">
                        <h3><b>EFFICACY</b></h3>
                        {enterpriseAnswers.supportiveCharacteristics?.map(characteristic => {
                            return(
                                <p>- {characteristic}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default ReportSection2ImpactOpportunity;