import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection6ExternalFactors () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)

    return (
        <>
        <Paper className="paper" elevation={3}>
        <div className="pageContainer">
        <h1 className="heading">06. EXTERNAL FACTORS</h1>
        <hr className="dotted dottedMargin"></hr>
        <h2 className="subheading">What factors affect our growth path?</h2>
        <div className="sectionColor section6Color">
            <h2 className="subheading">Explanation:</h2>
        </div>
        </div>
        </Paper>
        </>
    )
};

export default ReportSection6ExternalFactors;