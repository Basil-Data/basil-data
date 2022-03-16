import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const factorArray = [
    {
        id: 1,
        text: 'Seasonal Trends',
        url1: '/images/externalFactors/seasonaltrends1.png',
        url2: '/images/externalFactors/seasonaltrends2.png'
    },
    {
        id: 2,
        text: 'Close Proximity to Industry Trends',
        url1: '/images/externalFactors/closeproximitytoindustrytrends1.png',
        url2: '/images/externalFactors/closeproximitytoindustrytrends2.png'
    },
    {
        id: 3,
        text: 'Commodity Price / Availability Fluctuations',
        url1: '/images/externalFactors/commodityprice1.png',
        url2: '/images/externalFactors/commodityprice2.png'
    },
    {
        id: 4,
        text: 'Economic Cycle',
        url1: '/images/externalFactors/economiccycle1.png',
        url2: '/images/externalFactors/economiccycle2.png'
    },
    {
        id: 5,
        text: 'Competition',
        url1: '/images/externalFactors/competition1.png',
        url2: '/images/externalFactors/competition2.png'
    },
    {
        id: 6,
        text: 'Laws and Regulations',
        url1: '/images/externalFactors/lawsandregulations1.png',
        url2: '/images/externalFactors/lawsandregulations2.png'
    },
    {
        id: 7,
        text: 'Customer Tastes and Preferences',
        url1: '/images/externalFactors/customertastesandpreferences1.png',
        url2: '/images/externalFactors/customertastesandpreferences2.png'
    },
    {
        id: 8,
        text: 'Natural Disasters',
        url1: '/images/externalFactors/naturaldisasters1.png',
        url2: '/images/externalFactors/naturaldisasters2.png'
    },
    {
        id: 9,
        text: 'Technological Evolution',
        url1: '/images/externalFactors/technologicalevolution1.png',
        url2: '/images/externalFactors/technologicalevolution2.png'
    },
    {
        id: 10,
        text: 'International and Foreign Exchange Markets',
        url1: '/images/externalFactors/internationalmarketsandforeignexchangemarkets1.png',
        url2: '/images/externalFactors/internationalmarketsandforeignexchangemarkets2.png'
    },
    {
        id: 11,
        text: 'Political/Social Momentum',
        url1: '/images/externalFactors/politicalsocialmomentum1.png',
        url2: '/images/externalFactors/politicalsocialmomentum2.png'
    },
]

function ReportSection6ExternalFactors () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const selectedFactors = useSelector((store) => store.reportReducer.growthFactors);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ 
            type: "FETCH_ENTERPRISE_SECTION_SIX",
            payload: selectedEnterprise
        })
    }, []);

    return (
        <>
        <Paper className="paper" elevation={3}>
        <div className="pageContainer">
        <h1 className="heading">06. EXTERNAL FACTORS</h1>
        <hr className="dotted dottedMargin"></hr>
        <h2 className="subheading">What factors affect our growth path?</h2>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ sm: 8 }} sx={{justifyContent: 'center'}}>
            {factorArray.map(factor => (
                <Grid item sm={2} key={factor.id}>
                <Card raised="true" sx={{ height: 175, justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    className="media"
                    image={selectedFactors?.includes(factor.id) ? factor.url1 : factor.url2}
                    alt={factor.text}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div" align="center">
                        {factor.text}
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Box>
        <div className="sectionColor section6Color">
            <Typography variant="h5" className="subheading" gutterBottom>Explanation:</Typography>
            <Typography variant="subtitle1" className="subheading" gutterBottom>{enterpriseAnswers.externalGrowth6}</Typography>
        </div>
        </div>
        </Paper>
        </>
    )
};

export default ReportSection6ExternalFactors;