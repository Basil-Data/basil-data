import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';


// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection9NextSteps () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const investmentVehicles = useSelector(store => store.reportReducer.investmentVehicles);

    function commafy(num) {
    let str = num.toString().split(".");
    if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 3) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
    }

    return (
        <>
        <Paper className="paper" elevation={3}>
        <div className="section9Background pageContainer">
        <h1 className="pageHeader">09. NEXT STEPS</h1>
        <hr className="dotted dottedMargin9"></hr>

        <div>
        <h3 className="subheading">We are currently raising...</h3>
        <h2 className="subheading">${commafy(enterpriseAnswers.targetAmount7)}</h2>
        {investmentVehicles.length > 1 
        ?
        <h3 className="subheading">Funding Instruments: {investmentVehicles.map((vehicle, index) => {
            return(
                <h3 key={index}>{vehicle} {index < investmentVehicles.length - 1 ? ", " : ""}</h3>
            );
        })}
        </h3>
        :
        <h3 className="subheading">Funding Instrument:</h3>
        }
        </div>

        <div className="sectionColor">
            <h2>Our plan for this round:</h2>
            <ul>
                {fundingUse?.map(use =>
                    <li><h3>{use}</h3></li>
                )}
            </ul>
            <h2>
                Our next steps toward our goal:
                <h3>{enterpriseAnswers.nextSteps}</h3>
            </h2>
        </div>

        <div>
            <img src={user.logoUrl} height={120}/>
        </div>

        </div>
        </Paper>
        </>
    )
};

export default ReportSection9NextSteps;