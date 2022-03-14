import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// MUI
import Paper from '@mui/material/Paper'

function ReportSection2Impact () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)
    console.log("answers:", enterpriseAnswers.problemBeingSolved2);

    return (
        <Paper className="paper" elevation={3}>
            <div className="reportSectionTwo">
                <div className="problemParagraph">
                    <h1>02. IMPACT</h1>
                    <hr className="dotted"></hr>
                    <h4>The Problem:</h4>
                    <div className="problemText">
                        <p className="problem">{enterpriseAnswers.problemBeingSolved2}</p>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default ReportSection2Impact;