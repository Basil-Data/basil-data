import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection4Traction () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);



    return (
        <>
            <Paper className="paper" elevation={3}>
                <div className="report"></div>

            </Paper>


        </>
    )
};

export default ReportSection4Traction;