import react from 'react';
import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css';
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';


function SectionThreeSolution () {

    useEffect(() => {
        console.log('in use effect', painPointList)
    }, [painPointList]);

    const [painPointList, setPainPointList] = useState([]);

    const operatingSector = [
    'Consumer Goods',
	'Extractives & Minerals Processing',
	'Financials',
	'Food & Beverage',
	'Health Care',
	'Infrastructure',
	'Renewable Resources & Alternative Energy',
	'Resource Transformation',
	'Services',
	'Technology & Communications',
	'Transportation'
    ];

    const painPoints = [
        { name: 'Financial - areas where your customers are spending too much money', status: false},
        { name: 'Productivity - areas where your customer wants to be more efficient or productive', status: false},
        { name: 'Process - areas where you could provide more convenient processes for your customers', status: false},
        { name: 'Support - areas where customers are not receiving the support they need', status: false}
    ];



    const handleCheck = (event) => {
        console.log('box has been checked', event)

        for (let point of painPoints) {
            if (event === point.name)
        setPainPointList({
            ...painPoints,
            name: event,
            status: true
        });
        }


        console.log(painPointList)
    }

    return (
        <>
            <QuestionnaireNav />
            <h1 className='questionnaireForm'>Section 3 - Solution</h1>
            <p className='questionnaireForm'>In this section we ask for more detail regarding your business
            offering and how it can help potential customers.</p>
            <form className='questionnaireForm'>
                <h5>What sector do you operate in?</h5>
                <Box className='centerHelp' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m : 3}}>
                        {operatingSector.map(sector => (
                                <FormControlLabel 
                                    control={<Checkbox />} 
                                    label={sector}
                                    key={sector} />
                        ))}
                    </FormControl>
                </Box>
                <h5>Describe the profile of your PAYING customer:</h5>
                <p>What are the characteristics of your target user market?</p>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            width: 600,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Customer characteristics" 
                            variant="outlined" 
                            multiline rows={5}
                            fullWidth/>
                    </Box>
                </Grid>
                <h5>Who are your main competitors?</h5>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            width: 600,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Main competitors" 
                            variant="outlined" 
                            multiline rows={5}
                            fullWidth/>
                    </Box>
                </Grid>
                <h5>How does your product/service differ from your competitors?</h5>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            width: 600,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Differing competitive factors" 
                            variant="outlined" 
                            multiline rows={5}
                            fullWidth/>
                    </Box>
                </Grid>
                <h5>What customer pain points does your product/service seek to solve?</h5>
                <Box className='centerHelp' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m : 3}}>
                        {painPoints.map(point => (
                                <FormControlLabel 
                                    control={<Checkbox />} 
                                    onChange={() => handleCheck(point)}
                                    label={point.name}
                                    key={point.name} />
                        ))}
                    </FormControl>
                </Box>
                <h5>What do your clients/customers say about your product or service? (i.e. testimonial)</h5>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            width: 600,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Testimonial" 
                            variant="outlined" 
                            multiline rows={5}
                            fullWidth/>
                    </Box>
                </Grid>
                <br/>
                <br/><button>Submit</button>
            </form>
        </>
    )
};

export default SectionThreeSolution;