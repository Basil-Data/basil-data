import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportTableOfContents () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Paper elevation={3} className="paper">
            <h1>TABLE OF CONTENTS</h1>
            <div className='tableOfContentsContainer'>
                <div className='tableOfContentsColumn'>
                    <h3>01</h3>
                    <h4>Story</h4>
                    <h3>02</h3>
                    <h4>Impact</h4>
                    <h3>03</h3>
                    <h4>Solution</h4>
                    <h3>04</h3>
                    <h4>Traction</h4>
                    <h3>04</h3>
                    <h4>Growth</h4>
                </div>
                <div className='tableOfContentsColumn'>
                    <h3>06</h3>
                    <h4>External Factors</h4>
                    <h3>07</h3>
                    <h4>Impact Risk</h4>
                    <h3>08</h3>
                    <h4>Startup Barriers</h4>
                    <h3>09</h3>
                    <h4>Next Steps</h4>
                </div>
            </div>
        </Paper>
    )
};

export default ReportTableOfContents;