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

function ReportSection8StartupBarriers () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const startupBarriers = useSelector((store) => store.reportReducer.startupBarriers);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    const barriersArray = [
        {
            id: 1,
            text: 'Capital Requirements',
            url1: '/images/startupBarriers/capitalrequirements1.png',
            url2: '/images/startupBarriers/capitalrequirements2.png'
        },
        {
            id: 2,
            text: 'Technical Knowledge Base',
            url1: '/images/startupBarriers/technicalknowledgebase1.png',
            url2: '/images/startupBarriers/technicalknowledgebase2.png'
        },
        {
            id: 3,
            text: 'Customer Cost of Switching',
            url1: '/images/startupBarriers/customercostofswitching1.png',
            url2: '/images/startupBarriers/customercostofswitching2.png'
        },
        {
            id: 4,
            text: 'Educating Your Market',
            url1: '/images/startupBarriers/educatingyourmarket1.png',
            url2: '/images/startupBarriers/educatingyourmarket2.png'
        },
        {
            id: 5,
            text: 'Access to Materials',
            url1: '/images/startupBarriers/educatingyourmarket1.png',
            url2: '/images/startupBarriers/educatingyourmarket2.png'
        },
        {
            id: 6,
            text: 'Access to Distribution Channels',
            url1: '/images/startupBarriers/accesstodistributionchannels1.png',
            url2: '/images/startupBarriers/accesstodistributionchannels2.png'
        },
        {
            id: 7,
            text: 'Patents',
            url1: '/images/startupBarriers/patents1.png',
            url2: '/images/startupBarriers/patents2.png'
        },
        {
            id: 8,
            text: 'Government Regulation',
            url1: '/images/startupBarriers/governmentregulations1.png',
            url2: '/images/startupBarriers/governmentregulations2.png'
        },
        {
            id: 9,
            text: 'Economies of Scale',
            url1: '/images/startupBarriers/economiesofscale1.png',
            url2: '/images/startupBarriers/economiesofscale2.png'
        },
        {
            id: 10,
            text: 'Product Differentiation',
            url1: '/images/startupBarriers/productdifferentiation1.png',
            url2: '/images/startupBarriers/productdifferentiation2.png'
        }
    ]

    return (
        <>
        <Paper className="paper" elevation={3}>
        <div className="pageContainer">
        <h1 className="heading">08. STARTUP BARRIERS</h1>
        <hr className="dotted dottedMargin"></hr>
        <h2 className="subheading">What factors affect our growth path?</h2>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ sm: 8 }} sx={{justifyContent: 'center'}}>
            {barriersArray.map(factor => (
                <Grid item sm={2} key={factor.id}>
                <Card raised="true" sx={{ height: 175, justifyContent: 'center' }}>
                {startupBarriers?.includes(factor.id) 
                    ?
                    <CardMedia
                        component="img"
                        className="media"
                        image={factor.url1}
                        alt={factor.text}
                    />
                    :
                    <CardMedia
                        component="img"
                        className="media imgOpaque"
                        image={factor.url2}
                        alt={factor.text}
                    />
                }
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
            <Typography variant="h5" className="subheading" gutterBottom>How we deal with our hurdles:</Typography>
            <Typography variant="subtitle1" className="subheading" gutterBottom>{enterpriseAnswers.barrierPlan6}</Typography>
        </div>
        </div>
        </Paper>
        </>
    )
};

export default ReportSection8StartupBarriers;