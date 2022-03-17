import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// MUI
import Paper from '@mui/material/Paper';

function ReportSection2Impact () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);

    let sdgId;
    switch(enterpriseAnswers.sdg) {
        case "No Poverty":
            sdgId = 1
            break;
        case "Zero Hunger":
            sdgId = 2
            break;
        case "Good Health and Well-being":
            sdgId = 3
            break;
        case "Quality Education":
            sdgId = 4
            break;
        case "Gender Equality":
            sdgId = 5
            break;
        case "Clean Water and Sanitation":
            sdgId = 6
            break;
        case "Affordable and Clean Energy":
            sdgId = 7
            break;
        case "Decent Work and Economic Growth":
            sdgId = 8
            break;
        case "Industry, Innovation and Infrastructure":
            sdgId = 9
            break;
        case "Reduced Inequality":
            sdgId = 10
            break;
        case "Sustainable Cities and Communities":
            sdgId = 11
            break;
        case "Responsible Consumption and Production":
            sdgId = 12
            break;
        case "Climate Action":
            sdgId = 13
            break;
        case "Life Below Water":
            sdgId = 14
            break;
        case "Life on Land":
            sdgId = 15
            break;
        case "Peace, Justice and Strong Institutions":
            sdgId = 16
            break;
        case "Partnerships for the Goals":
            sdgId = 17
            break;
    }

    let secondarySDGImage;
    switch (enterpriseAnswers.secondarySDG2) {
        case "No Poverty":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-01.png"
            break;
        case "Zero Hunger":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-02.png"
            break;
        case "Good Health and Well-being":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-03.png"
            break;
        case "Quality Education":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-04.png"
            break;
        case "Gender Equality":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-05.png"
            break;
        case "Clean Water and Sanitation":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-06.png"
            break;
        case "Affordable and Clean Energy":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-07.png"
            break;
        case "Decent Work and Economic Growth":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-08.png"
            break;
        case "Industry, Innovation and Infrastructure":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-09.png"
            break;
        case "Reduced Inequality":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-10.png"
            break;
        case "Sustainable Cities and Communities":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-11.png"
            break;
        case "Responsible Consumption and Production":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-12.png"
            break;
        case "Climate Action":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-13.png"
            break;
        case "Life Below Water":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-14.png"
            break;
        case "Life on Land":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-15.png"
            break;
        case "Peace, Justice and Strong Institutions":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-16.png"
            break;
        case "Partnerships for the Goals":
            secondarySDGImage = "/images/SDGs/E-WEB-Goal-17.png"
            break;
    }

    return (
        <Paper className="paper" elevation={3}>
                <div className="reportSectionTwo">
                    <div className="problemParagraph">
                        <h1>02. IMPACT</h1>
                        <hr className="dotted"></hr>
                        <h3>The Problem:</h3>
                        <div className="problemText">
                            <p className="problem">{enterpriseAnswers.problemBeingSolved2}</p>
                            <p className="costOfProblem">{enterpriseAnswers.costOfProblem2}</p>
                        </div>
                    </div>
                    <div className="beneficiary">
                        <div className="beneficiaryText">
                            <h4><b>OUR BENEFICIARY:</b></h4>
                            <h5>{enterpriseAnswers.whoBenefits2}</h5>
                        </div>
                        <div className="sdgIcons">
                            <img 
                                className="sdgImage" 
                                width="130px" 
                                height="130px" 
                                src={enterpriseAnswers.icon}
                            />
                            <img 
                                className="secondarySDGImage"
                                width="100px"
                                height="100px"
                                src={secondarySDGImage}
                            />
                        </div>
                    </div>
                    <div className="sectionColor sectionTwoColor">
                        <div className="targetText">
                            <div className="targets">
                                <h4 className="targetsHeading"><b>TARGETS:</b></h4>
                                {enterpriseAnswers.indicatorAnswers?.slice(0, 2).map(answer => {
                                    return(
                                        <div>
                                            <h5 className="sdgTarget">SDG Target {answer.targetNumber}</h5>
                                            <h5>{answer.target}</h5>
                                        </div>   
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div> 
        </Paper>
    )
};

export default ReportSection2Impact;