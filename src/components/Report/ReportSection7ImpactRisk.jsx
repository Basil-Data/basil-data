import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection7ImpactRisk () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)

    return (
    <>
    <Paper className="paper" elevation={3}>
    <div className="pageContainer">
    <h1 className="heading">07. IMPACT RISK</h1>
    <hr className="dotted dottedMargin"></hr>
    <h2 className="subheading">Anticipated Risks:</h2>
    <div className="sectionColor section6Color">
        <h2 className="subheading">How we have prepared for these risks:</h2>
    </div>
    </div>
    </Paper>
    </>
    )
};

export default ReportSection7ImpactRisk;