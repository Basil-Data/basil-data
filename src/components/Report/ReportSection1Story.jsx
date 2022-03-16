import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ReportSectionOneStory () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const competitiveAdvantages = useSelector(store => store.reportReducer.competitiveAdvantages)


    const factorArray = [
        {
            id: 1,
            text: 'Patent',
            url1: '/images/CompetitiveAdvantages/patent.png',
        },
        {
            id: 2,
            text: 'Brand License',
            url1: '/images/CompetitiveAdvantages/brandlicense.png',
        },
        {
            id: 3,
            text: 'Regulation',
            url1: '/images/CompetitiveAdvantages/regulation.png',
        },
        {
            id: 4,
            text: 'Trademark',
            url1: '/images/CompetitiveAdvantages/trademark.png',
        },
        {
            id: 5,
            text: 'Copyrights',
            url1: '/images/CompetitiveAdvantages/copyrights.png',
        },
        {
            id: 6,
            text: 'Software',
            url1: '/images/CompetitiveAdvantages/software.png',
        },
        {
            id: 7,
            text: 'Customer Lists',
            url1: '/images/CompetitiveAdvantages/customerlists.png',
        },
        {
            id: 8,
            text: 'Personal Accreditation',
            url1: '/images/CompetitiveAdvantages/personalaccreditation.png',
        },
    ]

    return (
        <Paper className="paper" elevation={3}>
            <div className="reportSectionOne">
                <div className="introParagraph">
                    <h1 className='pageHeader'>01. STORY</h1>
                    <hr className="dotted"></hr>
                    <h4>Introduction:</h4>
                    <p>{enterpriseAnswers.investorIntroduction1 }</p>
                </div>
                <div className="introContainer">
                    <h2>MEET US</h2>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.enterpriseSize1}</h3>
                    <h5>size of enterprise (people)</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.yearsCollectiveExperience1}</h3>
                    <h5>Years of collective experience within the impact problem space</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.percentageBIPOC1}</h3>
                    <h5>Percent of founding team is BIPOC (Black, Indigenous, Person of Color)</h5>
                    <h3 className="numbersSectionOne">{enterpriseAnswers.percentageFemale1}</h3>
                    <h5>Percent of founding team is female</h5>
                </div>
            </div>
            <div className="sectionColor sectionOneColor">
                    <div className="sectionOneText">
                        <h3>OUR MISSION:</h3>
                        <p>"{enterpriseAnswers.missionStatement1}"</p>
                    </div>
                    <div className="sectionOneText competitiveAdvantages">
                        <h3>Competitive Advantages:</h3>
                        <div>
                            <Box sx={{ flexGrow: 1 }}>
                                <div className="competitiveAdvantagesContainer"> 
                                    {factorArray.map(advantage => (
                                        <>
                                            {competitiveAdvantages?.includes(advantage.id)
                                            ? 
                                            <div className="competitiveCard">
                                                <img src={advantage.url1} />
                                                <Typography gutterBottom variant="subtitle2" component="div" align="center">
                                                    {advantage.text}
                                                </Typography>
                                            </div>
                                            :
                                            <></>
                                            }
                                        </>))
                                    }
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
        </Paper>
    )
};

export default ReportSectionOneStory;