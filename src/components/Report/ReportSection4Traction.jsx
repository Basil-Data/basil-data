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
                <div className="reportSectionOne">
                    <div className="pageHeader">
                        <h1>04. TRACTION</h1>
                    </div>
                        
                        <div className="sectionFourIntro">
                        <hr className="dotted"/>
                            <h2>Traction to Date: What stage of development is your PRODUCT in?</h2>
                            
                            <img src={'/images/DevelopmentStage/devStageBar.png'} />

                            <img src={'/images/DevelopmentStage/devStage1.png'} />

                        </div>
                        <div className="introContainer">
                            <h3>SALES AND MARKETING SPENDING</h3>
                            <h3 className="sectionFourNumbers">${enterpriseAnswers.marketingExpenses4}</h3>
                            <h3>CUSTOMERS ACQUIRED IN THAT PERIOD</h3>
                            <h3 className="sectionFourNumbers">{enterpriseAnswers.newCustomers4}</h3>
                            <h3>CAC</h3>
                            <h3 className="sectionFourNumbers">${enterpriseAnswers.customerAcquisitionCost4}</h3>

                        </div>
                </div>
                <div className="sectionColor sectionFourColor">
                    <div className="sectionFourParagraph">
                        <br />
                        <h4>INCOME</h4>
                        <p>Are you generating revenue?</p>
                        <br />
                    </div>
                    
                </div>
            </Paper>
            


        </>
    )
};

export default ReportSection4Traction;