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
            <div className="tableOfContents">
                <h1 className="tocTitle">TABLE OF CONTENTS</h1>
                <hr className="dotted"></hr>
                <div className='tableOfContentsContainer'>
                    <div className='tableOfContentsColumn'>
                        <h3 className='numbersSectionOne'>01</h3>
                        <h4 className='tocText'>Story</h4>
                        <h3 className='numbersSectionOne'>02</h3>
                        <h4 className='tocText'>Impact</h4>
                        <h3 className='numbersSectionOne'>03</h3>
                        <h4 className='tocText'>Solution</h4>
                        <h3 className='numbersSectionOne'>04</h3>
                        <h4 className='tocText'>Traction</h4>
                        <h3 className='numbersSectionOne'>05</h3>
                        <h4 className='tocText'>Growth</h4>
                    </div>
                    <div className='tableOfContentsColumn'>
                        <h3 className='numbersSectionOne'>06</h3>
                        <h4 className='tocText'>External Factors</h4>
                        <h3 className='numbersSectionOne'>07</h3>
                        <h4 className='tocText'>Impact Risk</h4>
                        <h3 className='numbersSectionOne'>08</h3>
                        <h4 className='tocText'>Startup Barriers</h4>
                        <h3 className='numbersSectionOne'>09</h3>
                        <h4 className='tocText'>Next Steps</h4>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default ReportTableOfContents;